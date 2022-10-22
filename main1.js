
$(document).ready(function(){	

	var menu;
	var currentMenu = ".upgradeTab";
	var totalTime = 0;
	var timePerSecond = 0;
	var timeUpgradeCost = 0;
	var isTime = false;

	$("#formulaButton").click(function(){
		menu = switchMenu("formulaTab");
	
	});
	
	$("#upgradeButton").click(function(){
		menu = switchMenu("upgradeTab");
	
	});
	
	function switchMenu(menu){
		$(currentMenu).css("display", "none");
		$("." + menu).css("display", "block");
		currentMenu = "." + menu;
		return menu;
	}
	
	$("#upgradeTime").click(function(){
		
		
		if(timePerSecond == 0){
			timeUpgradeCost = 10;
			timePerSecond = 1;
			document.getElementById("timeUpgradeCost").innerHTML = timeUpgradeCost;
		}
		else if(totalTime >= timeUpgradeCost){
			
			timePerSecond += 1;
			totalTime -= timeUpgradeCost;
			timeUpgradeCost = Math.floor(timeUpgradeCost*1.2);
			document.getElementById("timeUpgradeCost").innerHTML = Math.round(timeUpgradeCost);
			document.getElementById("totalTime").innerHTML = Math.round(totalTime);
			
		}
		
	
	});
	
	setInterval(function(){
		totalTime += timePerSecond;
		document.getElementById("totalTime").innerHTML = Math.round(totalTime);
		if(totalTime>=50){
		isTime= true;
	    }
		if(isTime){
		
			$(".unlockVelocity").css("display", "block");
		
	    }
	}, 1000);
	
	
});	
	
