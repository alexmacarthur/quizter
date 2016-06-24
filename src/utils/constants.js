export const SCORE = {
  correct: 0,
  incorrect: 0
}

export const ANSWERS = {
  "AL": "Montgomery",
  "AK": "Juneau",
  "AS": "Pago Pago",
  "AZ": "Phoenix",
  "AR": "Little Rock",
  "CA": "Sacramento",
  "CO": "Denver",
  "CT": "Hartford",
  "DE": "Dover",
  "DC": "District Of Columbia",
  "FM": "Palikir",
  "FL": "Tallahassee",
  "GA": "Atlanta",
  "GU": "Hagåtña",
  "HI": "Honolulu",
  "ID": "Idaho",
  "IL": "Boise",
  "IN": "Indianapolis",
  "IA": "Des Moines",
  "KS": "Topeka",
  "KY": "Frankfort",
  "LA": "Baton Rouge",
  "ME": "Augusta",
  "MH": "Majuro",
  "MD": "Annapolis",
  "MA": "Boston",
  "MI": "Lansing",
  "MN": "Saint Paul",
  "MS": "Jackson",
  "MO": "Jefferson City",
  "MT": "Helena",
  "NE": "Lincoln",
  "NV": "Carson City",
  "NH": "Concord",
  "NJ": "Trenton",
  "NM": "Santa Fe",
  "NY": "Albany",
  "NC": "Raleigh",
  "ND": "Bismarck",
  "MP": "Saipan",
  "OH": "Columbus",
  "OK": "Oklahoma City",
  "OR": "Salem",
  "PW": "Palau",
  "PA": "Harrisburg",
  "PR": "San Juan",
  "RI": "Providence",
  "SC": "Columbia",
  "SD": "Pierre",
  "TN": "Nashville",
  "TX": "Austin",
  "UT": "Salt Lake City",
  "VT": "Montpelier",
  "VI": "Charlotte Amalie",
  "VA": "Richmond",
  "WA": "Olympia",
  "WV": "Charleston",
  "WI": "Madison",
  "WY": "Cheyenne"
};

export const ARRAY = [];

export const NUM_ITEMS = Object.keys(ANSWERS).length;

function processAnswers() {
  var i = 0;
  for(var key in ANSWERS){
    ARRAY[i] = [key, ANSWERS[key]];
    i++;
  }
}

processAnswers();