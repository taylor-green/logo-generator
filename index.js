const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

class Svg{
    constructor(){
        this.textelement = ''
        this.shapeElement = ''
    }
    render(){
        return `svg version='1.1' xmlns`
    }
}

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter up to 3 characters',
        name: 'text'
     
    },
    {
        type: 'input',
        message: 'What color would you like the font to be?',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'text'
     
    },
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'pixel-image',
        choices: ['Circle', 'Square', 'Triangle'],
     
    },
])