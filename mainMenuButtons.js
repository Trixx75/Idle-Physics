   
$(document).ready(function(){	

	var menu;
	var currentMenu = ".upgradeTab";

   $("#formulaButton").click(function(){
		menu = switchMenu("formulaTab");
	
	});

	$("#upgradeButton").click(function(){
		menu = switchMenu("upgradeTab");
	
	});

	
	$("#achievementsButton").click(function(){
		
		menu = switchMenu("achievementsTab");
		$(".text").css("display", "block");
		$(".allAchievements").css("display", "flex");
		$(".ach1").css("display", "block");
		
	
	});

	$("#changelog").click(function(){
		window.open("changelog.html")
	});


	
	function switchMenu(menu){
		$(currentMenu).css("display", "none");
		$("." + menu).css("display", "flex");
		currentMenu = "." + menu;
		return menu;
	};
	
	
	
	
	
	
	
	
	
});