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

// write the data to the file
function writeToFile(fileName, data) {
    console.log('Writing [' + data +'] to file [' + fileName + ']')
   fs.writeFile(fileName, data, function (err){
    if (err) {
        return console.log(err);
    }  
  });
   
}

async function init () {
    console.log('Initilizing');
     let svgText = ''
     let svgFile = 'logo.svg';

     const answers = await inquirer.prompt(questions);


        let userText = ''
            if(answers.text.length > 0 && answers.text.length < 4){
                userText = answers.text;
            }else{
                console.log('Only 3 characters permitted');
                return;
            }  
                    console.log('User text: [' + user_text + ']');
	                //user font color
	                user_font_color = answers['text-color'];
	                console.log('User font color: [' + user_font_color + ']');
	                //user shape color
	                user_shape_color = answers.shape;
	                console.log('User shape color: [' + user_shape_color + ']');
	                //user shape type
	                user_shape_type = answers['pixel-image'];
	                console.log('User entered shape = [' + user_shape_type + ']');

        // user shape selector
        let userShape;
        if(user_shape_type === 'Square' || user_shape_type === 'sqaure'){
            userShape = new Square ();
            console.log('User selected Square');
        }
        else if (user_shape_type === "Circle" || user_shape_type === "circle") {
            user_shape = new Circle();
            console.log('User selected Circle');
        }
        else if (user_shape_type === 'Triangle' || user_shape_type === 'triangle') {
            user_shape = new Triangle();
            console.log('User selected Triangle');
        }
        else {
            console.log('Invalid shape!');
        }
        user_shape.setColor(user_shape_color);  
        }
	
            }

