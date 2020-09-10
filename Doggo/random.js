// const someModules = require("./some-module");
// const users = require("users");
const users = [ 
    {
        firstNames: 'jon'
    }
]

// ES6
// import users from "users";
// Don't need to have .js or put ./ to find the directory

const firstNames = () => {
    return users.map(person => person.firstNames)
}

module.exports = {
    firstNames,
    // someModules
}

// IIFE
// Anonymous Function / Modules
// ()() can also be functions

// (function () {

var name = "ja";

function getName() {
    return name;
}

getName('David Tennant')

console.log(name)

// })();

