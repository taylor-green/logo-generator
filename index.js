    
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

async function init() {
    let svgText = '';
    let svgFile = 'logo.svg';

    // prompts for command line for user to input to create logo
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters',
            name: 'text'
        },
        {
            type: 'input',
            message: 'What color would you like the font to be?',
            name: 'textColor'
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be?',
            name: 'shapeColor' 
        },
        {
            type: 'list',
            message: 'What shape would you like to use?',
            name: 'shapeType',
            choices: ['Circle', 'Square', 'Triangle'],
        }
    ]);

    let userText = answers.text;
    if (userText.length > 3) {
        console.log('Only 3 characters permitted');
        return;
    }
    console.log('User text: [' + userText + ']');

    let userFontColor = answers.textColor;
    console.log('User font color: [' + userFontColor + ']');

    let userShapeColor = answers.shapeColor;
    console.log('User shape color: [' + userShapeColor + ']');

    let userShapeType = answers.shapeType;
    console.log('User entered shape = [' + userShapeType + ']');

    let userShape;
    if (userShapeType === 'Square' || userShapeType === 'square') { 
        userShape = new Square();
        console.log('User selected Square');
    } else if (userShapeType === 'Circle' || userShapeType === 'circle') { 
        userShape = new Circle();
        console.log('User selected Circle');
    } else if (userShapeType === 'Triangle' || userShapeType === 'triangle') { 
        userShape = new Triangle();
        console.log("User selected Triangle shape");
    } else {
        console.log("Invalid shape!");
        return;
    }
    userShape.setColor(answers.shapeColor);

    let svg = new Svg();
    svg.setTextElement(userText, userFontColor);
    svg.setShapeElement(userShape);
    let svgString = svg.render();

    console.log("Displaying shape:\n\n" + svgString);

    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    fs.writeFile(svgFile, svgString, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Shape written to file [' + svgFile + ']');
    });
}

init();
