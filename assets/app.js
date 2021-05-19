(function () {
	"use strict";

	// Add Scripts Here

})();

/**
 * Toggle the dropdown menu in mobile view
 */
function toggleMenu() {
	"use strict";
	const dropDownElement = document.getElementById("drop-down-menu-list");
	if (dropDownElement.style.display == "block") {
		dropDownElement.style.display = "none";
		document.getElementById("menu-collapse-btn").classList.add("hidden");
		document.getElementById("menu-expand-btn").classList.remove("hidden");
	} else {
		dropDownElement.style.display = "block";
		document.getElementById("menu-collapse-btn").classList.remove("hidden");
		document.getElementById("menu-expand-btn").classList.add("hidden");
	}
}

/*
* Toggle the display for details tab
*/
function toggleDetailsTab() {
	"use strict";
	const resultSection = document.getElementById("result-row");
	if (resultSection.style.display == "block") {
		resultSection.style.display = "none";
		document.getElementById("email-collapse-btn").classList.add("hidden");
		document.getElementById("email-expand-btn").classList.remove("hidden");
	} else {
		resultSection.style.display = "block";
		document.getElementById("email-collapse-btn").classList.remove("hidden");
		document.getElementById("email-expand-btn").classList.add("hidden");
	}
}