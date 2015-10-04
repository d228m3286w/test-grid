var banana;
var orange;
var apple;
var grid;

function displayBanana() {
	document.write('<em>' + banana  + '</em>');
}; 
	
function displayOrange() {
	document.write("<strong>" + orange + "</strong>");
};
	
function displayApple() {
	document.write("<em>" + apple + "</em>");
};

function setUp() {
	banana = new Banana();
	grid = new Grid(9, 9);
	orange = new Orange();
	apple = new Apple();

};




