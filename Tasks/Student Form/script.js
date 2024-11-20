var formDetails = document.getElementById("formDetails")
var studentList = document.getElementById("studentList")

// We cannot attach a submit event listener to the saveButton element itself, because buttons don't have a submit event. Submit Event Listener typically trigger the form submission when clicked.
formDetails.addEventListener("submit", function(event){
    event.preventDefault()

    // You can also use ID's to do selection
    var studentName = document.getElementsByName("name")[0].value
    var studentAge = document.getElementsByName("age")[0].value
    var studentGender = document.querySelector('input[name="gender"]:checked').value
    var studentCourse = document.querySelector("select[name='course']").value
    var studentEmail = document.getElementsByName("emailId")[0].value
    
    var student = {studentName, studentAge, studentGender, studentCourse, studentEmail}
    addStudent(student)

    this.reset()
})

function addStudent(student){
    var tableRow = document.createElement("tr")
    var nameCell = document.createElement("td")
    var ageCell = document.createElement("td")
    var genderCell = document.createElement("td")
    var courseCell = document.createElement("td")
    var emailCell = document.createElement("td")
    var actionCell = document.createElement("td")

    tableRow.setAttribute("class", "table-row");
    nameCell.textContent = student.studentName
    ageCell.textContent = student.studentAge
    genderCell.textContent = student.studentGender
    courseCell.textContent = student.studentCourse
    emailCell.textContent = student.studentEmail

    var deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.setAttribute("class", "deleteBtn")
    deleteButton.addEventListener("click", function(){
      // studentList.removeChild(tableRow);
      // Note: Here removeChild automatically detects the current tableRow.
      event.target.closest(".table-row").remove();     
    })

    actionCell.style.textAlign = "center"
    actionCell.appendChild(deleteButton)

    tableRow.appendChild(nameCell)
    tableRow.appendChild(ageCell)
    tableRow.appendChild(genderCell)
    tableRow.appendChild(courseCell)
    tableRow.appendChild(emailCell)
    tableRow.appendChild(actionCell)

    studentList.appendChild(tableRow)
}