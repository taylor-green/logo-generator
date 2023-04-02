const fs = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

class Svg{
    constructor(){
        this.textelement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}   


const prompts = [
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
];