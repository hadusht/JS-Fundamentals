const add = (a, b) => {
  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);
  
  if (isNaN(num1) || isNaN(num2)) {
    console.log('Arguments must be integers');
  } else {
    console.log(num1 + num2);
  }
};

// Get command line arguments (skip node and script path)
const [,, arg1, arg2] = process.argv;

// Call the function with the provided arguments
add(arg1, arg2);
