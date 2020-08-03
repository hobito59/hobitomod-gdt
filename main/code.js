// ******************************************************************************************
// Mod Name: HobitoMod_English
// Mod Id: HobitoMod_English_Hobito59
// Mod Version: 1.0.0
// Mod File: code.js
// ******************************************************************************************
// Author: Hobito59
// Last modified: 8/3/2020 4:40 PM
// ******************************************************************************************
// Notes: This file is loaded from main.js
// ******************************************************************************************

// Create the main mod object (our package)
var HobitoMod_English = {};

(function(){

// ******************************************************************************************
// Researches: Engines
// ******************************************************************************************

// Adding Support for cloud gaming
// -----------------------------------------------------------
UltimateLib.Research.addEngineResearch({
	id: "5f50c503-1b1a-47f6-bff3-a03831a28f50",
	name: "Support for cloud gaming",
	canResearch: function () {
							var res = true;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 12
	});

// Adding Engine with adaptive operation
// -----------------------------------------------------------
UltimateLib.Research.addEngineResearch({
	id: "8b8a60d0-1202-4513-a08c-a2281f13ef3e",
	name: "Engine with adaptive operation",
	canResearch: function () {
							var res = true;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 14
	});


// ******************************************************************************************
// Researches: Lab
// ******************************************************************************************

// Adding Cloud Gaming
// -----------------------------------------------------------
UltimateLib.Research.addRndResearch({
	id: "d1bf7538-ea35-46cb-af17-94acce9ebe11",
	name: "Cloud Gaming",
	pointsCost: 1200,
	iconUri: HobitoMod_English_Hobito59.modPath + "",
	description: "The evolution of the Internet and its speeds has led to the creation of cloud gaming. Players play our games from our servers without having the required hardware.",
	canResearch: function () {
							var res = true;
							res =   GameManager.company.isLaterOrEqualThan(23, 9, 1);
							res &= GameManager.company.flags.rndLabUnlocked;

						return res;
				},
	repeatable: false,
	targetZone: 2,
	complete: function () {
			
			var research =  Research.getAllItems().filter(function (f) { return f.id === 'd1bf7538-ea35-46cb-af17-94acce9ebe11';  });
			if(research){
				GameManager.company.researchCompleted.push(research);
				// Notification
				var notification = new Notification({
	header: "Cloud Gaming",
	text: "We're done. All that's left is to get the servers ready.",
	image: HobitoMod_English_Hobito59.modPath + "",
	buttonText: "OK",
	weeksUntilFired: 0
	});
GameManager.company.notifications.push(notification);

				// Actions
				
			}
			else {
				var notification = new Notification({
					header: "UME Error",
					text: "An error occurred on lab research complete callback.",
					image: "",
					buttonText: "OK",
					weeksUntilFired: 0
				});
				GameManager.company.notifications.push(notification);
			}
			
}

	});

// Adding Engine with adaptive operation
// -----------------------------------------------------------
UltimateLib.Research.addRndResearch({
	id: "c952257a-4355-4b26-be59-f2ab639e7e6d",
	name: "Engine with adaptive operation",
	pointsCost: 1200,
	iconUri: HobitoMod_English_Hobito59.modPath + "",
	description: "An adaptive running engine will allow us to gain in terms of development when we bring our games on less powerful platforms such as Swap.",
	canResearch: function () {
							var res = true;
							res =   GameManager.company.isLaterOrEqualThan(23, 8, 4);
							res &= GameManager.company.flags.rndLabUnlocked;

						return res;
				},
	repeatable: false,
	targetZone: 2,
	complete: function () {
			
			var research =  Research.getAllItems().filter(function (f) { return f.id === 'c952257a-4355-4b26-be59-f2ab639e7e6d';  });
			if(research){
				GameManager.company.researchCompleted.push(research);
				// Notification
				var notification = new Notification({
	header: "R&D",
	text: "Boss, we've finished our adaptive engine function. It will allow us to gain in terms of development when we bring our games to less powerful platforms such as Swap.",
	image: HobitoMod_English_Hobito59.modPath + "",
	buttonText: "Good !",
	weeksUntilFired: 0
	});
GameManager.company.notifications.push(notification);

				// Actions
				
			}
			else {
				var notification = new Notification({
					header: "UME Error",
					text: "An error occurred on lab research complete callback.",
					image: "",
					buttonText: "OK",
					weeksUntilFired: 0
				});
				GameManager.company.notifications.push(notification);
			}
			
}

	});


// ******************************************************************************************
// Researches: Hardware
// ******************************************************************************************

// Adding Cloud gaming servers
// -----------------------------------------------------------
UltimateLib.Research.addHardwareResearch({
	id: "569e6369-0f95-4b56-9613-9facca782690",
	name: "Cloud gaming servers",
	pointsCost: 1500,
	iconUri: HobitoMod_English_Hobito59.modPath + "",
	description: "Servers with the latest technology are important for our service.",
	canResearch: function () {
							var res = true;

						return res;
				},
	repeatable: false,
	targetZone: 0,
	complete: function () {
			
			var research =  Research.getAllItems().filter(function (f) { return f.id === '569e6369-0f95-4b56-9613-9facca782690';  });
			if(research){
				GameManager.company.researchCompleted.push(research);
				// Notification
				var notification = new Notification({
	header: "Cloud Gaming",
	text: "We're done. All that's left is to get the servers ready.",
	image: HobitoMod_English_Hobito59.modPath + "",
	buttonText: "OK",
	weeksUntilFired: 0
	});
GameManager.company.notifications.push(notification);

				// Actions
				
			}
			else {
				var notification = new Notification({
					header: "UME Error",
					text: "An error occurred on lab research complete callback.",
					image: "",
					buttonText: "OK",
					weeksUntilFired: 0
				});
				GameManager.company.notifications.push(notification);
			}
			
}

	});


// ******************************************************************************************
// Platforms
// ******************************************************************************************

// Adding Gameflux
// -----------------------------------------------------------
GDT.addPlatform({
	id:"bc359a1b-f469-4162-a426-5dc46ec6e483",
	name:"Gameflux",
	company:"HobiWare.",
	startAmount:1,
	unitsSold:5E1,
	licencePrize:1E6,
	published:"24/8/4",
	platformRetireDate:"99/9/1",
	developmentCosts:5E5,
	genreWeightings:[  1, 1, 1, 1, 1, 0.9 ],
	audienceWeightings:[  1, 0.9, 1 ],
	techLevel:7,
	iconUri: HobitoMod_English_Hobito59.modPath + "/images/platforms/gameflux-logo.png",
	events:[{
	id: "68dd3a9d-8e28-424b-a325-a3b2da591c30",
	date: "23/8/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Annonce",
	text: "HobiWare, d\u00E9veloppeur de jeu vid\u00E9o annonce aussi son service nomm\u00E9, GameFlux dans le but de concurencer les consoles. Un abonnement qui devrait fournir un catalogue de jeux vid\u00E9o en plus de l'acc\u00E9s au service. Il devrait \u00EAtre disponible l'an prochain.",
	image: HobitoMod_English_Hobito59.modPath + "/images/notifications/gameflux-logo.png",
	buttonText: "OK",
	weeksUntilFired: 0
	});} 
	}
]
	});


// ******************************************************************************************
// Events
// ******************************************************************************************

GDT.addEvent({
	id: "49c35d1f-b05d-407f-b359-550a2d0c0ee8",
	date: "1/1/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Infomation",
	text: "Merci d'avoir t\u00E9l\u00E9charg\u00E9 et install\u00E9 HobitoMod sur votre jeu. C'est la premi\u00E8re fois que je fais un mod pour Game Dev Tycoon. N'h\u00E9sitez pas \u00E0 me contacter sur Twitter (@Hobito59) pour vos suggestions ou autre chose.",
	image: HobitoMod_English_Hobito59.modPath + "",
	buttonText: "De rien.",
	weeksUntilFired: 0
	});} 
	});

GDT.addEvent({
	id: "e927212d-53f1-407c-aea4-17f365ab76de",
	date: "23/9/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Cloud Gaming",
	text: "Afin de contrecarrer HobiWare, Mirconoft annonce aussi mCloud, un service de Cloud gaming. Mirconoft a ajout\u00E9 \\\"Nous avions de l'exp\u00E9rience en mati\u00E8re de cloud et de jeux vid\u00E9o. Nous savons de quoi nous parlons\\\". Il serait inclus avec le mBox Game Pass qui donne acc\u00E8s aussi \u00E0 un catalogue de jeux.\\nVonny a aussi son service,  Playsystem Now mais celui-ci reste discret.",
	image: HobitoMod_English_Hobito59.modPath + "/images/notifications/mBox One.png",
	buttonText: "A vous de jouer !",
	weeksUntilFired: 0
	});} 
	});



})();
