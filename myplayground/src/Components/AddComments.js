import React from 'react';

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
  const handlesubmit = () =>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    const temp = [...comments]
    temp.unshift({"Comments":focusPoint.current.value,"Time":dateTime});
    setComments(temp);
    console.log(focusPoint.current.value);
    console.log("comments,",comments);
  };
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
     {comments.map((value,key)=>
        <div key={key}>
            <p >Time:{value.Time}</p>
            <p >Comments:{value.Comments}</p>
        </div> 
     )}
    </>
  );
};
