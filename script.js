
    document.getElementById('studentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let studentId = document.getElementById('studentId').value;
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let gender = document.getElementById('gender').value;
        let age = document.getElementById('age').value;
        let birthday = document.getElementById('birthday').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let course = document.getElementById('course').value;
        let yearLevel = document.getElementById('yearLevel').value;
        let faname = document.getElementById('faname').value;
        let moname = document.getElementById('moname').value;
        let contact = document.getElementById('contact').value;
        
        let user = {
            studentId: studentId,
            fname: fname,
            lname: lname,
            gender: gender,
            age: age,
            birthday: birthday,
            email: email,
            address: address,
            course: course,
            yearLevel: yearLevel,
            faname: faname,
            moname: moname,
            contact: contact
        };
        
        let users = JSON.parse(localStorage.getItem('students')) || [];
        
        
        if (document.getElementById('updateBtn').style.display === 'none') {
           
            users.push(user);
        } else {
            
            const userId = document.getElementById('updateBtn').dataset.id;
            users[userId] = user;
            document.getElementById('updateBtn').style.display = 'none';
        }
        
        localStorage.setItem('students', JSON.stringify(users));
        document.getElementById('studentForm').reset(); 
        alert('Student Registered successfully!');
    });

    document.getElementById('birthday').addEventListener('change', function() {
        const birthday = new Date(this.value);
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const monthDifference = today.getMonth() - birthday.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        
        document.getElementById('age').value = age;
    });
    