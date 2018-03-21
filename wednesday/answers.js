// 1. 
// for (var i=0; i<21; i++){
// 	console.log(i);
// }

// 2.
// 
// for(var i=0; i<21; i+=2){
// 	console.log(i);
// }

// 3. 
// for(var i=0; i < 21; i++){
// 	console.log("Love me, pet me! HSSSS!");
// }

// for(var i=0; i < 21; i++){
// 	if(i%2 === 0){
// 	var catMessageNumber = Math.floor(Math.random()*3) 
// 	switch(){
// 		case 0:
// 			console.log("human...why you taking picutres of me?...")
// 		break;
// 		case 1:
// 			console.log("...the catnip made me do it..")
// 		break;
// 		case 2:
// 			console.log("...why does the red dot always get away..")
// 		break;
// 		default:
// 	}	
// 	} else {console.log(i);
// 	}
// }

// ===== trying Alternative method from classmate======
// var catMessageArray = ["human, why you taking pictures", "the catnip made me", "why does the red dot get me"];
// for(var i=0; i < 21; i++){
// 	if(i%2 === 0){
// 	console.log(catMessageArray[Math.round(Math.random()*(catMessageArray.length-1))]);
// 	} else{
// 		console.log(i);
// 	}
// }
// =============================================

// 4. 
// for(var i=1; i <101; i++){
// 	console.log(i);
// }

// for(var i=1; i <101; i++){
// 	if(i%3 === 0){
// 		console.log("Fizz")
// 	}else{
// 		console.log(i);
// 	}
// }

// for(var i=1; i <101; i++){
// 	if(i%5 === 0){
// 		console.log("Buzz")
// 	}else{
// 		console.log(i);
// 	}
// }

// for(var i=1; i <101; i++){
// 	if(i%3 === 0 && i%5 === 0){
// 		console.log("FizzBuzz")
// 	}else{
// 		console.log(i);
// 	}
// }

//5
// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

// thom[0] = "Gameboy";
// karolin[1] = 17;
// matt[2] = "Gotham City";
// kristyn[2] = "Philadelphia";

// 6.
// var turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (var i=0; i<turtles.length; i++){
// 	console.log(turtles[i].toUpperCase());
// }

// 7.
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];



// var kristynsShoe = kristynsCloset.shift();
// thomsCloset[2].unshift(kristynsShoe);

// var thomsShirtsLength = thomsCloset[0].length;
// var thomsShirt = Math.floor(Math.random(thomsShirtsLength));
// var thomsPantsLength = thomsCloset[1].length;
// var thomsPants = Math.floor(Math.random(thomsPantsLength));
// var thomsAccessoriesLength = thomsCloset[2].length;
// var thomsAccessory= Math.floor(Math.random(thomsAccessoriesLength)); 


// for (var i=0; i<kristynsCloset.length; i++){
// 	var kristynOutfit = kristynsCloset[Math.floor(Math.random())] 
// };

// 8. 


