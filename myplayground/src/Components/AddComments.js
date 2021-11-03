import React from 'react';
import { useQuery } from 'react-query';
export const AddComments = () =>{
  //createRef allows to change value without re-render, unshift push new element in the begain
  //focusPoint.current.value will change on input typing, can also change by setting the value manuallyc
  const focusPoint = React.useRef(null);
  const [comments,setComments]=React.useState([]);
  const onClickHandler = () => {
    focusPoint.current.value =
      "The quick brown fox jumps over the lazy dog";
      focusPoint.current.focus();
  };
  //display the comments use ref on the screen
  const handlesubmit = () =>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    const temp = [...comments];
    temp.unshift({"Comments":focusPoint.current.value,"Time":dateTime});
    setComments(temp);
    console.log(focusPoint.current.value);
    console.log("comments,",comments);
    var result = handleComment();
    console.log('posting result:',result);
    refetch();
  };

   //Clicking to delete
   const handeClickDelete = (key) => {
      const temp = [...comments];
      temp.splice(key,1);
      setComments(temp);
      console.log("key = ",key);
      console.log("clicking comments ",comments);
   }
 
  //get backend comment data
  const getComments = async () => await (await fetch(`http://localhost:5000/comments`)).json();
  const { data, isLoading, error, refetch } = useQuery(
    'history comments',
    getComments,
  );
  const handleComment = () => {
    //post to backend
    const newComment =  {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({comment: focusPoint.current.value }) 
    }
    //upload purchase info to backend
    const putComment = async() => (await fetch(`http://localhost:5000/comments`, newComment)).json();
    return putComment();
  }

  console.log("comments data:",data);

  return (
      <>
      <div>
        <button onClick={onClickHandler}>
         Action
        </button>
      </div>
      <label>
       Click on the action button to
       focus and populate the text.
      </label><br/>
      <textarea ref={focusPoint} />
      <br/>
      <button onClick={handlesubmit}>
         submit
     </button>
     <br/>
     <label>Fetching from backend</label>
     {data && data.map((value,key)=>
        <div key={key}>
            <p >Id:{value.id}</p>
            <p >Comments:{value.comment.comment}</p>
        </div> 
     )}
     <hr />
    <label>UseRef</label>
    {comments && comments.map((value,key)=>
        <div style={{backgroundColor:'red'}} key={key} onClick={()=>handeClickDelete(key)}>
            <p >Time:{value.Time}</p>
            <p >Comments:{value.Comments}</p>
        </div> 
     )}
    </>
  );
};
