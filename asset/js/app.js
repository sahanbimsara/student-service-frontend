console.log("hello");

let txtStudentName 
    = document.getElementById("txt-student-name");

let txtStudentAddress 
    = document.getElementById("txt-student-address");

let txtStudentAge
    = document.getElementById("txt-student-age");

let btnSaveStudent = 
    document.getElementById("btn-save-student");


function btnSaveStudentOnClick(){
    let requestBody = {
        "name":txtStudentName.value,
        "address":txtStudentAddress.value,
        "age":txtStudentAge.value
    };

    fetch("http://localhost:8080/save-student",{
        method:"POST",
        body:JSON.stringify(requestBody),
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then(data=>data.json())
    .then(data=>{
        console.log("Response Recived");  
    })
}

btnSaveStudent
    .addEventListener("click",btnSaveStudentOnClick);