import React, { useRef } from 'react';

export const SignUp = () =>{
  //createRef allows to change value without re-render, unshift push new element in the begain
  //focusPoint.current.value will change on input typing, can also change by setting the value manuallyc
  const username = React.useRef(null);
  const password = React.useRef(null);
  const checkSubmit=()=>{
      var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      var errorMessage = [];
      if (typeof username.current.value === 'undefined' || format.test(username.current.value)){
        errorMessage.push('Please provide a valid username');
      }
      if (typeof password.current.value === 'undefined' || password.current.value.length<6){
        errorMessage.push('Please provide a valid password with at least 7 digit');
      }
      if (errorMessage.length){
          alert(errorMessage.join(","));
      }
  }
  return (
    <>
        <form onSubmit={checkSubmit}>
            <label>Username:</label>
            <input ref={username} type="text"/>
            <br />
            <label>Password:</label>
            <input ref={password} type="password"/>
            <br />
            <button type="submit">Submit</button>
        </form>
    </>
  );
};
