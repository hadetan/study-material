// function sum(a = 1, b = 2) {
//     // SyntaxError: "use strict" not allowed in function with default parameter
//     "use strict";
//     return a + b;
//   }

//using "use strict" directly in function with non-simple parameter is not allowed. exapmle shown above.

function myStrictFunction() {
    // Function-level strict mode syntax
    "use strict";
    function nested() {
      return "And so am I!";
    }
    return `Hi! I'm a strict mode function! ${nested()}`;
  }
  function myNotStrictFunction() {
    return "I'm not strict.";
  }
  
console.log(myStrictFunction());
console.log(myNotStrictFunction());

const userData = {
  name: "Aquib",
  age: 22,
  isAlive: true,
  address: {
    country: "India",
    state: "Delhi",
    previousAddress: {
      country: "India",
      state: "Bombay"
    }
  },
  greet: function() {
    console.log(`hello ${this.name} from ${this.address.state} who used to live in ${this.address.previousAddress.state}`);
  }
};

userData.greet();