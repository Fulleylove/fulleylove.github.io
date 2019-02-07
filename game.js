$(document).ready(function(){

	// Resource generation rates
	var sLumberjackRate = 1;
	var sLoggingTruckRate = 8;
	var sLoggingHeliRate = 50;
	var sLoggingCampRate = 250;
	var sLumberMillRate = 2300;
	var sLogBoomRate = 15000;
	var sClearCutterRate = 250000;
	var sOldGrowthRate = 1500000;
	var sStolenLandRate = 10000000;

	var sOilWorkerRate = 1;
	var sDrillingRigRate = 8;
	var sTankerTruckRate = 50;
	var sOilPlatformRate = 250;
	var sOilPipelineRate = 2300;
	var sOilRefineryRate = 15000;
	var sOilTankerRate = 250000;
	var sOilDictatorRate = 1500000;
	var sPoliticianRate = 10000000;

	// Starting costs
	var sLumberjackCost = 15;
	var sLumberjackCostL = 7;
	var sLumberjackCostO = 3;

	var sLoggingTruckCost = 180;
	var sLoggingTruckCostL = 25;
	var sLoggingTruckCostO = 50;

	var sLoggingHeliCost = 2000;
	var sLoggingHeliCostL = 1000;
	var sLoggingHeliCostO = 2200;

	var sLoggingCampCost = 26000;
	var sLoggingCampCostL = 15000;
	var sLoggingCampCostO = 20000;

	var sLumberMillCost = 310000;
	var sLumberMillCostL = 500000;
	var sLumberMillCostO = 350000;

	var sLogBoomCost = 3700000;
	var sLogBoomCostL = 3000000;
	var sLogBoomCostO = 2500000;

	var sClearCutterCost = 45000000;
	var sClearCutterCostL = 50000000;
	var sClearCutterCostO = 10000000;

	var sOldGrowthCost = 530000000;
	var sOldGrowthCostL = 250000000;
	var sOldGrowthCostO = 100000000;

	var sStolenLandCost = 6500000000;
	var sStolenLandCostL = 7000000000;
	var sStolenLandCostO = 5000000000;


	var sOilWorkerCost = 20;
	var sOilWorkerCostL = 6;
	var sOilWorkerCostO = 11;

	var sDrillingRigCost = 150;
	var sDrillingRigCostL = 75;
	var sDrillingRigCostO = 45;

	var sTankerTruckCost = 2500;
	var sTankerTruckCostL = 1500;
	var sTankerTruckCostO = 3000;

	var sOilPlatformCost = 22000;
	var sOilPlatformCostL = 20000;
	var sOilPlatformCostO = 10000;

	var sOilPipelineCost = 340000;
	var sOilPipelineCostL = 250000;
	var sOilPipelineCostO = 400000;

	var sOilRefineryCost = 3600000;
	var sOilRefineryCostL = 2000000;
	var sOilRefineryCostO = 3100000;

	var sOilTankerCost = 50000000;
	var sOilTankerCostL = 20000000;
	var sOilTankerCostO = 40000000;

	var sOilDictatorCost = 475000000;
	var sOilDictatorCostL = 125000000;
	var sOilDictatorCostO = 225000000;

	var sPoliticianCost = 6700000000;
	var sPoliticianCostL = 4000000000;
	var sPoliticianCostO = 8000000000;

	// OPTIONS
	var sMoney = 10;
	var sLumberPrice = 1;
	var sOilPrice = 1;
	var sSpeciesExtinct = 2;

	// The current price is multiplied by this to get next price.
	var priceIncrease = 1.35; 

	// When the cash price of an item is less than this times your current 
	// cash or resource it shows the item.
	var unlockRatio = 0.25;   


	// Initialization
	lumber = readIntValue("lumber", 0);
	oil = readIntValue("oil", 0);
	money = readIntValue("money", sMoney);
	totalLumberCreated = readIntValue("totalLumberCreated", 0);
	totalOilCreated = readIntValue("totalOilCreated", 0);
	totalMoneySpent = readIntValue("totalMoneySpent", 0);
	lumberPrice = readIntValue("lumberPrice", sLumberPrice);
	oilPrice = readIntValue("oilPrice", sOilPrice);
	speciesExtinct = readIntValue("speciesExtinct", sSpeciesExtinct);
	secs = readIntValue("time", 0);

	var lumberPerSecond = 0;
	var oilPerSecond = 0;
	var totalResources = 0;

	// Game refreshes every second.
	var intervalTimer = setInterval(function(){update();},1000);

	// Auto-saves every five seconds.
	var autoSaveTimer = setInterval(function(){saveGame();},5000);

	// Initialize items
	var lumberjackFleet = new Item("lumberjack",sLumberjackRate,"lumber",sLumberjackCost,sLumberjackCostL,sLumberjackCostO);
	var loggingTruckFleet = new Item("loggingTruck",sLoggingTruckRate,"lumber",sLoggingTruckCost,sLoggingTruckCostL,sLoggingTruckCostO);
	var loggingHeliFleet = new Item("loggingHeli",sLoggingHeliRate,"lumber",sLoggingHeliCost,sLoggingHeliCostL,sLoggingHeliCostO);
	var loggingCampFleet = new Item("loggingCamp",sLoggingCampRate,"lumber",sLoggingCampCost,sLoggingCampCostL,sLoggingCampCostO);
	var lumberMillFleet = new Item("lumberMill",sLumberMillRate,"lumber",sLumberMillCost,sLumberMillCostL,sLumberMillCostO);
	var logBoomFleet = new Item("logBoom",sLogBoomRate,"lumber",sLogBoomCost,sLogBoomCostL,sLogBoomCostO);
	var clearCutterFleet = new Item("clearCutter",sClearCutterRate,"lumber",sClearCutterCost,sClearCutterCostL,sClearCutterCostO);
	var oldGrowthFleet = new Item("oldGrowth",sOldGrowthRate,"lumber",sOldGrowthCost,sOldGrowthCostL,sOldGrowthCostO);
	var stolenLandFleet = new Item("stolenLand",sStolenLandRate,"lumber",sStolenLandCost,sStolenLandCostL,sStolenLandCostO);

	var oilWorkerFleet = new Item("oilWorker",sOilWorkerRate,"oil",sOilWorkerCost,sOilWorkerCostL,sOilWorkerCostO);
	var drillingRigFleet = new Item("drillingRig",sDrillingRigRate,"oil",sDrillingRigCost,sDrillingRigCostL,sDrillingRigCostO);
	var tankerTruckFleet = new Item("tankerTruck",sTankerTruckRate,"oil",sTankerTruckCost,sTankerTruckCostL,sTankerTruckCostO);
	var oilPlatformFleet = new Item("oilPlatform",sOilPlatformRate,"oil",sOilPlatformCost,sOilPlatformCostL,sOilPlatformCostO);
	var oilPipelineFleet = new Item("oilPipeline",sOilPipelineRate,"oil",sOilPipelineCost,sOilPipelineCostL,sOilPipelineCostO);
	var oilRefineryFleet = new Item("oilRefinery",sOilRefineryRate,"oil",sOilRefineryCost,sOilRefineryCostL,sOilRefineryCostO);
	var oilTankerFleet = new Item("oilTanker",sOilTankerRate,"oil",sOilTankerCost,sOilTankerCostL,sOilTankerCostO);
	var oilDictatorFleet = new Item("oilDictator",sOilDictatorRate,"oil",sOilDictatorCost,sOilDictatorCostL,sOilDictatorCostO);
	var politicianFleet = new Item("politician",sPoliticianRate,"oil",sPoliticianCost,sPoliticianCostL,sPoliticianCostO);

	var fleets = [lumberjackFleet,loggingTruckFleet,loggingHeliFleet,loggingCampFleet,
				  lumberMillFleet,logBoomFleet,clearCutterFleet,oldGrowthFleet,stolenLandFleet,
				  oilWorkerFleet,drillingRigFleet,tankerTruckFleet,oilPlatformFleet,
				  oilPipelineFleet,oilRefineryFleet,oilTankerFleet,oilDictatorFleet,politicianFleet];

	// read in costs and bonus from local storage or set to starting values
	for(var i = 0; i < fleets.length; i++) {
		fleets[i].cost = readIntValue(fleets[i].name + "Cost", fleets[i].sCost);
		fleets[i].costL = readIntValue(fleets[i].name + "CostL", fleets[i].sCostL);
		fleets[i].costO = readIntValue(fleets[i].name + "CostO", fleets[i].sCostO);
		fleets[i].count = readIntValue(fleets[i].name + "s", 0);
		fleets[i].bonus = readIntValue(fleets[i].name + "Bonus", 0);
	}

	// static tooltips
	var carbonTT = new Opentip($("#buyCarbonCredit"),{style: "dark"});
	carbonTT.setContent("Slightly increases resource selling price.");

	var mbaTip = new Opentip($("#mbaTip"),{style: "dark"});
	mbaTip.setContent("Click the CHOP WOOD! button once, then hold ENTER on your keyboard.<br><br>Profit!<br><br>This button likes it when you click it. Gently.");

	var axesTT = new Opentip($("#buyAxes"),{style: "dark"});
	axesTT.setContent("Give your loggers axes so they stop punching trees.");

	var wrenchesTT = new Opentip($("#buyWrenches"),{style: "dark"});
	wrenchesTT.setContent("When in doubt, use the biggest wrench you have.");

	var chainsTT = new Opentip($("#buyChains"),{style: "dark"});
	chainsTT.setContent("Haul those logs all year round. Maximum haulage.");

	var bitsTT = new Opentip($("#buyBits"),{style: "dark"});
	bitsTT.setContent("When the drillin' gets hard, get a bit better of a bit.");

	// Item "class"
	function Item(name,rate,type,sCost,sCostL,sCostO) {
		this.name = name;
		this.cost = 0;
		this.costL = 0;
		this.costO = 0;
		this.count = 0;
		this.bonus = 0;
		this.rate = rate;
		this.type = type;
		this.sCost = sCost;
		this.sCostL = sCostL;
		this.sCostO = sCostO;
		// this.tooltip = new Opentip($("#" + name + "Button"),{style: "dark"});
	}

	// Display refreshers
	function refreshMoney() {
		$("#moneyCount").html("Cash: $" + numeral(money).format('0.000a'));
	}

	function refreshLumber() {
		$("#lumberCount").html(numeral(lumber).format('0.000a') + " (" + ((lumberPerSecond > 999) ? numeral(lumberPerSecond).format('0.0a') : lumberPerSecond) + "/sec)");
	}

	function refreshOil() {
		$("#oilCount").html(numeral(oil).format('0.000a') + " (" + ((oilPerSecond > 999) ? numeral(oilPerSecond).format('0.0a') : oilPerSecond) + "/sec)");
	}

	function refreshFleets(fleetArr) {
		for(var i = 0; i< fleetArr.length; i++) {
			$("#" + fleetArr[i].name + "Count").html(((fleetArr[i].count > 999) ? numeral(fleetArr[i].count).format('0.0a') : fleetArr[i].count));
			$("#" + fleetArr[i].name + "CostDiv").html(numeral(fleetArr[i].cost).format('0.0a'));
			$("#" + fleetArr[i].name + "CostLDiv").html(numeral(fleetArr[i].costL).format('0.0a'));
			$("#" + fleetArr[i].name + "CostODiv").html(numeral(fleetArr[i].costO).format('0.0a'));
			$("#" + fleetArr[i].name + "RateDiv").html(numeral(fleetArr[i].rate).format('0.0a'));
			$("#" + fleetArr[i].name + "UpgradeCount").html(fleetArr[i].bonus);
			$("#" + fleetArr[i].name + "UpgradeCost").html(numeral(fleetArr[i].cost * 5).format('0.00a'));
		}
	}

	function showRow(rowToShow) {
		$("#" + rowToShow + "Row").show(800);
	}

	function hideRow(rowToHide) {
		document.getElementById(rowToHide + "Row").style.display = "none";
	}

	function rowUnlock(fleetArr) {
		for(var i = 0; i< fleetArr.length; i++) {
			if(money > fleetArr[i].sCost * unlockRatio || lumber > fleetArr[i].sCost * unlockRatio || oil > fleetArr[i].sCost * unlockRatio){
				showRow(fleetArr[i].name);
			}
			if(fleetArr[i].bonus == 0) {
				if(fleetArr[i].count >= 5) {
					showRow(fleetArr[i].name + "Upgrade");
				}
			} else if(fleetArr[i].bonus == 1) {
				if(fleetArr[i].count >= 10) {
					showRow(fleetArr[i].name + "Upgrade");
				}
			} else if(fleetArr[i].bonus == 2) {
				if(fleetArr[i].count >= 15) {
					showRow(fleetArr[i].name + "Upgrade");
				}
			} else if(fleetArr[i].bonus == 3) {
				if(fleetArr[i].count >= 20) {
					showRow(fleetArr[i].name + "Upgrade");
				}
			} else if(fleetArr[i].bonus == 4) {
				if(fleetArr[i].count >= 25) {
					showRow(fleetArr[i].name + "Upgrade");
				}
			} else if(fleetArr[i].bonus == 5) {
				if(fleetArr[i].count >= 30) {
					showRow(fleetArr[i].name + "Upgrade");
				}
			}
		}
	}

	$("#buyCarbonCredit").click(function() {
		if(money >= 100000000) {
			speciesExtinct += 1;
			refreshMoney();
			money -= 100000000;
			totalMoneySpent += 100000000;
			lumberPrice += 0.01;
			oilPrice += 0.01;
			$("#lumberPrice").html("Sells for  $" + numeral(lumberPrice).format('0.00a'));
			$("#oilPrice").html("Sells for  $" + numeral(oilPrice).format('0.00a'));
		}
	});

	function buyItem(item) {
		if(item.cost <= money && item.costL <= lumber && item.costO <= oil){
			item.count = item.count + 1;
			money -= item.cost;
			lumber -= item.costL;
			oil -= item.costO;
			totalMoneySpent += item.cost;
			item.cost = item.cost * priceIncrease;
			item.costL = item.costL * priceIncrease;
			item.costO = item.costO * priceIncrease;
		}

		refreshMoney();
		refreshOil();
		refreshLumber();
		refreshFleets(fleets);
		boldResource();
		updateTooltips();
	}

	function buyUpgrade(item) {
		if(money > (item.cost * 5)){
			money -= (item.cost * 5);
			totalMoneySpent += (item.cost * 5);
			item.bonus += 1;
			document.getElementById(item.name + "UpgradeRow").style.display = "none";
		}

		refreshMoney();
		refreshFleets(fleets);
		boldResource();
		updateTooltips();
	}

	$(".buyItem").click(function() {
		switch(this.id) {
			case "lumberjackButton":
				buyItem(lumberjackFleet);
				break;
			case "loggingTruckButton":
				buyItem(loggingTruckFleet);
				break;
			case "loggingHeliButton":
				buyItem(loggingHeliFleet);
				break;
			case "loggingCampButton":
				buyItem(loggingCampFleet);
				break;
			case "lumberMillButton":
				buyItem(lumberMillFleet);
				break;
			case "logBoomButton":
				buyItem(logBoomFleet);
				break;
			case "clearCutterButton":
				buyItem(clearCutterFleet);
				break;
			case "oldGrowthButton":
				buyItem(oldGrowthFleet);
				break;
			case "stolenLandButton":
				buyItem(stolenLandFleet);
				break;
			case "oilWorkerButton":
				buyItem(oilWorkerFleet);
				break;
			case "drillingRigButton":
				buyItem(drillingRigFleet);
				break;
			case "tankerTruckButton":
				buyItem(tankerTruckFleet);
				break;
			case "oilPlatformButton":
				buyItem(oilPlatformFleet);
				break;
			case "oilPipelineButton":
				buyItem(oilPipelineFleet);
				break;
			case "oilRefineryButton":
				buyItem(oilRefineryFleet);
				break;
			case "oilTankerButton":
				buyItem(oilTankerFleet);
				break;
			case "oilDictatorButton":
				buyItem(oilDictatorFleet);
				break;
			case "politicianButton":
				buyItem(politicianFleet);
				break;
			case "buyAxes":
				buyUpgrade(lumberjackFleet);
				break;
			case "buyWrenches":
				buyUpgrade(oilWorkerFleet);
				break;
			case "buyChains":
				buyUpgrade(loggingTruckFleet);
				break;
			case "buyBits":
				buyUpgrade(drillingRigFleet);
				break;
			case "buyHose":
				buyUpgrade(tankerTruckFleet);
				break;
			case "buyBlades":
				buyUpgrade(loggingHeliFleet);
				break;
			case "buyTents":
				buyUpgrade(loggingCampFleet);
				break;
			case "buyWellheads":
				buyUpgrade(oilPlatformFleet);
				break;
			case "buyDust":
				buyUpgrade(lumberMillFleet);
				break;
			case "buyPremiers":
				buyUpgrade(oilPipelineFleet);
				break;
			case "buyTugs":
				buyUpgrade(logBoomFleet);
				break;
			case "buyEnhancers":
				buyUpgrade(oilRefineryFleet);
				break;
			case "buyPRFirms":
				buyUpgrade(clearCutterFleet);
				break;
			case "buyPirates":
				buyUpgrade(oilTankerFleet);
				break;
			case "buyRepellent":
				buyUpgrade(oldGrowthFleet);
				break;
			case "buySunglasses":
				buyUpgrade(oilDictatorFleet);
				break;
			case "buySchools":
				buyUpgrade(stolenLandFleet);
				break;
			case "buyVotingMachines":
				buyUpgrade(politicianFleet);
				break;
			default:
				break;
		}
	});

	$("#chopWood").click(function(){
		lumber++;
		totalLumberCreated++;
		refreshLumber();
		boldResource();
	});

	$("#pumpOil").click(function() {
		oil++;
		totalOilCreated++;
		refreshOil();
		boldResource();
	});

	function boldResource() {
		// set bold when have enough resources
		// color:#000000;
		for(var i = 0; i< fleets.length; i++) {
			if(fleets[i].cost < money) {
			  $("#" + fleets[i].name + "CostDiv").css("color","#000000");
			} else {
			  $("#" + fleets[i].name + "CostDiv").css("color","#999999");
			}
			if(fleets[i].costL < lumber) {
			  $("#" + fleets[i].name + "CostLDiv").css("color","#000000");
			} else {
			  $("#" + fleets[i].name + "CostLDiv").css("color","#999999");
			}
			if(fleets[i].costO < oil) {
			  $("#" + fleets[i].name + "CostODiv").css("color","#000000");
			} else {
			  $("#" + fleets[i].name + "CostODiv").css("color","#999999");
			}
		}
	}
				
	function updateTooltips() {
		// update tooltips... updates every tooltip every tick.. wasteful...
		for(var i = 0; i< fleets.length; i++) {
			fleets[i].tooltip.setContent("<table><tr><td>Count:</td><td>" + numeral(fleets[i].count).format('0a') + "</td></tr><tr><td>Base rate:</td><td>" + numeral(fleets[i].rate).format('0.0a') + "/s</td></tr><tr><td><strong>BONUS:</strong></td><td><strong>x" + numeral(Math.pow(2,fleets[i].bonus)).format('0a') + "</strong></td><tr><td>Fleet rate:</td><td>" + numeral(fleets[i].rate * fleets[i].count * Math.pow(2,fleets[i].bonus)).format('0.0a') + "/s</td></tr></table>");
		}
	}

	function update() {
		// durr how do loops work?  :P
		lumberPerSecond = lumberjackFleet.count * lumberjackFleet.rate * Math.pow(2,lumberjackFleet.bonus) + 
						  loggingTruckFleet.count * loggingTruckFleet.rate * Math.pow(2,loggingTruckFleet.bonus) + 
						  loggingHeliFleet.count * loggingHeliFleet.rate * Math.pow(2,loggingHeliFleet.bonus) + 
						  loggingCampFleet.count * loggingCampFleet.rate * Math.pow(2,loggingCampFleet.bonus) + 
						  lumberMillFleet.count * lumberMillFleet.rate * Math.pow(2,lumberMillFleet.bonus) +
						  logBoomFleet.count * logBoomFleet.rate * Math.pow(2,logBoomFleet.bonus) +
						  clearCutterFleet.count * clearCutterFleet.rate * Math.pow(2,clearCutterFleet.bonus) +
						  oldGrowthFleet.count * oldGrowthFleet.rate * Math.pow(2,oldGrowthFleet.bonus) +
						  stolenLandFleet.count * stolenLandFleet.rate * Math.pow(2,stolenLandFleet.bonus);
						  
		oilPerSecond = oilWorkerFleet.count * oilWorkerFleet.rate * Math.pow(2,oilWorkerFleet.bonus) + 
					   drillingRigFleet.count * drillingRigFleet.rate * Math.pow(2,drillingRigFleet.bonus) + 
					   tankerTruckFleet.count * tankerTruckFleet.rate * Math.pow(2,tankerTruckFleet.bonus) + 
					   oilPlatformFleet.count * oilPlatformFleet.rate * Math.pow(2,oilPlatformFleet.bonus) + 
					   oilPipelineFleet.count * oilPipelineFleet.rate * Math.pow(2,oilPipelineFleet.bonus) +
					   oilRefineryFleet.count * oilRefineryFleet.rate * Math.pow(2,oilRefineryFleet.bonus) +
					   oilTankerFleet.count * oilTankerFleet.rate * Math.pow(2,oilTankerFleet.bonus) +
					   oilDictatorFleet.count * oilDictatorFleet.rate * Math.pow(2,oilDictatorFleet.bonus) +
					   politicianFleet.count * politicianFleet.rate * Math.pow(2,politicianFleet.bonus);
						  
		lumber += lumberPerSecond;
		oil += oilPerSecond;
		refreshLumber();
		refreshOil();
		refreshMoney();
		
		totalLumberCreated += lumberPerSecond;
		totalOilCreated += oilPerSecond;

		$("#totalLumber").html(numeral(totalLumberCreated).format('0.000a'));
		$("#totalOil").html(numeral(totalOilCreated).format('0.000a'));
		$("#totalMoneySpentDiv").html( numeral(totalMoneySpent).format('0.000a'));
		$("#totalResourcesDiv").html( numeral(money+lumber+oil).format('0.000a'));
		$("#lumberPrice").html("Sells for  $" + numeral(lumberPrice).format('0.00a'));
		$("#oilPrice").html("Sells for  $" + numeral(oilPrice).format('0.00a'));
		
		

		rowUnlock(fleets);
		refreshFleets(fleets);
		
		$("#speciesExtinctCount").html(speciesExtinct);
		
		// timer
		secs++;
		var mins = secs/60;
		mins = mins % 60;
		var hrs = secs/3600;
		hrs = hrs % 24;
		var days = secs/86400;
		secss = secs % 60;	
		
		$("#playedTime").html("Started: "+ ~~days + "d " + ~~hrs + "h " + ~~mins + "m " + ~~secss + "s ago.");
	  
		updateTooltips();
		boldResource();
	  
	}

	$("#reset").click(function() {
		reset("ask");
	});


	// get rid of this ask evilness
	function reset(asking) {
		if(asking === "ask") {
			var r=confirm("Are you sure you want to RESET?");
			if (r==true) {
				lumber = 0;
				oil = 0;
				money = sMoney;
				secs = 0;
				lumberPrice = 1;
				oilPrice = 1;	
				totalLumberCreated = 0;
				totalOilCreated = 0;
				totalMoneySpent = 0;
				speciesExtinct = sSpeciesExtinct;
		  
				// set counts to zero
				// set costs to starting costs
				for(var i = 0; i < fleets.length; i++) {
					fleets[i].count = 0;
					fleets[i].bonus = 0;
					fleets[i].cost = fleets[i].sCost;
					fleets[i].costL = fleets[i].sCostL;
					fleets[i].costO = fleets[i].sCostO;
				}
			  
				// hide rows
				for(var i = 0; i < fleets.length; i++) {
					document.getElementById(fleets[i].name + "Row").style.display = "none";
					document.getElementById(fleets[i].name + "UpgradeRow").style.display = "none";
				}
			}
		} 
	  
		if(asking === "noask") {
			lumber = 0;
			oil = 0;
			money = sMoney;
			secs = 0;
			lumberPrice = 1;
			oilPrice = 1;	
			totalLumberCreated = 0;
			totalOilCreated = 0;
			totalMoneySpent = 0;
			speciesExtinct = sSpeciesExtinct;
			
			// set counts to zero
			// set costs to starting costs
			for(var i = 0; i < fleets.length; i++) {
				fleets[i].count = 0;
				fleets[i].bonus = 0;
				fleets[i].cost = fleets[i].sCost;
				fleets[i].costL = fleets[i].sCostL;
				fleets[i].costO = fleets[i].sCostO;
			}
		
			// hide rows
			for(var i = 0; i < fleets.length; i++) {
				hideRow(fleets[i].name);
				hideRow(fleetArr[i].name + "Upgrade");
			}
		}
	}

	// holy repeating BS
	$("#sellLumber").click(function() {
		money += (lumber * lumberPrice);
		lumber=0;
		refreshLumber();
		refreshMoney();
		boldResource();
	});

	$("#sellOil").click(function() {
		money += (oil * oilPrice);
		oil=0;
		refreshOil();
		refreshMoney();
		boldResource();
	});

	$("#sellHalfLumber").click(function() {
		money = money + (lumberPrice * lumber/2);
		lumber = lumber/2;
		refreshLumber();
		refreshMoney();
		boldResource();
	});

	$("#sellHalfOil").click(function() {
		money = money + (oilPrice * oil/2);
		oil = oil/2;
		refreshOil();
		refreshMoney();
		boldResource();
	});

	$("#sellQuarterLumber").click(function() {
		money = money + (lumberPrice * lumber/4);
		lumber = lumber - lumber/4;
		refreshLumber();
		refreshMoney();
		boldResource();
	});

	$("#sellQuarterOil").click(function() {
		money = money + (oilPrice * oil/4);
		oil = oil - oil/4;
		refreshOil();
		refreshMoney();
		boldResource();
	});

	$("#sellEighthLumber").click(function() {
		money = money + (lumberPrice * lumber/8);
		lumber = lumber - lumber/8;
		refreshLumber();
		refreshMoney();
		boldResource();
	});

	$("#sellEighthOil").click(function() {
		money = money + (oilPrice * oil/8);
		oil = oil - oil/8;
		refreshOil();
		refreshMoney();
		boldResource();
	});

	$("#sellAllResources").click(function() {
		money += (lumber * lumberPrice);
		lumber=0;
		refreshLumber();
		money += (oil * oilPrice);
		oil=0;
		refreshOil();
		boldResource();
		refreshMoney();
	});

	$("#saveGameButton").click(function() {
		saveGame();
	});
		
	function readIntValue(key, defaultVal) {
			if (window.localStorage[key] == null)
				return defaultVal;
			return parseFloat(window.localStorage[key]);
	}

	function saveGame() {
		localStorage;
		window.localStorage.lumber = lumber;
		window.localStorage.oil = oil;
		window.localStorage.money = money;
		window.localStorage.totalLumberCreated = totalLumberCreated;
		window.localStorage.totalOilCreated = totalOilCreated;
		window.localStorage.totalMoneySpent = totalMoneySpent;
		window.localStorage.time = secs;
		window.localStorage.lumberPrice = lumberPrice;
		window.localStorage.oilPrice = oilPrice;
		window.localStorage.speciesExtinct = speciesExtinct;
	  
		window.localStorage.lumberjacks = lumberjackFleet.count;
		window.localStorage.lumberjackBonus = lumberjackFleet.bonus;
		window.localStorage.lumberjackCost = lumberjackFleet.cost;
		window.localStorage.lumberjackCostL = lumberjackFleet.costL;
		window.localStorage.lumberjackCostO = lumberjackFleet.costO;
	  
		window.localStorage.loggingTrucks = loggingTruckFleet.count;
		window.localStorage.loggingTruckBonus = loggingTruckFleet.bonus;
		window.localStorage.loggingTruckCost = loggingTruckFleet.cost;
		window.localStorage.loggingTruckCostL = loggingTruckFleet.costL;
		window.localStorage.loggingTruckCostO = loggingTruckFleet.costO;  

		window.localStorage.loggingHelis = loggingHeliFleet.count;
		window.localStorage.loggingHeliBonus = loggingHeliFleet.bonus;
		window.localStorage.loggingHeliCost = loggingHeliFleet.cost;
		window.localStorage.loggingHeliCostL = loggingHeliFleet.costL;
		window.localStorage.loggingHeliCostO = loggingHeliFleet.costO;  
	  
		window.localStorage.loggingCamps = loggingCampFleet.count;
		window.localStorage.loggingCampBonus = loggingCampFleet.bonus;
		window.localStorage.loggingCampCost = loggingCampFleet.cost;
		window.localStorage.loggingCampCostL = loggingCampFleet.costL;
		window.localStorage.loggingCampCostO = loggingCampFleet.costO;
	  
		window.localStorage.lumberMills = lumberMillFleet.count;
		window.localStorage.lumberMillBonus = lumberMillFleet.bonus;
		window.localStorage.lumberMillCost = lumberMillFleet.cost;
		window.localStorage.lumberMillCostL = lumberMillFleet.costL;
		window.localStorage.lumberMillCostO = lumberMillFleet.costO;  
	  
		window.localStorage.logBooms = logBoomFleet.count;
		window.localStorage.logBoomBonus = logBoomFleet.bonus;
		window.localStorage.logBoomCost = logBoomFleet.cost;
		window.localStorage.logBoomCostL = logBoomFleet.costL;
		window.localStorage.logBoomCostO = logBoomFleet.costO;  
	  
		window.localStorage.clearCutters = clearCutterFleet.count;
		window.localStorage.clearCutterBonus = clearCutterFleet.bonus;
		window.localStorage.clearCutterCost = clearCutterFleet.cost;
		window.localStorage.clearCutterCostL = clearCutterFleet.costL;
		window.localStorage.clearCutterCostO = clearCutterFleet.costO;
	  
		window.localStorage.oldGrowths = oldGrowthFleet.count;
		window.localStorage.oldGrowthBonus = oldGrowthFleet.bonus;
		window.localStorage.oldGrowthCost = oldGrowthFleet.cost;
		window.localStorage.oldGrowthCostL = oldGrowthFleet.costL;
		window.localStorage.oldGrowthCostO = oldGrowthFleet.costO;
	  
		window.localStorage.stolenLands = stolenLandFleet.count;
		window.localStorage.stolenLandBonus = stolenLandFleet.bonus;
		window.localStorage.stolenLandCost = stolenLandFleet.cost;
		window.localStorage.stolenLandCostL = stolenLandFleet.costL;
		window.localStorage.stolenLandCostO = stolenLandFleet.costO;  
	  
		window.localStorage.oilWorkers = oilWorkerFleet.count;
		window.localStorage.oilWorkerBonus = oilWorkerFleet.bonus;
		window.localStorage.oilWorkerCost = oilWorkerFleet.cost;
		window.localStorage.oilWorkerCostL = oilWorkerFleet.costL;
		window.localStorage.oilWorkerCostO = oilWorkerFleet.costO;  
	  
		window.localStorage.drillingRigs = drillingRigFleet.count;
		window.localStorage.drillingRigBonus = drillingRigFleet.bonus;
		window.localStorage.drillingRigCost = drillingRigFleet.cost;
		window.localStorage.drillingRigCostL = drillingRigFleet.costL;
		window.localStorage.drillingRigCostO = drillingRigFleet.costO;  
	  
		window.localStorage.tankerTrucks = tankerTruckFleet.count;
		window.localStorage.tankerTruckBonus = tankerTruckFleet.bonus;
		window.localStorage.tankerTruckCost = tankerTruckFleet.cost;
		window.localStorage.tankerTruckCostL = tankerTruckFleet.costL;
		window.localStorage.tankerTruckCostO = tankerTruckFleet.costO;  
	  
		window.localStorage.oilPlatforms = oilPlatformFleet.count;
		window.localStorage.oilPlatformBonus = oilPlatformFleet.bonus;
		window.localStorage.oilPlatformCost = oilPlatformFleet.cost;
		window.localStorage.oilPlatformCostL = oilPlatformFleet.costL;
		window.localStorage.oilPlatformCostO = oilPlatformFleet.costO;  
	  
		window.localStorage.oilPipelines = oilPipelineFleet.count;
		window.localStorage.oilPipelineBonus = oilPipelineFleet.bonus;
		window.localStorage.oilPipelineCost = oilPipelineFleet.cost;
		window.localStorage.oilPipelineCostL = oilPipelineFleet.costL;
		window.localStorage.oilPipelineCostO = oilPipelineFleet.costO;  
	  
		window.localStorage.oilRefinerys = oilRefineryFleet.count;
		window.localStorage.oilRefineryBonus = oilRefineryFleet.bonus;
		window.localStorage.oilRefineryCost = oilRefineryFleet.cost;
		window.localStorage.oilRefineryCostL = oilRefineryFleet.costL;
		window.localStorage.oilRefineryCostO = oilRefineryFleet.costO;  
	  
		window.localStorage.oilTankers = oilTankerFleet.count;
		window.localStorage.oilTankerBonus = oilTankerFleet.bonus;
		window.localStorage.oilTankerCost = oilTankerFleet.cost;
		window.localStorage.oilTankerCostL = oilTankerFleet.costL;
		window.localStorage.oilTankerCostO = oilTankerFleet.costO;  
	  
		window.localStorage.oilDictators = oilDictatorFleet.count;
		window.localStorage.oilDictatorBonus = oilDictatorFleet.bonus;
		window.localStorage.oilDictatorCost = oilDictatorFleet.cost;
		window.localStorage.oilDictatorCostL = oilDictatorFleet.costL;
		window.localStorage.oilDictatorCostO = oilDictatorFleet.costO;  
	  
		window.localStorage.politicians = politicianFleet.count;
		window.localStorage.politicianBonus = politicianFleet.bonus;
		window.localStorage.politicianCost = politicianFleet.cost;
		window.localStorage.politicianCostL = politicianFleet.costL;
		window.localStorage.politicianCostO = politicianFleet.costO;
	  
	}

	// why are you looking at this?
	$("#winGame").click(function() {
		if(money >= 100000000000000) {
			alert("Congratulations!   YOU WIN!   	Planet destroyed.");
		reset("ask");  // trolololo?
		}
	});

});

/*
     FILE ARCHIVED ON 09:02:32 Mar 25, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:52:21 Feb 06, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 155.889 (3)
  esindex: 0.007
  captures_list: 185.108
  CDXLines.iter: 11.757 (3)
  PetaboxLoader3.datanode: 268.091 (5)
  exclusion.robots: 0.634
  exclusion.robots.policy: 0.607
  RedisCDXSource: 13.514
  PetaboxLoader3.resolve: 144.32 (2)
  load_resource: 404.479
*/