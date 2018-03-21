// Section 1
// What is the difference between interpolation and concatenation? Give an example of each.

// concatenation is specific to strings only, whereas interpolation is accessible to booleans and numbers. interpolation inserts strings with the ${}. 

//What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?

// -- Don't Repeat Yourself -- having to repeat yourself opens up room for error, and creates for more confusing code when working with others. By creating functions (and later methods) we should avoid repeating ourselves.

//Section 2

//Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.

 const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

a < b;
c > d;
'Name' == 'Name';
a + b === c;
a*a === d;
e == 'Kevin';
48 == '48';

//section 3

// is this an infinite loop? Why or why not? ::

// while (true) {
// 	console.log('Do not run this loop');
//}

//this is an infinite loop, as the argument, true, will never not be true.

// is this loop an infinite loop? Why or why not?
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}

// not infinite -- changes boolean within the function

// Without running this loop, what is the expected output?
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

// I expect that there will be an "A" added to the "numbers" string.

// the result was that it continued to add the letter "A" until i = 20

//Section 4

//key differences are that the FOR loop runs through is used when a set amount of loops will be needed (or can create an expression to find that amount)
//a while loop is generally used when it is unsure how many times the loop will need to take place.  

//Write a for loop that will console.log the numbers 0 to 999.

for (let i = 0; i < 1000; i ++) {
	console.log(i);
}

// What are the three components of the control panel? Each component is separated by a semicolon ;.
// Write your answers as comments in the file.

/ The first part of the control panel is: intialization
/ The second part of the control panel is: condition
/ The third part of the control panel is: increment or decrement

// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for (let i = 999; i >= 0; i--){
	console.log(i);
}

// Write a for loop that uses interpolation to send a message to the console as well as the current value of i.
// The loop should run from 1 to 10.

for(let i=1; i<=10; i++){
    console.log(`The value of i is: ${i} out of 10`);
  };

// Iterate over the StarWars array and print each element to the console.

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

function starWarsPrint() {
for(let i=0; i < StarWars.length; i++){
	console.log(StarWars[i]);
};
};

starWarsPrint();

// Iterate over the StarWars array again and print each character's name as well as the value of i.

function starWarsPrint() {
for(let i=0; i < StarWars.length; i++){
	console.log(StarWars[i], i);
};
};
starWarsPrint();


//Section 5
//Part I: Set the Scene

// Open the Terminal app
// cmd spacebar - type in term

// Create a new directory on your desktop called "galaxy_far_far_away" and enter it.
//cd Desktop - 
//mkdir galaxy_far_far_away
//cd galaxy_far_far_away

// Create a directory called "death_star", and make the following files inside of it: "darth_vader.txt", "princess_leia.txt", "storm_trooper.txt"
//mkdir death_star
//touch death_star/darth_vader.txt
//touch death_star/princess_leia.txt
//touch death_star/storm_trooper.txt

// In "galaxy_far_far_away", make a directory named "tatooine" and create the following files in it: "luke.txt", "ben_kenobi.txt"
//mkdir tatooine
//touch tatooine/luke.txt
//touch tatooine/ben_kenobi.txt

// Inside of "tatooine" make a directory called "millenium_falcon", and in it create: "han_solo.txt", "chewbaca.txt"
//cd tatooine
//mkdir millenium_falcon
//touch millenium_falcon/han_solo.txt
//touch millenium_falcon/chewbaca.txt

//Part II: mv - rename

// Rename "ben_kenobi.txt" to "obi_wan.txt".
//mv ben_kenobi.txt obi_wan.txt

// Part III(listed as II): cp - copy

//Copy "storm_trooper.txt" from "death_star" to "tatooine".
//cd ..
//cd death_star
//cp storm_trooper.txt ../tatooine/

// Part IV: mv - move

//Move "luke.txt" and "obi_wan.txt" to the "millenium_falcon".
//cd ..
//cd tatooine/
//mv luke.txt millenium_falcon/
//mv obi_wan.txt millenium_falcon/

// Move "millenium_falcon" out of "tatooine" and into "galaxy_far_far_away".
//mv millenium_falcon/ ..

// Move "millenium_falcon" into "death_star".
//cd ..
//mv millenium_falcon/ death_star/

// Move "princess_leia.txt" into the "millenium_falcon".
//cd death_star
//mv princess_leia.txt millenium_falcon/

// Part V: rm - remove

// Delete "obi_wan.txt".
//cd millenium_falcon
//rm obi_wan.txt

// Part VI: all together

// In "galaxy_far_far_away", make a directory called "yavin_4".
//cd ..
//cd ..
//mkdir yavin_4

// Move the "millenium_falcon" out of the "death_star" and into "yavin_4".
//cd death_star/
//mv millenium_falcon/ ../yavin_4

// Make a directory in "yavin_4" called "x_wing".
//cd ..
//mkdir yavin_4/x_wing

// Move "princess_leia.txt" to "yavin_4" and "luke.txt" to "x_wing".
//cd yavin_4
//mv millenium_falcon/princess_leia.txt ..
//cd ..
//mv princess_leia.txt yavin_4/
//mv millenium_falcon/luke.txt x_wing/

// Move the "millenium_falcon" and "x_wing" out of "yavin_4" and into "galaxy_far_far_away".
//mv millenium_falcon/ ..
//mv x_wing/ ..

// In "death_star", create directories for "tie_fighter_1", "tie_fighter_2" and "tie_fighter_3".
//mkdir death_star/tie_fighter_1
//mkdir death_star/tie_fighter_2
//mkdir death_star/tie_fighter_3

// Move "darth_vader.txt" into "tie_fighter_1".
//mv death_star/darth_vader.txt death_star/tie_fighter_1/

// Make a copy of "storm_trooper.txt" in both "tie_fighter_2" and "tie_fighter_3".
//cp death_star/storm_trooper.txt death_star/tie_fighter_2
//cp death_star/storm_trooper.txt death_star/tie_fighter_3


// Move all of the "tie_fighters" out of the "death_star" and into "galaxy_far_far_away".
//cd death_star/
//mv tie_fighter_1/ ..
//mv tie_fighter_2/ ..
//mv tie_fighter_3/ ..

// Part VII: rm -r - remove directories

//Remove "tie_fighters" 2 and 3.
//cd ..
//rm -rf tie_fighter_2/
//rm -rf tie_fighter_3/

// Part VIII:
// Touch a file in "x_wing" called "the_force.txt".
//touch tie_fighter_1/the_force.txt

// Destroy the "death_star" and anyone inside of it.
//rm -rf death_star 

// Return "x_wing" and the "millenium_falcon" to "yavin_4".
//mv x_wing yavin_4     
//mv millenium_falcon/ yavin_4 

// Celebrate.
yay?

//Section 6

// What was your biggest takeaway from this article?
//Learning happens through mistakes. Also, hearing lecture / reading material doesn't tend to absorb most of the content, as the brain gets
//stuck on the first concept that is unfamiliar, and starts making interpretations of all that follows unless the understanding is solidified
//through making mistakes/troubleshooting.

// Name two things that you just learned about Slack that you didn't know before.
//the remind me feature and the snippet, when selecting the format (language) highlights syntax!

// Name one thing that you just learned about that you think would be useful for you to use in the Slack classroom. Why do you think it will be useful?
//using the code snippet to highlight syntax. I've used Slack quite a bit before, so I was familiar with the ``` code blocks...but the snippet tool wasn't used much when I was in HR


