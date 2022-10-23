
$(document).ready(function(){	

	var isUnlocked = false;
	
	var totalTime = 0;
	var timePerSecond = 0;
	var timeUpgradeCost = 0;
	
	var velocityUpgradeCost = 30;
	var velocityPerSecond = 0;
	var totalVelocity = 0;

	
	$("#upgradeTime").click(function(){
		if(timePerSecond == 0){
			timeUpgradeCost = 10;
			timePerSecond = 1;
			document.getElementById("timeUpgradeCost").innerHTML = timeUpgradeCost;
			document.getElementById("textTimePerSecond").innerHTML = timePerSecond;
		}
		else if(totalTime >= timeUpgradeCost){
			
			timePerSecond += 1;
			totalTime -= timeUpgradeCost;
			timeUpgradeCost = Math.floor(timeUpgradeCost*1.2);
			document.getElementById("timeUpgradeCost").innerHTML = Math.round(timeUpgradeCost);
			document.getElementById("totalTime").innerHTML = Math.round(totalTime);
			document.getElementById("textTimePerSecond").innerHTML = timePerSecond;
			
		}
	});
	
	$("#unlockVelocity").click(function(){
		
		if(totalTime>=100){
			totalTime -= 100;
			isUnlocked = true;
			document.getElementById("totalTime").innerHTML = Math.round(totalTime);
			$(".unlockVelocity").css("display", "none");
			$(".upgradeVelocity").css("display", "block");
			$(".totalVelocity").css("display", "block");
			
		}
	});
	$("#upgradeVelocity").click(function(){
		
		if(totalTime >= velocityUpgradeCost){
			
			totalTime -= velocityUpgradeCost;
			velocityUpgradeCost = Math.round(velocityUpgradeCost * 1.2);
			velocityPerSecond += 1;
			document.getElementById("totalTime").innerHTML = Math.round(totalTime);
			document.getElementById("velocityUpgradeCost").innerHTML = Math.round(velocityUpgradeCost);
			document.getElementById("totalVelocity").innerHTML = Math.round(totalVelocity);
			document.getElementById("textVelocityPerSecond").innerHTML = velocityPerSecond;
			
			
		}
	});
	
	$("#unlockDistance").click(function(){
		
		if(totalTime>=200 && totalVelocity>=100){
			
			totalTime -= 200;
			totalVelocity -= 100;
			
			document.getElementById("totalTime").innerHTML = Math.round(totalTime);
			document.getElementById("totalVelocity").innerHTML = Math.round(totalTime);
			$(".totalDistance").css("display", "block");
			$(".upgradeDistance").css("display", "block");
			$(".unlockDistance").css("backgroundColor", "green");
			$("#unlockText").html("Distance unlocked!");
			
			
		}
	});
	
	$("#addTime").click(function(){
		totalTime+=50;
		document.getElementById("totalTime").innerHTML = Math.round(totalTime);
	});

	$("#TimeAch1").hover(function(){

		$(".achText").css("display", "block");
	}, function(){
		$(".achText").css("display", "none");
	});

	
	
	
	setInterval(function(){
		totalTime += timePerSecond;
		document.getElementById("totalTime").innerHTML = Math.round(totalTime);
		totalVelocity += velocityPerSecond;
		document.getElementById("totalVelocity").innerHTML = Math.round(totalVelocity);
		
		if(totalTime>=50){
			
			if(isUnlocked){
				$(".unlockVelocity").css("display", "none");
			}
			else{
			$(".unlockVelocity").css("display", "block");
			}
	    }

		if(totalTime>=1000){
			document.getElementById("TimeAch1").src="achDone.png";
		}

	}, 1000);
});	
	
