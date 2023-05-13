import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const time = date.getHours();
var texting = undefined;
const cssSyl = {

};
if (time >= 1 && time < 11) {
  texting = "Good Morning";
  cssSyl.color = 'Green';
}
else if (time >= 12 && time <= 19) {
  texting = "Good Afternoon";
  cssSyl.color = 'Orange';
}
else if (time >= 20 && time <= 0) {
  texting = "Good Night";
  cssSyl.color = 'Black';
}

const heading = {
  padding: '40px',
  margin: 'auto',
  fontSize: '60px',
  backgroundColor: 'white',
  borderRadius: '15px 15px',

}
const mainDiv = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lavender',
}
ReactDOM.render(
  <>
    <div style={mainDiv}>
      <h1 style={heading}><span>Hello Sir, </span><span style={cssSyl}>{texting}</span></h1>
    </div>

  </>

  ,
  document.getElementById('root')
);