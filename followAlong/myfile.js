function myFunction(value) {
    const printValue = () => {
        console.log(value);
    }


const printValuePlusSomething = (something) => {
    console.log(value + something);

}

return [printValue, printValuePlusSomething];

}

const [var1, var2] = myFunction('my value');

var1()
var2('another value')