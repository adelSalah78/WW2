var Rocket = new function(color,left,top) {
	this.color = color;
	this.left = left;
	this.top = top;
	
	this.changePosition = function(left,top){
		this.left = left;
		this.top = top;
	}
}