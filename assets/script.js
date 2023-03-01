var topics = ['HTML', 'CSS', 'Git', 'JavaScript']; //defines the array topics
var randomTopic = topics[Math.floor(Math.random() * topics.length)]; //randomizes topics

//loops through the array of topics
function listTopics(){
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

//logs the topic, randomly giventhe randomTopic variable
function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
}

/* as reference for creatign a for loop:
var shapes = ["triangle", "square", "pentagon", "circle", "octagon", "rectangle"];
for(var x = 0; x < shapes.length; x++) {
 console.log(shapes[x]);
}
*/

//calls the two functions
listTopics()
selectTopic()

//adds a console message afterward
console.log('Here are the topics we learned through Prework:');
listTopics();

//prompts about the random topic
console.log('Which topic should we study first?');
selectTopic();