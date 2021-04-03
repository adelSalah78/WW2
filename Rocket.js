var Rocket = function(color,left,top,gun,plane) {
	this.color = color;
	this.left = left;
	this.top = top;
	
	const maxTop = 700;
	const maxHalfLeft = 500;
	
	const maxLeft = 1250;
	const speed=2;
	
	this.gun = gun;
	
	this.destination = 0;
	
	this.count = 0;
	
	this.launched = false;
	
	this.destinationArrived = false;
	
	this.maxTopWhileLaunching = 0;
	
	this.degreeWhileLaunching = 0;
	
	this.newSlope = 0;
	
	this.plane = plane;
	
	this.planeCaught = false;
	
	this.planeScore = 0;
	
	this.gunScore = localStorage.getItem("gunScore");
	
	this.intervals=[];
	
	
	this.changePosition = function(left,top){
		this.left = left;
		this.top = top;
	}
	
	this.youHitTheBastard= function() {
		var rocketWidth = this.left + 10;
		return this.top<=45 && this.top>=38 && rocketWidth>= plane.left && rocketWidth <= plane.left+200;
	}
	
	this.launch = function() {
		if(!this.launched || this.planeCaught)
			return;
		document.getElementById("rocket").style.left = this.left + 'px';
		document.getElementById("rocket").style.top = this.top + 'px';
		
		if(this.youHitTheBastard()) {
			document.getElementById('encourageMsg').innerHTML = 'You hit the bastard!, refresh to continue';
			localStorage.setItem("gunScore",++this.gunScore);
			this.planeCaught = true;
			//document.location.href = document.location.href;
			
			this.intervals.forEach((interval) => {
				clearInterval(interval);
			});
			return;
		}
		
		
		document.getElementById("rocket").style.backgroundColor = this.color;
		
		if(this.left<=0 || this.left>=maxLeft || this.top <=0) {
			this.launched = false;
			document.getElementById("rocket").style.backgroundColor = "white";
			this.count = 0;
			this.destination = 0;
			this.maxTopWhileLaunching = 0;
			this.degreeWhileLaunching = 0;
			this.newSlope = 0;
		}
		
		this.calculateNewPosition(this.degreeWhileLaunching);
		
	}
	
	this.calculateNewPosition = function(gunDegree) {
		//this.newSlope = (this.destination-this.top)/((maxHalfLeft *2) - this.left);
		
		this.count+=speed;
		
		console.log(gunDegree)
		
		if((gunDegree >90 && gunDegree <98) || (gunDegree >82 && gunDegree <90)) {
			this.top-=speed;
		}
		
		else if(gunDegree > 90) {
			//this.left+=this.newSlope;
			this.left+=1;
			var tempTop = this.newSlope*this.count;
			this.top = this.maxTopWhileLaunching - tempTop;
		}
		else if(gunDegree < 90) {
			//this.left-=this.newSlope;
			this.left-=1;
			var tempTop = this.newSlope*this.count;
			this.top = this.maxTopWhileLaunching - tempTop;
		}
		else {
			this.top-=speed;
		}
	}
}