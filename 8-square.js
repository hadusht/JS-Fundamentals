const args1 = process.argv.slice(2);
const size = parseInt(args1[0], 10);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
