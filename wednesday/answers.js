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
// 	console.log(catMessageArray[Math.round(Math.random()*catMessageArray.length-1)]);
// 	} else{
// 		console.log(i);
// 	}
// };
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
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";
karolin[1] = 17;
matt[2] = "Gotham City";
kristyn[2] = "Philadelphia";

