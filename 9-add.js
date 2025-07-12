const add = (a, b) => {
  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);
  
  if (isNaN(num1) || isNaN(num2)) {
    console.log('NaN');
  } else {
    console.log(num1 + num2);
  }
};


const arg1 = process.argv[2];
const arg2 = process.argv[3];


add(arg1, arg2);
