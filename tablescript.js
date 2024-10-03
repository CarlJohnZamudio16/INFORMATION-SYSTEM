
function loadUsers() {
    let users = JSON.parse(localStorage.getItem('students')) || [];
    console.log(users); 
    let tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
    
    users.forEach((user, index) => {
        let row = `<tr>
            <td>${user.studentId}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.gender}</td>
            <td>${user.age}</td>
             <td>${user.birthday}</td>
            <td>${user.email}</td>
             <td>${user.address}</td>
            <td>${user.course}</td>
            <td>${user.yearLevel}</td>
            <td>
                <button onclick="editUser(${index})" class="btn btn-sm">Edit</button>
                <button onclick="deleteUser(${index})" class="btn btn-sm">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}


function editUser(id) {
    let users = JSON.parse(localStorage.getItem('students'));
    let user = users[id];

    document.getElementById('studentId').value = user.studentId;
    document.getElementById('fname').value = user.fname;
    document.getElementById('lname').value = user.lname;
    document.getElementById('email').value = user.email;
    document.getElementById('address').value = user.address;
    document.getElementById('course').value = user.course;
    document.getElementById('yearLevel').value = user.yearLevel;
    document.getElementById('gender').value = user.gender;
    document.getElementById('age').value = user.age;
    document.getElementById('birthday').value = user.birthday;

    document.getElementById('updateBtn').style.display = 'inline';
    document.getElementById('updateBtn').dataset.id = id;
}


function deleteUser(id) {
    let users = JSON.parse(localStorage.getItem('students')) || [];
    users.splice(id, 1); 
    localStorage.setItem('students', JSON.stringify(users));
    loadUsers(); 
}


window.onload = function() {
    loadUsers();
};

function editUser(id) {
    let users = JSON.parse(localStorage.getItem('students')) || [];
    let user = users[id];

    let newStudentId = prompt("Edit Student Id:", user.studentId);
    let newFname = prompt("Edit First Name:", user.fname);
    let newLname = prompt("Edit Last Name:", user.lname);
    let newAddress = prompt("Edit Address:", user.address);
    let newEmail = prompt("Edit Email:", user.email);
    let newCourse = prompt("Edit Course:", user.course);
    let newYearLevel = prompt("Edit Year level:", user.yearLevel);
    let newAge = prompt("Edit Course:", user.age);
    let newBirthday = prompt("Edit Year level:", user.birthday);

    user.studentId = newStudentId !== null ? newStudentId : user.studentId;
    user.fname = newFname !== null ? newFname : user.fname;
    user.lname = newLname !== null ? newLname : user.lname;
    user.email = newEmail !== null ? newEmail : user.email;
    user.address = newAddress !== null ? newAddress : user.address;
    user.course = newCourse !== null ? newCourse : user.course;
    user.yearLevel = newYearLevel !== null ? newYearLevel : user.yearLevel;
    user.age = newAge !== null ? newAge : user.age;
    user.birthday = newYearLevel !== null ? newBirthday : user.birthday;

    
    localStorage.setItem('students', JSON.stringify(users));

   
    loadUsers();
}

