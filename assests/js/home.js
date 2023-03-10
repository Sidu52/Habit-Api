

const habitbutton = document.querySelectorAll('.habitbutton');
const card = document.querySelectorAll('.card');
const cardbutton = document.getElementById('week-select-button');

// Change Button Color According To User Habit Data.
habitbutton.forEach((button) => {
  if (button.innerText === "notdone") {
    button.style.backgroundColor = "#f53636";
  } else if (button.innerText === "done") {
    button.style.backgroundColor = "#06f306";
  } else {
    button.style.backgroundColor = "#ffff06";
  }
});

// Write Ajax code for Update User Habbit in Database
function sendDone(id, day, val) {
  var xhr = new XMLHttpRequest();
  var url = `/update/updatehabbit/?id=${id}&day=${day}&val=${val}`;
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      changevalue(xhr.response);
      console.log('Done message sent successfully!');
    } else {
      alert('An error occurred while sending the Done message.');
    }
  };
  
  xhr.send(JSON.stringify({ status: val }));
}
function changevalue(data){
      // Get the button element that was clicked
      var button = document.activeElement;
      // Update the text of the button to reflect the new status
      button.innerText = data;
      if (button.innerText === "notdone") {
        button.style.backgroundColor = "#f53636";
      } else if (button.innerText === "done") {
        button.style.backgroundColor = "#06f306";
      } else {
        button.style.backgroundColor = "#ffff06";
      }
}

// Get the current time and Set in user details box
var currentTime = new Date().getTime();

// Set the bedtime to 10 PM
var bedtime = new Date();
bedtime.setHours(22);
bedtime.setMinutes(0);
bedtime.setSeconds(0);

// Calculate the time until bedtime
var timeUntilBedtime = bedtime.getTime() - currentTime;

// Convert the time to hours, minutes, and seconds
var hours = Math.floor(timeUntilBedtime / (1000 * 60 * 60));
var minutes = Math.floor((timeUntilBedtime % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((timeUntilBedtime % (1000 * 60)) / 1000);

// Output the result

document.querySelector(".bedtime").innerText = hours + " hrs " + minutes + " mins till bedtime"



