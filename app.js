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
use prompt to ask for new employee from user
    name, id, email, employee type (string)
add employee to array/list of employees
4loop for employee data entry 
loop over all employees and generate htlm
show html to person 

*/

const inquirer = require("inquirer");


inquirer.prompt({
    message: "It is my understanding that you want to build an engineering team?",
    name: "answer"
})
    .then(function ({ answer, }) {
        console.log(answer)
        if (answer === "yes") {

            setUpQuestions()
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
        message:"what is the employee's ID",
        name:"id"
    },

    {
        type:"question",
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
        })
}

function createEmployees(numberOfEmployees) {
    console.log(numberOfEmployees)
    let employeeNumber = 0;

    function makeSingleEmployee() {
        if (employeeNumber >= numberOfEmployees) {
            // create a new employee with inquirer
            // add one to employeeNumber
            makeSingleEmployee()

        }
        // continue doing stuff
    }
}
function generalQuestions() {
    //array of questions for inquirer 
    //.thenk(function(response))
    // switch statements 

    inquirer.prompt([

        {
            type: "list",
            message: "What title does the team member have?",
            choices: ["Manager", "Enginer", "Intern"],
            name: "answer"
        }
        .then(function (response) {
            createEmployees(response.answer)
        })


    // if they say enginer => engineeerQuestion 
    // if they say intern => internQuestion
    // If they say manager => managerQuestion



const newIntern = new Intern(input.name, input.id, input.email, response.school)
// console.log(newIntern)
// {
// name: input.name,
// id: input.id,
// email: input.email
// school: resposnse.school
// }

const newManager = new newManager(input.name, input.id, input.email, response.officeNumber)
// console.log(newManager)
// {
// name: input.name,
// id: input.id
// email: input.email
// office: input.officeNmber    
// }

function internQuestion(input) {
    // inquirer stuff
    // .then(function(response) {
    //    console.log(response) - engineer question and answer
    //    console.log(input) - intern question and answer
    //    create a new Intern with the responses
    // })
}
// [ q4. question specific to job]

