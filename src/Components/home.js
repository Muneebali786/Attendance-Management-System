import React, { useState } from 'react';
//import TimePicker from 'react-time-picker';
//import styled from "styled-components";
//import TimeField from 'react-simple-timefield';
import Timer from './Timer/timer';
import Moment from 'moment';

const Home=() => {
const [time1, setTime1] = useState(new Date());
const [time2, setTime2] = useState(new Date());

const Users = [
  {
    id: '01', name: 'Muneeb', timeIn:'08:00am', timeOut: '10:00pm', totalTime: '00:00'
  },
  {
    id: '02', name: 'Hassan', timeIn:'08:00am', timeOut: '10:00pm', totalTime: '00:00'
  },
  {
    id: '03', name: 'Umer',timeIn:'08:00am', timeOut: '10:00pm', totalTime: '00:00'
  },
  {
    id: '04', name: 'Qasid',timeIn:'08:00am', timeOut: '10:00pm', totalTime: '00:00'
  },
];
const [dUser, setUser] = useState(Users);
const [totalTime, setTotalTime] = useState("HH:mm:ss");


//const [totalHours, settotalHours] = useState(0);
//const [totalMinutes, settotalMinutes] = useState(0);
//const [totalSeconds, settotalSeconds] = useState(0);

function onTimeInChange(i){

  const Time = Moment().format("hh:mm:ss a")

 let newArr= [...dUser];
 newArr[i].timeIn=Time;
  setUser(newArr)

  }
  //const Add = item.timeIn
  //const start = Moment().add(-4, 'm');
  

//   const StyledButton = styled.button`
//         paddingtop:2px;`;



// function onTimeOutChange(){
//     setTime2(new Date());
//     const time = time2-time1
//     const timeinHours = time/(1000*60*60)
//     setTotalTime(timeinHours);
//     console.log('Time 2: ', time2)
//     console.log('total time: ', time2)


 function onTimeOutChange(i){

  const Time = Moment().format("hh:mm:ss a")

  let newArr= [...dUser];
  newArr[i].timeOut=Time;
   setUser(newArr)

//   const timeStart = new Date("Mon Jan 01 2007 11:00:00 GMT+0530").getTime();
// const timeEnd = new Date("Mon Jan 01 2007 11:30:00 GMT+0530").getTime();
// const hourDiff = timeEnd - timeStart; //in ms
// const secDiff = hourDiff / 1000; //in s
// const minDiff = hourDiff / 60 / 1000; //in minutes
// const hDiff = hourDiff / 3600 / 1000; //in hours
// const humanReadable = {};
// humanReadable.hours = Math.floor(hDiff);
// humanReadable.minutes = minDiff - 60 * humanReadable.hours;
// console.log("Time difference", humanReadable);
// setTotalTime(prevState => minDiff);

// const startTime = new Date("Mon Jan 01 2007 11:00:00 GMT+0530").getTime();
// const a = new Date("Mon Jan 01 2007 11:30:00 GMT+0530").getTime();
// const duration = Moment.duration(a.diff(startTime));
// const hours = duration.hours();
// const mints = duration.minutes();
// setTotalTime(prevState => mints);


//var now = Moment('2020-11-18T23:03:55'); //todays date
//var now = Moment([21,30], "HH:mm:ss");
//var end = Moment(new Date(), "HH:mm:ss");
var now = Moment((newArr[i].timeOut), "HH:mm:ss")
var end = Moment(newArr[i].timeIn, "HH:mm:ss"); // another date
var duration = Moment.duration(now.diff(end));
var minutes = duration.minutes() 
var hour = duration.hours(); 
console.log(minutes)
setTotalTime(`${hour} hrs`+`${minutes} min`);
// const a = Moment(new Date())//now
// const b = Moment(new Date())
// // const b = Moment([25,30],"HH:mm:ss");

// console.log(a.diff(b, 'minutes')) // 44700
// console.log(a.diff(b, 'hours')) // 745
// console.log(a.diff(b, 'days')) // 31
// console.log(a.diff(b, 'weeks')) // 4
// setTotalTime( a.diff(b,'minutes'))


// let tTime = [...dUser, humanReadable]
// tTime[i].totalTime=humanReadable
//   setTotalTime(tTime)

   //const start = Moment().add(-4, 'm');
  // console.log(Users);
  //   setTime2(new Date());
  //  const  time = time2- time1
  //  const seconds = time/1000;
  //  const minutes = time/(1000*60)
  //  const hours = time/(1000*60*60)
  //   settotalHours(hours.toFixed(0))
  //   settotalMinutes(minutes.toFixed(0))
  //   settotalSeconds(seconds.toFixed(0))
    //a.diff(b, 'hours') // 12

    // setTotalTime();
    
  }

  return (
    
    <div class="main-body">
        <br></br>
  <div class="page-wrapper">
      <div className="pcoded-inner-content">
    <div class="row">
    <div className="col-10 mx-auto">
      <div class="col">
      <div class="card">
                      <div class="card-header">
                        <h5 class="card-title">Employee List</h5>
                        <span class="d-block m-t-5">Employee Information</span>
                      </div>
                      <div class="card-body">
                        <div class="table-responsive">
                          <table class="table table-hover" >
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th></th>
                                <th>TimeIn</th>
                                <th>TimeOut</th>
                                <th></th>
                                <th>TotalTime</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                             

                              
                                {dUser.map((item,i)=>{
                                  return ( <tr key={item.id}>
                                    <th>{item.name}</th>
                                    <button type="button" onClick={()=>onTimeInChange(i)} class="btn btn-danger btn-sm">In</button>
                                  
                                    <td>{<Timer date={item.timeIn}/>}</td>
                                    <td>{<Timer date={item.timeOut}/>}</td>
                                    <button type="button" onClick={()=>onTimeOutChange(i)} class="btn btn-danger btn-sm">Out</button>
                                    <td> {totalTime} </td>
                                    <td>Present</td>
                                  </tr>
                                    
                                    )
                                  
                                    // return <div>{item.name}</div>
                                  
                                })
                              
                                }
                            

                              {/* <tr>                               
                                <th>Muneeb</th>
                                <button type="button" onClick={onTimeInChange} class="btn btn-danger btn-sm">In</button>
                                <td>{<Timer date={time1}/>}</td>
                                <td>{<Timer date={time2}/>}</td>                               
                                <button type="button" onClick={onTimeOutChange} class="btn btn-danger btn-sm">Out</button>
                                <td> {totalHours}:{totalMinutes}:{totalSeconds} </td>
                                <td>Present</td>
                              </tr> */}
                              
                              {/* <tr>
                                <th>Hassan</th>
                                <button type="button" onClick={onTimeInChange} class="btn btn-danger btn-sm">In</button>
                                <td>{<Timer date={time1}/>}</td>
                                <td>{<Timer date={time2}/>}</td>
                                <button type="button" onClick={onTimeOutChange} class="btn btn-danger btn-sm">Out</button>
                                <td> - </td>
                                <td>Present</td>
                              </tr> */}
                            </tbody>
                          </table>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          
  );
}

export default Home;