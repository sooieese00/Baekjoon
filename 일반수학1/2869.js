const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim();
const [day, night, goal] = input.split(" ").map(Number);

const result = Math.ceil((goal-day)/(day-night))
console.log(result+1)