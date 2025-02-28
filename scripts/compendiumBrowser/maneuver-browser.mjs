const commonFilters = pf1.applications.compendiumBrowser.filters.common;

class ManeuverFilter extends pf1.applications.compendiumBrowser.filters.BaseFilter {
	static label = "POWCompendia.maneuvers";
	static type = "pf1-pow.maneuver"
}

export class ManeuverBrowser extends pf1.applications.compendiumBrowser.CompendiumBrowser {
	static documentName = "Item";
	static typeName = "pf1-pow.maneuvers";
	static filterClasses = [commonFilters.TagFilter, ManeuverFilter];
}