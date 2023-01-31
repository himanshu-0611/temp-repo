const path = require("path");

// console.log(path.sep)

console.log(path.join);
// join sequence of path statements, using platform separator, returns normalized resulting path

const filePath = path.join("/content//", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath); //base file
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
