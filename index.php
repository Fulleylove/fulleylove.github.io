
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link type="text/css" href="banner.css">
<link type="text/css" href="icon.css">
<link type="text/css" href="cover.css">
 <link rel="stylesheet" type="text/css" href="style.css">
<script src="jquery.js"></script>
<script src="numeral.js"></script>
<script src="open.js"></script>
 <script src="game.js"></script>
	
	<body><!-- BEGIN WAYBACK TOOLBAR INSERT -->
<!-- <script type="text/javascript" src="/static/js/timestamp.js?v=1548381079" charset="utf-8"></script>
<script type="text/javascript" src="/static/js/graph-calc.js?v=1548381079" charset="utf-8"></script>
<script type="text/javascript" src="/static/js/auto-complete.js?v=1548381079" charset="utf-8"></script>
<script type="text/javascript" src="/static/js/toolbar.js?v=1548381079" charset="utf-8"></script> -->
<!-- END WAYBACK TOOLBAR INSERT -->
		<div id="fb-root"></div>
		<img src="/web/20140402131208im_/http://choppin-wood.com/images/logo.png">
		<div id="subtitle">Chop some wood and pump some oil, then hire some help!</div>
		<div id="theBig">
			<div id="col1">
				<table class="mainTables">
					<tr><td colspan="5" align="center" class="lumberHeader">Wood</td></tr>
					<tr>
						<td colspan="2" align="center" class="lumberMain">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/log.png"><div id="lumberCount">0.000 (0/sec)</div>
							<div id="lumberPrice">Sells for $1.00</div>
						</td>
						<td colspan="3" align="center" class="lumberMain">
							<div id="mainButtonLumber"><button type="button" class="mainButton" id="chopWood">CHOP WOOD!</button></div>
							<button type="button" class="sellButton" id="sellLumber">Sell All</button>
							<button type="button" class="sellButton" id="sellHalfLumber">1/2</button>
							<button type="button" class="sellButton" id="sellQuarterLumber">1/4</button>
							<button type="button" class="sellButton" id="sellEighthLumber">1/8</button><br>
						</td>
					</tr>
					<tr>
						<td class="upperMenuHeader">#</td>
						<td class="upperMenuHeader">Buy Item</td>
						<td class="upperMenuHeader" colspan="3">Cost</td>
					</tr>
					<tr>
						<td class="lowerMenuHeader"></td>
						<td class="lowerMenuHeader"></td>
						<td class="lowerMenuHeader" style="background: #FFC17F ;">Cash</td>
						<td class="lowerMenuHeader" style="background: #96F97C ;">Lumber</td>
						<td class="lowerMenuHeader" style="background: #7BD3F0 ;">Oil</td>
					</tr>
					<tr id="lumberjackRow" style="display:none;">
						<td class="lumberStoren"><div id="lumberjackCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/lumberjack.png" style="float:left" ;>
							<button type="button" class="buyItem" id="lumberjackButton">Crazed Logger</button>
						</td>
						<td class="infoRown"><div id="lumberjackCostDiv"></div></td>
						<td class="lumberStoren"><div id="lumberjackCostLDiv"></div></td>
						<td class="oilStoren"><div id="lumberjackCostODiv"></div></td>
					</tr>
					<tr id="loggingTruckRow" style="display:none;">
						<td class="lumberStoren"><div id="loggingTruckCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/logginTruck.png" style="float:left" ;>
							<button type="button" class="buyItem" id="loggingTruckButton">Rusty Logging Truck</button>
						</td>
						<td class="infoRown"><div id="loggingTruckCostDiv"></div></td>
						<td class="lumberStoren"><div id="loggingTruckCostLDiv"></div></td>
						<td class="oilStoren"><div id="loggingTruckCostODiv"></div></td>
					</tr>
					<tr id="loggingHeliRow" style="display:none;">
						<td class="lumberStoren"><div id="loggingHeliCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/loggingHeli.png" style="float:left" ;>
							<button type="button" class="buyItem" id="loggingHeliButton">Refurb Logging Heli</button>
						</td>
						<td class="infoRown"><div id="loggingHeliCostDiv"></div></td>
						<td class="lumberStoren"><div id="loggingHeliCostLDiv"></div></td>
						<td class="oilStoren"><div id="loggingHeliCostODiv"></div></td>
					</tr>
					<tr id="loggingCampRow" style="display:none;">
						<td class="lumberStoren"><div id="loggingCampCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/loggingCamp.png" style="float:left" ;>
							<button type="button" class="buyItem" id="loggingCampButton">Illegal Logging Camp</button>
						</td>
						<td class="infoRown"><div id="loggingCampCostDiv"></div></td>
						<td class="lumberStoren"><div id="loggingCampCostLDiv"></div></td>
						<td class="oilStoren"><div id="loggingCampCostODiv"></div></td>
					</tr>
					<tr id="lumberMillRow" style="display:none;">
						<td class="lumberStoren"><div id="lumberMillCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/lumbermill.png" style="float:left" ;>
							<button type="button" class="buyItem" id="lumberMillButton">Haunted Lumber Mill</button>
						</td>
						<td class="infoRown"><div id="lumberMillCostDiv"></div></td>
						<td class="lumberStoren"><div id="lumberMillCostLDiv"></div></td>
						<td class="oilStoren"><div id="lumberMillCostODiv"></div></td>
					</tr>
					<tr id="logBoomRow" style="display:none;">
						<td class="lumberStoren"><div id="logBoomCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/logBoom.png" style="float:left" ;>
							<button type="button" class="buyItem" id="logBoomButton">Extra Safe Log Boom</button>
						</td>
						<td class="infoRown"><div id="logBoomCostDiv"></div></td>
						<td class="lumberStoren"><div id="logBoomCostLDiv"></div></td>
						<td class="oilStoren"><div id="logBoomCostODiv"></div></td>
					</tr>
					<tr id="clearCutterRow" style="display:none;">
						<td class="lumberStoren"><div id="clearCutterCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/clearCutter.png" style="float:left" ;>
							<button type="button" class="buyItem" id="clearCutterButton">Ninja Clear Cutter</button>
						</td>
						<td class="infoRown"><div id="clearCutterCostDiv"></div></td>
						<td class="lumberStoren"><div id="clearCutterCostLDiv"></div></td>
						<td class="oilStoren"><div id="clearCutterCostODiv"></div></td>
					</tr>
					<tr id="oldGrowthRow" style="display:none;">
						<td class="lumberStoren"><div id="oldGrowthCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oldGrowth.png" style="float:left" ;>
							<button type="button" class="buyItem" id="oldGrowthButton">Old Growth Forest</button>
						</td>
						<td class="infoRown"><div id="oldGrowthCostDiv"></div></td>
						<td class="lumberStoren"><div id="oldGrowthCostLDiv"></div></td>
						<td class="oilStoren"><div id="oldGrowthCostODiv"></div></td>
					</tr>
					<tr id="stolenLandRow" style="display:none;">
						<td class="lumberStoren"><div id="stolenLandCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/stolen.png" style="float:left" ;>
							<button type="button" class="buyItem" id="stolenLandButton">Stolen Native Land</button>
						</td>
						<td class="infoRown"><div id="stolenLandCostDiv"></div></td>
						<td class="lumberStoren"><div id="stolenLandCostLDiv"></div></td>
						<td class="oilStoren"><div id="stolenLandCostODiv"></div></td>
					</tr>
				</table>
			</div>
	
			<div id="col2">
				<table class="mainTables">
					<tr><td colspan="5" align="center" class="oilHeader">Oil</td></tr>
					<tr>
						<td colspan="2" align="center" class="oilMain">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/drum.png"><div id="oilCount">0.000 (0/sec)</div>
							<div id="oilPrice">Sells for $1.00</div>
						</td>
						<td colspan="3" align="center" class="oilMain">
							<div id="mainButtonLumber"><button type="button" class="mainButton" id="pumpOil">PUMP OIL!</button></div>
							<button type="button" class="sellButton" id="sellOil">Sell All</button>
							<button type="button" class="sellButton" id="sellHalfOil">1/2</button>
							<button type="button" class="sellButton" id="sellQuarterOil">1/4</button>
							<button type="button" class="sellButton" id="sellEighthOil">1/8</button>
							</td>
					</tr>
					<tr>
						<td class="upperMenuHeader">#</td>
						<td class="upperMenuHeader">Buy Item</td>
						<td class="upperMenuHeader" colspan="3">Cost</td>
					</tr>
					<tr>
						<td class="lowerMenuHeader"></td>
						<td class="lowerMenuHeader"></td>
						<td class="lowerMenuHeader" style="background: #FFC17F ;">Cash</td>
						<td class="lowerMenuHeader" style="background: #96F97C ;">Lumber</td>
						<td class="lowerMenuHeader" style="background: #7BD3F0 ;">Oil</td>
					</tr>
					<tr id="oilWorkerRow" style="display:none;">
						<td class="oilStoren"><div id="oilWorkerCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilWorker.png" style="float:left" ;>
							<button type="button" class="buyItem" id="oilWorkerButton">Roughneck Oil Worker</button>
						</td>
						<td class="infoRown"><div id="oilWorkerCostDiv"></div></td>
						<td class="lumberStoren"><div id="oilWorkerCostLDiv"></div></td>
						<td class="oilStoren"><div id="oilWorkerCostODiv"></div></td>
					</tr>
					<tr id="drillingRigRow" style="display:none;">
						<td class="oilStoren"><div id="drillingRigCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/drillingRig.png" style="float:left" ;>
							<button type="button" class="buyItem" id="drillingRigButton">Homebuilt Drill Rig</button>
						</td>
						<td class="infoRown"><div id="drillingRigCostDiv"></div></td>
						<td class="lumberStoren"><div id="drillingRigCostLDiv"></div></td>
						<td class="oilStoren"><div id="drillingRigCostODiv"></div></td>
					</tr>
					<tr id="tankerTruckRow" style="display:none;">
						<td class="oilStoren"><div id="tankerTruckCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/tankerTruck.png" style="float:left" ;>
							<button type="button" class="buyItem" id="tankerTruckButton">Leaky Tanker Truck</button>
						</td>
						<td class="infoRown"><div id="tankerTruckCostDiv"></div></td>
						<td class="lumberStoren"><div id="tankerTruckCostLDiv"></div></td>
						<td class="oilStoren"><div id="tankerTruckCostODiv"></div></td>
					</tr>
					<tr id="oilPlatformRow" style="display:none;">
						<td class="oilStoren"><div id="oilPlatformCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilPlatform.png" style="float:left" ;>
							<button type="button" class="buyItem" id="oilPlatformButton">Blownout Oil Platform</button>
						</td>
						<td class="infoRown"><div id="oilPlatformCostDiv"></div></td>
						<td class="lumberStoren"><div id="oilPlatformCostLDiv"></div></td>
						<td class="oilStoren"><div id="oilPlatformCostODiv"></div></td>
					</tr>
					<tr id="oilPipelineRow" style="display:none;">
						<td class="oilStoren"><div id="oilPipelineCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilPipeline2.png" style="float:left" ;>
							<button type="button" class="buyItem" id="oilPipelineButton">Leaky Oil Pipeline</button>
						</td>
						<td class="infoRown"><div id="oilPipelineCostDiv"></div></td>
						<td class="lumberStoren"><div id="oilPipelineCostLDiv"></div></td>
						<td class="oilStoren"><div id="oilPipelineCostODiv"></div></td>
					</tr>
					<tr id="oilRefineryRow" style="display:none;">
						<td class="oilStoren"><div id="oilRefineryCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilRefinery.png" style="float:left" ;>
							<button type="button" class="buyItem" id="oilRefineryButton">Oil Refinery of DOOM</button>
						</td>
						<td class="infoRown"><div id="oilRefineryCostDiv"></div></td>
						<td class="lumberStoren"><div id="oilRefineryCostLDiv"></div></td>
						<td class="oilStoren"><div id="oilRefineryCostODiv"></div></td>
					</tr>
					<tr id="oilTankerRow" style="display:none;">
						<td class="oilStoren"><div id="oilTankerCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilTanker.png" style="float:left" ;>
							<button type="button" class="buyItem" id="oilTankerButton">Wrecked Oil Tanker</button>
						</td>
						<td class="infoRown"><div id="oilTankerCostDiv"></div></td>
						<td class="lumberStoren"><div id="oilTankerCostLDiv"></div></td>
						<td class="oilStoren"><div id="oilTankerCostODiv"></div></td>
					</tr>
					<tr id="oilDictatorRow" style="display:none;">
						<td class="oilStoren"><div id="oilDictatorCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilDictator.png" style="float:left" ;>
							<button type="button" class="buyItem" id="oilDictatorButton">Oil Rich Dictator</button>
						</td>
						<td class="infoRown"><div id="oilDictatorCostDiv"></div></td>
						<td class="lumberStoren"><div id="oilDictatorCostLDiv"></div></td>
						<td class="oilStoren"><div id="oilDictatorCostODiv"></div></td>
					</tr>
					<tr id="politicianRow" style="display:none;">
						<td class="oilStoren"><div id="politicianCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/politician.png" style="float:left" ;>
							<button type="button" class="buyItem" id="politicianButton">Flexible Politician</button>
						</td>
						<td class="infoRown"><div id="politicianCostDiv"></div></td>
						<td class="lumberStoren"><div id="politicianCostLDiv"></div></td>
						<td class="oilStoren"><div id="politicianCostODiv"></div></td>
					</tr>
				</table>
			</div>
	
			<div id="infoDiv">
				<table class="mainTables">
					<tr><td class="infoHeader" colspan="4">Info</td></tr>
					<tr>
						<td class="infoRow" colspan="4">
							<div id="moneyCount">Cash: $0.00</div>
							<button type="button" class="myButton" id="saveGameButton">Save Game</button>
							<button type="button" class="myButton" id="sellAllResources">Sell ALL Resources</button>
							<div style="padding:5px">~ Game under active development; cost, rates, items, crazy icons all may change at a moments notice!</div>
						</td>
					</tr>
					<tr><td class="infoHeader" colspan="4">BONUS TIME</td></tr>
					<tr>
						<td class="upperMenuHeader">#</td>
						<td class="upperMenuHeader">Buy Upgrade</td>
						<td class="upperMenuHeader">Cost</td>
						<td class="upperMenuHeader">Bonus</td>
					</tr>
					
					<tr id="lumberjackUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="lumberjackUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/lumberjack.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/axe.png" style="float:left;">
							<button type="button" id="buyAxes" class="buyItem">Diamond Tip Axes</button>
						</td>
						<td class="lumberStoren"><div id="lumberjackUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="lumberjackBonusMult">x2</div></center></td>
					</tr>
					<tr id="oilWorkerUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="oilWorkerUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilWorker.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/wrench.png" style="float:left;">
							<button type="button" id="buyWrenches" class="buyItem">HUGE Wrenches</button>
						</td>
						<td class="oilStoren"><div id="oilWorkerUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="oilWokerBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="loggingTruckUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="loggingTruckUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/logginTruck.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyChains" class="buyItem">Loose Tire Chains</button>
						</td>
						<td class="lumberStoren"><div id="loggingTruckUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="loggingTruckBonusMult">x2</div></center></td>
					</tr>
					<tr id="drillingRigUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="drillingRigUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/drillingRig.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyBits" class="buyItem">Laser Drill Bits</button>
						</td>
						<td class="oilStoren"><div id="drillingRigUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="drillingRigBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="loggingHeliUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="loggingHeliUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/loggingHeli.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyBlades" class="buyItem">Carbon Rotor Blades</button>
						</td>
						<td class="lumberStoren"><div id="loggingHeliUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="loggingHeliBonusMult">x2</div></center></td>
					</tr>
					<tr id="tankerTruckUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="tankerTruckUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/tankerTruck.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyHose" class="buyItem">Big Thick Hose</button>
						</td>
						<td class="oilStoren"><div id="tankerTruckUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="tankerTruckBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="loggingCampUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="loggingCampUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/loggingCamp.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyTents" class="buyItem">Air Conditioned Tents</button>
						</td>
						<td class="lumberStoren"><div id="loggingCampUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="loggingCampBonusMult">x2</div></center></td>
					</tr>
					<tr id="oilPlatformUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="oilPlatformUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilPlatform.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyWellheads" class="buyItem">Leak Proof Wellheads</button>
						</td>
						<td class="oilStoren"><div id="oilPlatformUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="oilPlatformBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="lumberMillUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="lumberMillUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/lumberMill.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyDust" class="buyItem">Explosive Dust</button>
						</td>
						<td class="lumberStoren"><div id="lumberMillUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="lumberMillBonusMult">x2</div></center></td>
					</tr>
					<tr id="oilPipelineUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="oilPipelineUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilPipeline.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyPremiers" class="buyItem">Canadian Premiers</button>
						</td>
						<td class="oilStoren"><div id="oilPipelineUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="oilPipelineBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="logBoomUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="logBoomUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/logBoom.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyTugs" class="buyItem">Polite Tugboats</button>
						</td>
						<td class="lumberStoren"><div id="logBoomUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="logBoomBonusMult">x2</div></center></td>
					</tr>
					<tr id="oilRefineryUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="oilRefineryUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilRefinery.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyEnhancers" class="buyItem">Groundwater Enhancers</button>
						</td>
						<td class="oilStoren"><div id="oilRefineryUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="oilRefineryBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="clearCutterUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="clearCutterUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/clearCutter.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyPRFirms" class="buyItem">Truthful PR Firms</button>
						</td>
						<td class="lumberStoren"><div id="clearCutterUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="clearCutterBonusMult">x2</div></center></td>
					</tr>
					<tr id="oilTankerUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="oilTankerUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilTanker.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyPirates" class="buyItem">Pirate Slaves</button>
						</td>
						<td class="oilStoren"><div id="oilTankerUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="oilTankerBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="oldGrowthUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="oldGrowthUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oldGrowth.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyRepellent" class="buyItem">Hippie Repellent</button>
						</td>
						<td class="lumberStoren"><div id="oldGrowthUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="oldGrowthBonusMult">x2</div></center></td>
					</tr>
					<tr id="oilDictatorUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="oilDictatorUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/oilDictator.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buySunglasses" class="buyItem">Mirrored Sunglasses</button>
						</td>
						<td class="oilStoren"><div id="oilDictatorUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="oilDictatorBonusMult">x2</div></center></td>
					</tr>
					
					<tr id="stolenLandUpgradeRow" style="display:none;">
						<td class="lumberStoren"><div id="stolenLandUpgradeCount">0</div></td>
						<td class="lumberStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/stolen.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buySchools" class="buyItem">Residential Schools</button>
						</td>
						<td class="lumberStoren"><div id="stolenLandUpgradeCost">0</div></td>
						<td class="lumberStoren"><center><div id="stolenLandBonusMult">x2</div></center></td>
					</tr>
					<tr id="politicianUpgradeRow" style="display:none;">
						<td class="oilStoren"><div id="politicianUpgradeCount">0</div></td>
						<td class="oilStore">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/politician.png" style="float:left;">
							<img src="/web/20140402131208im_/http://choppin-wood.com/images/black.png" style="float:left;">
							<button type="button" id="buyVotingMachines" class="buyItem">Hacked Voting Machines</button>
						</td>
						<td class="oilStoren"><div id="politicianUpgradeCost">0</div></td>
						<td class="oilStoren"><center><div id="politicianBonusMult">x2</div></center></td>
					</tr>

					<tr><td class="infoHeader" colspan="4">FAQ</td></tr>
					<tr>
						<td class="infoRow" colspan="4">
							<ol>
								<li>Why can't I buy Lumberjacks or Oil Workers?<br><i>You only have $10. Chop some wood and pump some oil!</i></li><br>
								<li>The item buy buttons don't work!<br><i>Make the numbers turn black first.</i></li><br>
								<li>I can only buy Lumberjacks and Oil Workers? What?!<br><i>Save up some money or resources and maybe you will unlock more items.</i></li><br>
								<li>Why did you make this site?<br><i>The real question is: Why didn't I make this site earlier?</i></li><br>
								<li>When are you going to add upgrades?<br><i>Soon... ish.</i></li><br>
								<li>Should I click the "YOU WIN!" button?<br><i>The definition of winning really depends on what game you are playing.</i></li><br>
								<li>Why do you like cats so much?<br><i>They have bean toes.</i></li>
							</ol>
							<button type="button" class="myButton" id="reset">Reset Game</button><br>
						</td>
					</tr>
					<tr><td class="infoHeader" colspan="4">Contact</td></tr>
					<tr>
						<td class="infoRow" colspan="4">
							v0.18 (super alpha)<br><br>
							<script type="text/javascript" src="https://web.archive.org/web/20140402131208js_/https://apis.google.com/js/plusone.js"></script>
							<g:plusone></g:plusone><div class="fb-like" data-href="http://choppin-wood.com" data-width="The pixel width of the plugin" data-height="The pixel height of the plugin" data-colorscheme="light" data-layout="button_count" data-action="like" data-show-faces="false" data-send="false"></div>   
							<a href="//web.archive.org/web/20140402131208/http://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fchoppin-wood.com&amp;media=http%3A%2F%2Fchoppin-wood.com%2Fimages%2Flogo.png&amp;description=Chop%20some%20wood!" data-pin-do="buttonPin" data-pin-config="beside"><img src="//web.archive.org/web/20140402131208im_/http://assets.pinterest.com/images/pidgets/pin_it_button.png"/></a>
							<br><br><a href="https://web.archive.org/web/20140402131208/http://facebook.com/choppinwoodgame">Chop our facebook</a> <a href="https://web.archive.org/web/20140402131208/http://reddit.com/r/choppinwood">Pump our reddit</a><br>
							<br><a href="https://web.archive.org/web/20140402131208/https://twitter.com/choppinwoodgame" class="twitter-follow-button" data-show-count="false">Follow @choppinwoodgame</a>

							<br><br>
							Feel free to send us bitcoin: 1zZ1DXJZkmjt9WPBY3CweRJwJxm5aVqR2<br><br>
							Creator: <a href="https://web.archive.org/web/20140402131208/http://trevorbalkwill.com/">trevorbalkwill.com</a><br>
							Icons and planning: <a href="https://web.archive.org/web/20140402131208/http://www.facebook.com/Sethalexmit">Seth</a> <br>
							<br><br>Hosted on sweet VPS hosting: <a href="go/linode">Linode</a><br>
						</td>
					</tr>
				</table>
			</div>
			
			<div id="statsDiv">
				<table class="mainTables">
					<tr><td class="statHeader" colspan="2">Statistics</td></tr>
					<tr>
						<td class="statRow">($) + resources</td>
						<td class="statRow"><div id="totalResourcesDiv">0.000</div></td>
					</tr>
					<tr>
						<td class="lumberStore">Wood chopped</td>
						<td class="lumberStore"><div id="totalLumber">0.000</div></td>
					</tr>
					<tr>
						<td class="oilStore">Oil pumped</td>
						<td class="oilStore"><div id="totalOil">0.000</div></td>
					</tr>
					<tr>
						<td class="infoRow">Cash Spent ($)</td>
						<td class="infoRow"><div id="totalMoneySpentDiv">0.000</div></td>
					</tr>
					<tr>
						<td class="statRow">CO2 produced</td>
						<td class="statRow">1.215M tons</td>
					</tr>
					<tr>
						<td class="statRow">Global Temp</td>
						<td class="statRow">+1.101C</td>
					</tr>
					<tr>
						<td class="statRow">Species Extinct</td>
						<td class="statRow"><div id="speciesExtinctCount">2</div></td>
					</tr>
					<tr><td class="statRow" colspan="2"><div id="playedTime"></div></td></tr>
					<tr><td class="statHeader" colspan="2">SAVE THE PLANET</td></tr>
					<tr>
						<tr>
						<td class="statRow" colspan="2"><br><center><button type="button" class="myButton" id="mbaTip">Chop and pump MBA style</button></center><br>
							<br><center><button type="button" class="myButton" id="buyCarbonCredit">Buy Carbon Credits</button><br>$100m<br><br>
							<button type="button" class="myButton" id="winGame">YOU WIN!</button><br>$100t<br>
							<br><a href="https://web.archive.org/web/20160827031734/https://www.youtube.com/watch?v=ydmFYc9mMz4">Are you sure you want to win?</a></center><br>
						</td>
					</tr>
					
				</table>
			</div>
		</div>
	</body>
</html> 
<!--
     FILE ARCHIVED ON 13:12:08 Apr 02, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:25:45 Feb 06, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
-->
<!--
playback timings (ms):
  LoadShardBlock: 177.521 (3)
  esindex: 0.01
  captures_list: 196.084
  CDXLines.iter: 12.057 (3)
  PetaboxLoader3.datanode: 194.783 (4)
  exclusion.robots: 0.301
  exclusion.robots.policy: 0.285
  RedisCDXSource: 1.995
  PetaboxLoader3.resolve: 15.074
  load_resource: 42.928
-->