

function Banana() {
	this.name = "fanana";
	this.size = "large";
	this.toString = function() {
		return this.name;
		return this.size;

	}
};
function Orange() {
	this.name = "frange";
	this.size = "ballz";
	this.toString = function() {
		return this.name;
		return this.size;

	}
};
function Apple() {
	this.name = "fpple";
	this.size = "large";
	this.toString = function() {
		return this.name;
		return this.size;

	}
}; 



function Grid(row,col) {
	this.row = row;
	this.col = col;
	this.makeGrid = function() {
		for (var rw = 0; rw < this.row; rw++) {
			document.write('<div class="row">');


			for (var cl = 0; cl < this.col; cl++) {
				document.write('<div class="col-xs-1">' + rw + cl + '</div>');
			}

						document.write('</div>');
		}
	}
}
