import inquirer from "inquirer"
import InputPrompt from "inquirer/lib/prompts/input.js";
let todos= [];
let condition = true;

while(condition)
    {

    
    
let addTask = await inquirer.prompt(
    [
        {
            name: 'todo',
            type: 'Input',
            message: "what you want to add in your Todos? "
        },
        
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more?",
            default: "false"
        }
    ]
);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos)
    }