const MyFunction = function (name) {
    console.log("Function expression")
}

function DeclaredFunction() {
    console.log("Function declared");
}

const MyArrowFunction = () => {
    console.log("Arrow function");
}

MyFunction()

DeclaredFunction()

MyArrowFunction()