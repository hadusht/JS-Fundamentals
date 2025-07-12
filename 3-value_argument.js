function printFirstArg() {
  
  const args = arguments;
  
  const firstArg = args[0] !== undefined ? args[0] : "No argument";
  
  console.log(firstArg);
}

printFirstArg("Hello");
printFirstArg();
