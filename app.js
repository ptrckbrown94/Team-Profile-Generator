/*
done build 4 classes to pass tests
    1. Run tests
    2. Create or update classes to pass a single test case
    3. Repeat

    import prompt library from README copy.md
    ask the following questions:
    it is my understanding that you want to build an engineering team? 
    yes or no
    how many employees for the team (1-10)

 need to still do   
    use prompt to ask for new employee from user
    name, id, email, employee type (string)
    add employee to array/list of employees
    4loop for employee data entry 
    loop over all employees and generate htlm
    show html to person 

*/

const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt({
    message: "It is my understanding that you want to build an engineering team",
    name: "answer"
})
    .then(function ({ answer, }) {
        console.log("You entered: " + answer)
        if (answer === "yes") {

            setUpQuestions();
        } else {

            console.log("I guess we're all done!")
        }

    });



function setUpQuestions() {
    inquirer.prompt([{
        type: "question",
        message: "What is the team member's name?",
        name: "name"
    },

    {
        type: "question",
        message: "what is the employee's ID",
        name: "id"
    },

    {
        type: "question",
        message: "what is the employee's email address",
        name: "email"
    },

    {
        type: "list",
        message: "How big do you want your team?",
        choices: [2, 3, 4, 5, 6, 7, 8],
        name: "answer"
    }])
        .then(function (response) {
            createEmployees(response.answer)
        });
}

function createEmployees(numberOfEmployees) {
    console.log("number of employees =" + numberOfEmployees)
    
    for (let i = 0; i < numberOfEmployees; i++) {

        askEmployeeType()
    }
}

function askEmployeeType() {
    //array of questions for inquirer 
    //.thenk(function(response))
    // switch statements 
    console.log("working")
    inquirer.prompt(

        {
            type: "list",
            message: "What title does the team member have?",
            choices: ["Manager", "Enginer", "Intern"],
            name: "employeeType"
        })
       
        //Elliot Trejos helped wth the switch 
        .then(function (response) {
            console.log("check switch")
            switch (response.employeeType) {
                case "Intern":
                    internQuestion(response);
                    return;
                case "Engineer":
                    engineerQuestion(response);
                    return;
                case "Manager":
                    managerQuestion(response);
                    return;
                default:
                    return;
            }
            

        });
        console.log("broken")
}


//const newIntern = new Intern(input.name, input.id, input.email, response.school)
// console.log(newIntern)
// {
// name: input.name,
// id: input.id,
// email: input.email
// school: resposnse.school
// }

//const newManager = new newManager(input.name, input.id, input.email, response.officeNumber)
// console.log(newManager)
// {
// name: input.name,
// id: input.id
// email: input.email
// office: input.officeNmber    
// }

//function internQuestion(input) {
//    // inquirer stuff
//    // .then(function(response) {
//    console.log("response")
//    //    console.log(input) - intern question and answer
//    //    create a new Intern with the responses
//    // })
//}
//// [ q4. question specific to job]
//
//function engineerQuestion() {
//
//}