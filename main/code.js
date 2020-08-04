// ******************************************************************************************
// Mod Name: HobitoMod
// Mod Id: HobitoMod_Hobito59
// Mod Version: 1.1.0
// Mod File: code.js
// ******************************************************************************************
// Author: Hobito59
// Last modified: 8/4/2020 4:41 PM
// ******************************************************************************************
// Notes: This file is loaded from main.js
// ******************************************************************************************

// Create the main mod object (our package)
var HobitoMod = {};

(function(){

// ******************************************************************************************
// Researches: Engines
// ******************************************************************************************

// Adding Support pour cloud gaming
// -----------------------------------------------------------
UltimateLib.Research.addEngineResearch({
	id: "419a98fb-318c-47dd-856e-62cfa5a8ea8c",
	name: "Support pour cloud gaming",
	canResearch: function () {
							var res = true;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 12
	});

// Adding Moteur à fonctionnement adaptatif
// -----------------------------------------------------------
UltimateLib.Research.addEngineResearch({
	id: "8b8a60d0-1202-4513-a08c-a2281f13ef3e",
	name: "Moteur \u00E0 fonctionnement adaptatif",
	canResearch: function () {
							var res = true;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 14
	});

// Adding Support RealGear
// -----------------------------------------------------------
UltimateLib.Research.addEngineResearch({
	id: "416b4949-e0d0-41b2-a32a-967ab1b2a2d6",
	name: "Support RealGear",
	canResearch: function () {
							var res = true;
							res =   GameManager.company.isLaterOrEqualThan(30, 3, 1);

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
	iconUri: HobitoMod_Hobito59.modPath + "",
	description: "L'\u00E9volution d'Internet et de ses d\u00E9bits ont permis de cr\u00E9er le cloud gaming. Les joueurs joue \u00E0 nos jeux depuis nos serveurs sans qu'ils ont le mat\u00E9riel requis.",
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
	text: "Afin de contrecarrer HobiWare, Mirconoft annonce aussi mCloud, un service de Cloud gaming. Mirconoft a ajout\u00E9 \\\"Nous avions de l'exp\u00E9rience en mati\u00E8re de cloud et de jeux vid\u00E9o. Nous savons de quoi nous parlons\\\". Il serait inclus avec le mBox Game Pass qui donne acc\u00E8s aussi \u00E0 un catalogue de jeux.\\nVonny a aussi son service,  Playsystem Now mais celui-ci reste discret.",
	image: HobitoMod_Hobito59.modPath + "/images/notifications/mBox One.png",
	buttonText: "A vous de jouer !",
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

// Adding Moteur à fonctionnement adaptatif
// -----------------------------------------------------------
UltimateLib.Research.addRndResearch({
	id: "c952257a-4355-4b26-be59-f2ab639e7e6d",
	name: "Moteur \u00E0 fonctionnement adaptatif",
	pointsCost: 1200,
	iconUri: HobitoMod_Hobito59.modPath + "",
	description: "Un moteur fonctionnement adaptatif permettra de gagner en terme de d\u00E9veloppement lorsque nous porterons nos jeux sur des plateformes moins puissants telle que la Swap.",
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
	text: "Patron, on pourrait ajouter une fonction de un moteur \u00E0 fonctionnement adaptatif. Il nous permettra de gagner en terme de d\u00E9veloppement lorsque nous porterons nos jeux sur des plateformes moins puissants telle que la Swap.",
	image: HobitoMod_Hobito59.modPath + "",
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
// Researches: Hardware
// ******************************************************************************************

// Adding Serveurs pour le cloud gaming
// -----------------------------------------------------------
UltimateLib.Research.addHardwareResearch({
	id: "569e6369-0f95-4b56-9613-9facca782690",
	name: "Serveurs pour le cloud gaming",
	pointsCost: 1500,
	iconUri: HobitoMod_Hobito59.modPath + "",
	description: "Des serveurs avec les dernières technologies sont importants pour notre service.",
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
	text: "Nous avons fini. Reste plus que pr\u00E9parer les serveurs.",
	image: HobitoMod_Hobito59.modPath + "",
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
	unitsSold:3E1,
	licencePrize:5E5,
	published:"24/8/4",
	platformRetireDate:"99/9/1",
	developmentCosts:1E5,
	genreWeightings:[  1, 1, 1, 1, 1, 0.9 ],
	audienceWeightings:[  1, 0.9, 1 ],
	techLevel:7,
	iconUri: HobitoMod_Hobito59.modPath + "/images/platforms/gameflux-logo.png",
	events:[{
	id: "68dd3a9d-8e28-424b-a325-a3b2da591c30",
	date: "23/8/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Annonce",
	text: "HobiWare, d\u00E9veloppeur de jeu vid\u00E9o annonce aussi son service nomm\u00E9, GameFlux dans le but de concurencer les consoles. Un abonnement qui devrait fournir un catalogue de jeux vid\u00E9o en plus de l'acc\u00E9s au service. Il devrait \u00EAtre disponible l'an prochain.",
	image: HobitoMod_Hobito59.modPath + "/images/notifications/gameflux-logo.png",
	buttonText: "OK",
	weeksUntilFired: 0
	});} 
	}
]
	});

// Adding RealGear
// -----------------------------------------------------------
GDT.addPlatform({
	id:"ef59ca92-863e-4a47-a50c-a602052d388b",
	name:"RealGear",
	company:"Artlus",
	startAmount:1,
	unitsSold:1E2,
	licencePrize:1E7,
	published:"31/1/1",
	platformRetireDate:"999/9/1",
	developmentCosts:1E6,
	genreWeightings:[  1, 1, 1, 1, 1, 1 ],
	audienceWeightings:[  0.8, 1, 1 ],
	techLevel:7,
	iconUri: HobitoMod_Hobito59.modPath + "/images/platforms/RealGear.png",
	events:[{
	id: "3fbd5ad4-5c36-4624-9255-16d832ee35ce",
	date: "30/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Annonce",
	text: "Une entreprise sorti de nulle part qui se nomme Artlus pr\u00E9sente le RealGear, un petit appareil \u00E0 peine sur le cot\u00E9 du front et qui plonge l'utilisateur dans un \u00E9tat permettant de ressentir avec ses 5 sens dans le jeu. Il devrait sortir dans 1 an, le temps que les d\u00E9veloppeurs mettre \u00E0 jour leur moteur.",
	image: HobitoMod_Hobito59.modPath + "/images/notifications/RealGear.png",
	buttonText: "Black Mirror ou SAO ? Telle est la question.",
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
	image: HobitoMod_Hobito59.modPath + "",
	buttonText: "De rien.",
	weeksUntilFired: 0
	});} 
	});

GDT.addEvent({
	id: "7a427f6a-9a25-4313-93b6-ea2d1489f1f2",
	date: "999/9/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "999/9/1",
	text: "Mon horloge indique 999/9/1. ATTENDS !? TA JOUE PENDANT TOUT CE TEMPS !? O\u00F9-tu as hack le jeu... aussi...\\nPourquoi cette date ? Car c'est la date que j'ai mis pour mes consoles soit retir\u00E9 du march\u00E9.\\nJe pense que personne verra ce message.",
	image: HobitoMod_Hobito59.modPath + "",
	buttonText: "hold my beer",
	weeksUntilFired: 0
	});} 
	});



})();
