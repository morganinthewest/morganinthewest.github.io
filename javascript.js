var profType = [
'Alms Mendicant',
'Wealthy Tourist Pilgrim',
'Wandering Convert',
'Citysteader',
'Monastic Hopeful',
'Relic Seeker',
'Doomsday Sayer',
'Heretical Cultist',
'Anchorite',
'Temple Priest',
'Lore Teller',
'Skull Reader',
'Mystic Wanderer',
'Acolyte',
'Hieromonk',
'Fabric Cathedral Planner',
'Seer',
'Solar Standard Bearer',
'Clergy-at-Arms',
'Crowd Healer',
'Evangelizing Reveler',
'Folk-Hero Skald',
'Fame Seeker',
'Theo-Legal Scholar',
'Gallows Priest',
'Mamluk',
'City Sell Sword',
'Nomadic Sword for Hire',
'Many Banners Revolutionary',
'Noble House Hipparch',
'Street Gang Alley Fighter',
'Tactician',
'Field Medic',
'Mobile Blacksmith',
'Pilgrim Guard',
'Warrior of the Named Companies',
'Raider',
'Banner Ensign',
'Banker Hussar',
'Traveling Peddler',
'Guild Trader',
'Under City Kingpin',
'Main Street Shop Owner',
'Side Street Herbalist',
'Exotic Weapons Dealer',
'Curio Collector', 
'Grain Hauler',
'Young House Baron',
'Rival House Dueler',
'Laketown Dignitary',
'True House Vizier',
'Mercantile Socialite',
'Temple Architect',
'Painter',
'Tapestry Weaver',
'Fletcher',
'Smith',
'Mason',
'Potter',
'Tailor',
'Glass Blower',
'Boat Builder',
'Brewer',
'Armorer / Weaponsmith',
'Fur Trapper',
'Baker',
'Skilled Worker',
'Cut Purse',
'Street Corner Prophet',
'Messenger',
'Farmer',
'Forester',
'Great Lake Fisher',
'Porter',
'Shop Assistant',
'Rower',
'Beggar',
'Temple Grounds Keeper',
'Country Doctor',
'Local Conjurer',
'Seance Medium',
'Sorcerer in Hiding',
'Judge',
'Executioner',
'Bathhouse Attendant',
'Witch Diviner of Shirin',
'Prisoner',
'Inn Keeper',
'Poet',
'Looter',
'Grave Digger',
'Guild Thug',
'Fence',
'Astronomer',
'Gardner',
'Butler',
'Animal Handler',
'Tithe Collector',
'Land Surveyor',
'Guide',
'Ash-robed Priest',
'Resurrectionist',
'Champion Hunter',
'Saturnal Priestess',
'Battlefield Preacher',
'Sacred Foundry Attendant',
'Bellows Boy'
]

var prof = [
'Pilgrim',
'Seeker Pilgrim',
'Pilgrim of Guen Ana',
'Pilgrim of Bolaver',
'Mercenary',
'Merchant',
'Noble',
'Craftsperson',
'Citizen',
'Pilgrim of Hodh',
'Pilgrim of Youndeh',
'Pilgrim of Hadri'

]

{function newProfession() {
	var randomNumber = Math.floor(Math.random() * (profType.length));
	switch(true) {
		case randomNumber < 0:
			break;
		case randomNumber < 10:
			group = 0;
			break;
		case randomNumber < 17:
			group = 1;
			break;
		case randomNumber < 23:
			group = 2;
			break;
		case randomNumber < 25:
			group = 3;
			break;
		case randomNumber < 39:
			group = 4;
			break;
		case randomNumber < 47:
			group = 5;
			break;
		case  randomNumber < 52:
			group = 6;
			break;
		case randomNumber < 66:
			group = 7;
			break;
		case randomNumber < 101:
			group = 8;
			break;
		case randomNumber < 103:
			group = 9;
			break;
		case randomNumber < 104:
			group = 10;
			break;
		default: 
			group = 11;
			break;
	}

	document.getElementById('profTypeDisplay').innerHTML = prof[group] + ', ' + profType[randomNumber];


	
}}
