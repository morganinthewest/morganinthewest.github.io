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
'Guide'
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
'Citizen'
]

{function newProfession() {
	var randomNumber = Math.floor(Math.random() * (profType.length));
	switch(true) {
		case randomNumber < 0:
			break;
		case randomNumber < 10:
			flavor = 0;
			break;
		case randomNumber < 17:
			flavor = 1;
			break;
		case randomNumber < 23:
			flavor = 2;
			break;
		case 23:
		case 24:
			flavor = 3;
			break;
		case randomNumber < 39:
			flavor = 4;
			break;
		case randomNumber < 47:
			flavor = 5;
			break;
		case  randomNumber < 52:
			flavor = 6;
			break;
		case randomNumber < 66:
			flavor = 7;
			break;
		default: 
			flavor = 8;
			break;
	}

	document.getElementById('profTypeDisplay').innerHTML = prof[flavor] + ', ' + profType[randomNumber];


	
}}
