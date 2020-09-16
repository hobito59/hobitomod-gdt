// ******************************************************************************************
// Mod Name: HobitoMod
// Mod Id: HobitoMod_Hobito59
// Mod Version: 1.2.0
// Mod File: main.js
// ******************************************************************************************
// Author: Hobito59
// Last modified: 9/16/2020 5:34 PM
// ******************************************************************************************
// Notes: This file is defined in package.json and loaded as the first file from GDT
// ******************************************************************************************

// Setup a global mod object
var HobitoMod_Hobito59   = { modPath: '', data: {} };

(function(){
	// Acquire relative path to the mod
	HobitoMod_Hobito59.modPath = GDT.getRelativePath();

	// Callback executed after succesful load
	var ready = function () {
	};

// Callack executed if error(s) occured during load
	var error = function () {
	};

	// Load relevant files
	GDT.loadJs(['main/code_before.js', 'main/code.js', 'main/code_after.js'], ready, error);

})();
