function runFunction(argumentFunction) {
    argumentFunction("jito")
    argumentFunction("robert")
}
function printWord() {
    console.log("test")
}

const printName = (name) => console.log(name);


// runFunction(printWord);

runFunction(printName);