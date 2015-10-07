

// function Banana() {
// 	this.name = "fanana";
// 	this.size = "large";
// 	this.toString = function() {
// 		return this.name;
// 		return this.size;

// 	}
// };
// function Orange() {
// 	this.name = "frange";
// 	this.size = "ballz";
// 	this.toString = function() {
// 		return this.name;
// 		return this.size;

// 	}
// };
// function Apple() {
// 	this.name = "fpple";
// 	this.size = "large";
// 	this.yum = "so good!!";
// 	this.toString = function() {
// 		return this.name;
// 		return this.size;

// 	}
// }; 




function Grid(row,col) {
	this.row = row;
	this.col = col;
	this.makeGrid = function() {
		for (var rw = 0; rw < this.row; rw++) {
			document.write('<div class="row" >');


			for (var cl = 0; cl < this.col; cl++) {
				document.write('<div class="col-xs-1">' + rw + cl + '</div>');
			}

						document.write('</div>');
		}
	}
}

// function Adventure(xCoord, yCoord, endX, endY, bound) {
// 	this.xCoord = xCoord;
// 	this.yCoord = yCoord;
// 	this.endX = endX;
// 	this.endY = endY;
// 	this.bound = bound;




// };
// var newAdventure = new Adventure(0, 0, 8, 8, 8);

// newAdventure.mov = function(xDel, yDel, x, y, bound) {
// 	console.log(newAdventure);
// 	if(this.xCoord === (this.endX + xDel) && this.yCoord === (this.endY + yDel)) { 
//         this.xCoord += x;
//         this.yCoord += y;
//         hideAbe(xDel, yDel);	
//         killAbe();
//         dead.play();
//         alert("Whuuthaa!!??");
// 	}
// 	else if (this.yCoord === bound && yDel != 0) {
//         holdon.play();
//         alert("D'oh!!!");
//     }
//     else if (this.xCoord === bound && xDel != 0) {
//         coon.play();
//         alert("D'oh!!!");
//     }
//         else {
//         this.xCoord += x;
//         this.yCoord += y;
// 		hideAbe(xDel, yDel);
// 		movAbe();
// 	};
// }

// newAdventure.movDown = function() {
// 	this.mov(0, -1, 0, 1, 8);
// }; 
// newAdventure.movUp = function() {
// 	this.mov(0, 1, 0, -1, 0);
// }; 
// newAdventure.movLeft = function() {
// 	this.mov(1, 0, -1, 0, 0);
// }; 
// newAdventure.movRight = function() {
// 	this.mov(-1, 0, 1, 0, 8);
// };

// newAdventure.reset = function() {

//     hideAbe(0,0);
//     this.xCoord = 0;
//     this.yCoord = 0;
//     movAbe();
//     target();
//     console.log('hello');
// };

// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 37:
//             newAdventure.movLeft();
//             break;
//         case 38:
//             newAdventure.movUp();
//             break;
//         case 39:
//             newAdventure.movRight();
//             break;
//         case 40:
//             newAdventure.movDown();
// 			break;
// 		case 32:
// 			newAdventure.reset();

//     }
// };
