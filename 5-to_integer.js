const arg = process.argv[2];

// Convert to integer
const num = parseInt(arg, 10);

// Check if the conversion was successful
if (arg !== undefined && !isNaN(num) && String(num) === arg.trim()) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
