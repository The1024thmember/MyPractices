var express = require('express');
var router = express.Router();
const filename = './public/comments.json';
var comments = require(filename);
const helper = require('./helper.js');
//sending information about backend data from server
router.get('/', function(req, res) {
    res.send('server is running');
});

router.get('/comments', async function(req, res) {
    await gethistoryRecords()
    .then((posts) => res.json(posts))
    .catch((err) => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
});

router.post('/comments', async function(req, res) {
    await inserthistoryRecord(req.body)
    .then((post) => res.status(201).json({
        message: `The post #${post.id} has been updated`,
        content: post
    }))
    .catch((err) => res.status(500).json({ message: err.message }))
});

/****************** Insert a new history API*************/
router.post('/comments',  async (req, res) => {
    await inserthistoryRecord(req.body)
    .then((post) => res.status(201).json({
        message: `The post #${post.id} has been updated`,
        content: post
    }))
    .catch((err) => res.status(500).json({ message: "I am the boodly error" }))
})


/********************Helper function**********************/
/* Get all history records from backend (history.json) */
function gethistoryRecords() {
    return new Promise((resolve, reject) => {
        resolve(comments)
    })
}

/*Insert new purchase History into backend (history.json)*/
function inserthistoryRecord(newhistoryRecord) {
    return new Promise((resolve,reject) => {
        try{
            const id =  helper.getNewId(comments)
            console.log("id:",id)
            const temp = { "id": id, "comment": newhistoryRecord }
            comments.push(temp)
            helper.writeJSONFile(filename,comments)
            resolve(temp)
        }catch(err){
            reject("error in here!!",err)
        }
    })
}

module.exports = router;