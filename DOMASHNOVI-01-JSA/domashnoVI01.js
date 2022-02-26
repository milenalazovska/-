// Fetch call
function makeCall(url, callbackFunction) {
    fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log('The request succeeded!');
            if (callbackFunction)
                callbackFunction(response);
        })
        .catch(error => {
            console.log('The request failed!');
            if (callbackFunction)
                callbackFunction(error);
        })
}

function print(results) {
    console.log(results);

  //All students with an average grade higher than 3.
    let gradeHigherThan3Array = results.filter(result => result.averageGrade > 3);
    console.log(gradeHigherThan3Array);

  //All female student names with an average grade of 5.
   let femaleAverageGrade = results.filter(result => result.gender == 'Female' && result.averageGrade == 5);
   console.log(femaleAverageGrade);

   //All male student full names who live in Skopje and are over 18 years old.
   let maleOver18 = results.filter(result => result.gender == 'Male' && result.city == "Skopje" && result.age > 18);
   console.log(maleOver18);

   //The average grades of all female students over the age  of 24.
   let femaleStudentsOver24 = results.filter(result => result.gender == 'Female' && result.age > 24 && result.averageGrade);
   let averageGrades = femaleStudentsOver24.map(result => result.averageGrade);
   console.log(averageGrades)

   //All male students with a name starting with B and average grade over 2.
   let maleStudents = results.filter(result => result.gender == 'Male' && result.averageGrade > 2 );
   let maleStudentsOnB = maleStudents.map(result => result.firstName);
   let startsOnB = maleStudentsOnB.filter((student) => student.startsWith("B"));
   console.log(startsOnB);
   
}

makeCall("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json", print);

    
