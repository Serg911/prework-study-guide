var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

/* a for loop replaces all this code:
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/

/* as reference for creatign a for loop:
var shapes = ["triangle", "square", "pentagon", "circle", "octagon", "rectangle"];
for(var x = 0; x < shapes.length; x++) {
 console.log(shapes[x]);
}
*/

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
