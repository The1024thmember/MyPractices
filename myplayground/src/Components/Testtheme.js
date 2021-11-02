import React, { useEffect, useState, useRef } from 'react';
import myTheme from '../Themes/Theme';
export const TestTheme = () =>{
  //Change the theme according to the current time
  const [dateTime,setDateTime] = useState("");
  var bg_color_1 = useRef("");
  var bg_color_2 = useRef("");
  var hightlight_color_1 = useRef("");
  var hightlight_color_2 =  useRef("");
  var simulateTime =  useRef("");
  useEffect(()=>{
    setTimeout(()=>{
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        setDateTime(date+' '+time);
        if (today.getSeconds()<15){
            bg_color_1.current.value = myTheme.palette.sunrise.bg_green;
            bg_color_2.current.value = myTheme.palette.sunrise.bg_orange;
            hightlight_color_1.current.value = myTheme.palette.sunrise.hightlight_orange;
            hightlight_color_2.current.value = myTheme.palette.sunrise.hightlight_yellow;
            simulateTime.current.value = "sunrise";
        }else if (today.getSeconds()<30) {
            bg_color_1.current.value = myTheme.palette.daytime.bg_white;
            bg_color_2.current.value = myTheme.palette.daytime.bg_white;
            hightlight_color_1.current.value = myTheme.palette.daytime.hightlight_blue;
            hightlight_color_2.current.value = myTheme.palette.daytime.hightlight_black;
            simulateTime.current.value = "daytime";
        }else if(today.getSeconds()<45) {
            bg_color_1.current.value = myTheme.palette.sunset.bg_purple;
            bg_color_2.current.value = myTheme.palette.sunset.bg_orange;
            hightlight_color_1.current.value = myTheme.palette.sunset.hightlight_orange;
            hightlight_color_2.current.value = myTheme.palette.sunset.hightlight_black;     
            simulateTime.current.value = "sunset";      
        }else {
            bg_color_1.current.value = myTheme.palette.night.bg_black;
            bg_color_2.current.value = myTheme.palette.night.bg_purple;
            hightlight_color_1.current.value = myTheme.palette.night.hightlight_purple;
            hightlight_color_2.current.value = myTheme.palette.night.hightlight_gray;
            simulateTime.current.value = "night";               
        }
    },1000);
  },[dateTime]);
  return (
    <>
        <h1 ref={simulateTime}>{dateTime}-{simulateTime.current.value}</h1>
        <div ref={bg_color_1} style={{marginLeft:myTheme.spacing(150)}}>
            <div style={{
                backgroundColor:`${bg_color_1.current.value}`,
                height:myTheme.spacing(20),
                width:myTheme.spacing(100),
                }}>

            </div>
            <div ref={bg_color_2} style={{
                backgroundColor:`${bg_color_2.current.value}`,
                height:myTheme.spacing(20),
                width:myTheme.spacing(100),
                }}>

            </div>
            <div ref={hightlight_color_1} style={{
                backgroundColor:`${hightlight_color_1.current.value}`,
                height:myTheme.spacing(20),
                width:myTheme.spacing(100),
                }}>

            </div>
            <div ref={hightlight_color_2} style={{
                backgroundColor:`${hightlight_color_2.current.value}`,
                height:myTheme.spacing(20),
                width:myTheme.spacing(100),
                }}>

            </div>
        </div>

    </>
  );
};
