var Plane = function(color,direction,left,top) {
	this.color = color;
	this.direction = direction;
	this.left = left;
	this.top = top;
	this.src = "img/plane.png";
	
	this.planeSpeed = 8;
	
	const leftMax = 1060;
	
	this.changeDirection = function(direction) {
		this.direction = direction;
		if(this.direction === 'right') {
			this.src = "img/plane.png";
		}
		else {
			this.src = "img/plane-left.png";
		}
		this.move();
	}
	
	this.changePosition = function(left,top) {
		if(this.left > leftMax ) { // out of right screen boundaries
			this.left = leftMax;
			return;
		}
		else if(this.left < 0) { // out of left screen boundaries
			this.left = 0;
			return;
		}
		this.left = left;
		this.top = top;
		this.move();
	}
	
	this.move = function() {
		document.getElementById('plane').style.top = this.top +'px';
		document.getElementById('plane').style.left = this.left + 'px';
		document.getElementById('plane').src = this.src;
	}
	
	
	this.planeMover = function() {
		if(currentPlaneKeyCode != 39 && currentPlaneKeyCode!=37){
			return;
		}
		
		if(currentPlaneKeyCode == 39) { // move the plane right
			plane.changeDirection("right");
			plane.changePosition(plane.left+plane.planeSpeed,plane.top);
		}
		else if(currentPlaneKeyCode == 37) { // move the plane left
			plane.changeDirection("left");
			plane.changePosition(plane.left-plane.planeSpeed,plane.top);
		}
		plane.move();
	}
}