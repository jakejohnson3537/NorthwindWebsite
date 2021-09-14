(function NorthwindWebsite() {
    var button1;
    var button2;
    var button3;
    var button4;



function openApi() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { //done
            if (xhr.status === 200) { //ok
                // alert(xhr.responseText);

                 var employees = JSON.parse(xhr.responseText);

                

                var html = "<table class='table'>" +
                "<thead>" +
                    "<tr>" +
                        "<th scope='col'>EmployeeId</th>" +
                        "<th scope='col'>Last Name</th>" +
                        "<th scope='col'>FirstName</th>" +
                        "<th scope='col'>TitleId</th>" +
                        "<th scope='col'>TitleOfCourtesyId</th>" +
                        "<th scope='col'>Birthdate</th>" +
                        "<th scope='col'>HireDate</th>" +
                        "<th scope='col'>Address</th>" +
                        "<th scope='col'>City</th>" +
                        "<th scope='col'>StateId</th>" +
                        "<th scope='col'>ZipCode</th>" +
                        "<th scope='col'>PersonalPhone</th>" +
                        "<th scope='col'>Extension</th>" +
                        "<th scope='col'>Salary</th>" +
                        "<th scope='col'></th>" +
                        "<th scope='col'></th>" +
                    "</tr>" +
               "</thead>" +
                "<tbody>" ;

                for (var i = 0; i < employees.length; i++) {
                    var emp = employees[i];
                    

                     html = html + "<tr><th scope='row'>" + emp.employeeId 
                     + "</th>" + "<td>" + emp.lastName 
                     + "</td><td>" + emp.firstName 
                     + "</td><td>" + emp.titleId 
                     + "</td><td>" + emp.titleOfCourtesyId 
                     + "</td><td>" + emp.birthDate 
                     + "</td><td>" + emp.hireDate 
                     + "</td><td>" + emp.address 
                     + "</td><td>" + emp.city 
                     + "</td><td>" + emp.stateId 
                     + "</td><td>" + emp.zipCode
                     + "</td><td>" + emp.personalPhone
                     + "</td><td>" + emp.extension
                     + "</td><td>" + emp.salary 
                     + "<button id='js-btn1' type='button' class='btn btn-primary btn-sm'>edit</button>" +
                     "<button id='js-btn2' type='button' class='btn btn-primary btn-sm'>delete</button>" +
                     + "</td></tr>" ;
                }

                html = html + "</tbody>" +
                        "</table>";


                var dynamic = document.getElementById("dynamic");
                dynamic.innerHTML = html
            } else {
                alert(xhr.statusText);
            }
        }
    };

    xhr.open('GET', 'https://localhost:4000/EmployeeList', true);
    xhr.send();

}

function openTable() {

    var table1;
    

    table1 = document.getElementById("table1");
    // table2 = document.getElementById("table-hidden2");

    if (table1.classList.contains("table-hidden1")){
        table1.classList.remove("table-hidden1");
        table1.classList.add("table-hidden2");
    }
    else {
        table1.classList.remove("table-hidden2");
        table1.classList.add("table-hidden1");
    }
}

function openTable2() {

    var table2;
    

    table2 = document.getElementById("table2");
    // table2 = document.getElementById("table-hidden2");

    if (table2.classList.contains("table2-hidden")){
        table2.classList.remove("table2-hidden");
        table2.classList.add("table2-show");
    }
    else {
        table2.classList.remove("table2-show");
        table2.classList.add("table2-hidden");
    }
}

function insertEmployee() {
    var lastName1 = document.getElementById("lastName1");
    var firstName1 = document.getElementById("firstName1");
    var address1 = document.getElementById("address1");
    var city1 = document.getElementById("City1");
    var state1 = document.getElementById("StateId1")
    var zipCode1 = document.getElementById("zipCode1");
    var personalPhone1 = document.getElementById("phone1")
    var extension1 = document.getElementById("ext1");
    var Salary1 = document.getElementById("Salary1")

    var firstName = firstName1.value;
    var lastName = lastName1.value;
    var address = address1.value;
    var city = city1.value;
    var state = state1.value;
    var zipCode = zipCode1.value;
    var personalPhone = personalPhone1.value;
    var extension = extension1.value;
    var salary = Salary1.value


    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { //done
            if (xhr.status === 200) { //ok
                // alert(xhr.responseText);

                //var response = JSON.parse(xhr.responseText);
                //alert("success from Api");
                } else {
                // alert(xhr.statusText);
                alert(xhr.statusText);
                }
            }
        }

        var baseURL = "https://localhost:4000/EmployeeList/insertEmployee";
        var queryString = "?lastName=" + lastName  
        + "&firstName=" + firstName 
        + "&titleId=" + 1
        + "&titleOfCourtesyId=" + 1
        + "&address=" + address 
        + "&city=" + city 
        + "&stateId=" + state 
        + "&zipCode=" + zipCode
        + "&personalPhone=" + personalPhone
        + "&extension=" + extension
        + "&salary=" + salary;
        var request = baseURL + queryString;
        //alert(request);

        xhr.open('GET', request, true);
        //xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    
}



button1 = document.getElementById("btn1");
    button1.addEventListener("click", openApi);

button2 = document.getElementById("btn2");
    button2.addEventListener("click", openTable);

button3 = document.getElementById("btn3");
    button3.addEventListener("click",openTable2);

button4 = document.getElementById("submit-btn");
    button4.addEventListener("click", insertEmployee);

}());