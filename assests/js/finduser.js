const habitbox = document.querySelector('.habit-card')

var selectButton = document.getElementById('week-select-button');
    // Add a click event listener to the button
    selectButton.addEventListener('click', function() {
        // Get the selected day from the select element
        var selectedDay = document.getElementById('week-selector').value;
        
        // Send a GET request to the server with the selected day as a query parameter
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/update/selectday?day=' + selectedDay);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                renderUserData(users);
            } else {
                console.error('Error fetching user data');
            }
        };
        xhr.send();
    });

    function renderUserData(data){
        habitbox.innerHTML=""
        for (let i = 0; i < data.length; i++) {
            
            habitbox.innerHTML+=`<div id="cardcontainer">user_habit.day</div>
            <div class="card">
                <div>
                    <h1>
                        ${data[i].habit}
                    </h1>
                    <a href="#" onclick="sonu('${data[i]._id}')"><i class="uil uil-trash-alt"></i></a>

                </div>
                <div>
                    <a href="#" name="done">
                        <p>Done</p>
                    </a>
                    <a href="#" name="not-done">
                        <p>Not-Done</p>
                    </a>
                </div>
            </div>`
        }
    }

    function sonu (id){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', `/update/delete?id=${id}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                
            } else {
                console.error('Error fetching user data');
            }
        };
        xhr.send();
    }

