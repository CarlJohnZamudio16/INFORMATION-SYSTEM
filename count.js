function updateStudentCount() {
    
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    
    
    const studentCount = storedStudents.length;

    
    let firstYearCount = 0;
    let secondYearCount = 0;
    let thirdYearCount = 0;
    let fourthYearCount = 0;

    
    let bsitCount = 0;
    let bscsCount = 0;
    let bsbaCount = 0;
    let bsceCount = 0;

    storedStudents.forEach(student => {
       
        if (student.yearLevel === '1st Year') {
            firstYearCount++;
        } else if (student.yearLevel === '2nd Year') {
            secondYearCount++;
        } else if (student.yearLevel === '3rd Year') {
            thirdYearCount++;
        } else if (student.yearLevel === '4th Year') {
            fourthYearCount++;
        }

        
        if (student.course === 'BSIT') {
            bsitCount++;
        } else if (student.course === 'BSCS') {
            bscsCount++;
        } else if (student.course === 'BSBA') {
            bsbaCount++;
        } else if (student.course === 'BSCE') {
            bsceCount++;
        }
    });

    
    document.getElementById('studentCount').textContent = studentCount;
    document.getElementById('firstYearCount').textContent = `1st Year: ${firstYearCount}`;
    document.getElementById('secondYearCount').textContent = `2nd Year: ${secondYearCount}`;
    document.getElementById('thirdYearCount').textContent = `3rd Year: ${thirdYearCount}`;
    document.getElementById('fourthYearCount').textContent = `4th Year: ${fourthYearCount}`;

    document.getElementById('bsitCount').textContent = `BSIT: ${bsitCount}`;
    document.getElementById('bscsCount').textContent = `BSCS: ${bscsCount}`;
    document.getElementById('bsbaCount').textContent = `BSBA: ${bsbaCount}`;
    document.getElementById('bsceCount').textContent = `BSCE: ${bsceCount}`;
}


updateStudentCount();
