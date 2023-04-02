const { Circle, Square, Triangle } = require("./shapes")

// circle
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle ();
        let color = ('teal')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${this.color}'/>`)
    });
});

// square
describe('Sqaure', () => {
    test('renders correctly', () => {
        
    })
})