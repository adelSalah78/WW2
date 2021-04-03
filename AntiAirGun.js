var AntiAirGun = function(){
	this.startDegree = 100;
	this.gunRotateDegree = 4;
	this.degree = this.startDegree;
	
	this.calculatedDegree = 0;
	
	this.changeDegree = function(degree) {
		if(degree > 180 || degree< 0)
			return;
		this.degree = degree;
	}
	
	this.changeDirection = function(direction) {
		this.direction = direction;
	}
	
	this.rotate = function() {
		document.getElementById("gun").style.transform = "rotate("+(this.degree-this.startDegree)+"deg)"; 
		this.calculatedDegree = this.degree-this.startDegree;
	}
	
	this.gunRotator = function() {
		if(currentGunKeyCode != 65 && currentGunKeyCode!=68)
			return;
		if(currentGunKeyCode == 65) { // rotate the gun left
			gun.changeDirection("left");
			gun.changeDegree(gun.degree - gun.gunRotateDegree);
		}
		else if(currentGunKeyCode == 68) { // rotate the gun right
			gun.changeDirection("right");
			gun.changeDegree(gun.degree + gun.gunRotateDegree);
		}
		gun.rotate();
	}
}