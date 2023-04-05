// const inquirer = require('inquirer');
// const fs = require('fs');
// const { Circle, Square, Triangle } = require('./lib/shapes');
// const { inherits } = require('util');

// class Svg {
//     constructor() {
//         this.textElement = ''; // corrected variable name
//         this.shapeElement = ''; // corrected variable name
//     }
//     render() {
//         return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
//     }
//     setTextElement(text, color) { // corrected variable name
//         this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
//     }
//     setShapeElement(shape) { // corrected variable name
//         this.shapeElement = shape.render();
//     }
// }

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'Enter up to 3 characters',
//             name: 'text'
//         },
//         {
//             type: 'input',
//             message: 'What color would you like the font to be?',
//             name: 'textColor'
//         },
//         {
//             type: 'input',
//             message: 'What color would you like the shape to be?',
//             name: 'shapeColor'
//         },
//         {
//             type: 'list',
//             message: 'What shape would you like to use?',
//             name: 'shapeType',
//             choices: ['Circle', 'Square', 'Triangle'],
//         },
//     ])
//     .then(answers => { // changed to .then to handle async/await
//         let svgText = '';
//         let svgFile = 'logo.svg';

//         let userText = '';
//         if (answers.text.length > 0 && answers.text.length < 4) {
//             userText = answers.text;
//         } else {
//             console.log('Only 3 characters permitted');
//             return;
//         }
//         console.log('User text: [' + userText + ']');

//         // user font color
//         let userFontColor = answers.textColor;
//         console.log('User font color: [' + userFontColor + ']');

//         // user shape color
//         let userShapeColor = answers.shapeColor;
//         console.log('User shape color: [' + userShapeColor + ']');

//         // user shape type
//         let userShapeType = answers.shapeType;
//         console.log('User entered shape = [' + userShapeType + ']');

//         // user shape selector
//         let userShape;
//         if (userShapeType === 'Square' || userShapeType === 'square') {
//             userShape = new Square();
//             console.log('User selected Square');
//         } else if (userShapeType === 'Circle' || userShapeType === 'circle') {
//             userShape = new Circle();
//             console.log('User selected Circle');
//         } else if (userShapeType === 'Triangle' || userShapeType === 'triangle') {
//             userShape = new Triangle();
//             console.log("User selected Triangle shape");
//         } else {
//             console.log("Invalid shape!");
//             return; // return early if invalid shape
//         }
//         userShape.setColor(userShapeColor); 

//         // Create a new Svg instance and add the shape and text elements to it
//         let svg = new Svg();
//         svg.setTextElement(userText, userFontColor); 
//         svg.setShapeElement(userShape);
//         svgString = svg.render();

//         // Print shape to console
//         console.log("Displaying shape:\n\n" + svgString);

//         console.log("Shape generation complete!");
//         console.log("Writing shape to file...");
//         	writeToFile(svgFile, svgString); 

//     })
    

    
    
    
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

    var svg = new Svg();
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
