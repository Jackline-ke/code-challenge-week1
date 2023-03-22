//create a funtion that returns the respective grade
function grade(event){
    
    event.preventDefault();
    //get the value that will be input in our input area
    let text = document.getElementById("input").value;

    let marks = parseFloat(text);

    //variable that will hold our output grade
    let gradeValue = " ";

    //condition statement
    if(marks > 79 && marks <=100){
        gradeValue = "A";
    }else if(marks >= 60 && marks < 80){
        gradeValue = "B";
    }else if(marks <= 59 && marks >=49){
        gradeValue = "C";
    }else if(marks >=40 && marks <=48){
        gradeValue = "D";
    }else if(marks >=0 && marks <40){
        gradeValue = "E";
    }else{
        //if the grade is not within the range or its a string return "Enter valid markss"
        gradeValue = "Enter Valid Marks";
    }
//our output display in the browser
return document.querySelector("#gradeOutput").innerHTML = `Grade: ${gradeValue}`
}
//call the function
grade();



//create a function that returns points, "OK" and "License suspended"
function points(event) {
    event.preventDefault();
     
    // //get the value that will be input in our input area
    let text = document.getElementById("speedInput").value

    let speedFloat = parseFloat(text)
    
    //variable that will hold our output 
    let output = ""

    //our conditional statement
    if (speedFloat <= 70) {
        output = "Ok"
    }
   
    else {
        output = `Points: ${(speedFloat-70)/5}`
        if (((speedFloat-70)/5)>12) {
            output = "License suspended"
        }
    }
    //our output display in the browser
    return document.querySelector("#speedOutput").innerHTML = `Result: ${output}`;
}
//call the function
points();

//create a function that calculates the
function my_calculate(argument) {

    // get the salary input, benefit input and calculate button for html through there id
    let salary = document.getElementById('salary').value;
    let benefit = document.getElementById('benefit').value;
    //let calculate = document.getElementById('calculate');
   
    let taxablesalary =  +salary - +benefit;
    
   // condition statement of the PAYE
    let PAYE = 0
    if(salary <= 24000){
       PAYE =  salary * 0.1;
    }else if(salary >= 24001 && salary <= 32333){
       PAYE = salary * 0.25;
    }
    else if(salary >= 32334){
       PAYE =  salary * 0.30;
    }else{

    }
    
    //conditional statement of the NHIF
    let NHIF = 0
    if(salary <= 24000){
       NHIF =  salary * 0.1;
    }else if(salary >= 24001 && mysalary <= 32333){
       NHIF = salary * 0.25;
    }
    else if(salary >= 32334){
       NHIF = salary * 0.30;
    }else{

    }

    let newsalary =  +taxablesalary - (+taxablesalary * 0.06) - NHIF - PAYE
    //console.log(newsalary);

    alert();

}
my_calculate();

    







