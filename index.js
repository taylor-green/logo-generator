const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What shape do you want the logo to be',
        name: 'title',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Input required to continue';
            }
        }
    },
    {

    }
])