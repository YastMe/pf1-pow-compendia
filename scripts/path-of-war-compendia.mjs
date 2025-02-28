import { ManeuverBrowser } from "./compendiumBrowser/maneuver-browser.mjs"; './compendiumBrowser/maneuver-browser.mjs';

Hooks.on("renderCompendiumDirectory", async (app, html) => {
	var buttons = html[0].children[2];
	const button = document.createElement("button");
	button.type = "button";
	button.dataset.category = "maneuver";
	button.classList.add("compendium", "maneuver");
	button.innerText = game.i18n.localize("POW-Compendia.Browse")
	buttons.append(button);
	button.addEventListener("click", maneuverBrowser)
	if (buttons.children.length % 2 == 0)
		button.classList.add("colspan-2");
})

function maneuverBrowser(event)
{
	event.preventDefault();
	let type = event.target.dataset.category;
	if (type === undefined)
		type = "maneuver";
	pf1.applications.compendiums[type].render(true, { focus: true });
}

Hooks.on("renderActorSheet", (app, html, data) => {
	var controls = document.getElementsByClassName("attacks-maneuvers")[0].children[6];
	const searchManeuvers = document.createElement("a")
	searchManeuvers.classList.add("item-control", "item-search");
	searchManeuvers.innerHTML = '<i class="fas fa-folder-plus"></i> ';
	searchManeuvers.addEventListener("click", maneuverBrowser);
	controls.append(searchManeuvers);
});

Hooks.once("ready", () => {
	pf1.applications.compendiums.maneuver = new ManeuverBrowser();
	pf1.applications.compendiumBrowser.maneuver = ManeuverBrowser;
});