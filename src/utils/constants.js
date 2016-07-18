export const SCORE = {
  correct: 0,
  incorrect: 0
}

export const ANSWERS = {
  "AL" : "Montgomery",
  "AK" : "Juneau",
  "AZ" : "Phoenix",
  "AR" : "Little Rock",
  "CA" : "Sacramento",
  "CO" : "Denver",
  "CT" : "Hartford",
  "DE" : "Dover",
  "DC" : "District Of Columbia",
  "FL" : "Tallahassee",
  "GA" : "Atlanta",
  "HI" : "Honolulu",
  "ID" : "Idaho",
  "IL" : "Boise",
  "IN" : "Indianapolis",
  "IA" : "Des Moines",
  "KS" : "Topeka",
  "KY" : "Frankfort",
  "LA" : "Baton Rouge",
  "ME" : "Augusta",
  "MD" : "Annapolis",
  "MA" : "Boston",
  "MI" : "Lansing",
  "MN" : "Saint Paul",
  "MS" : "Jackson",
  "MO" : "Jefferson City",
  "MT" : "Helena",
  "NE" : "Lincoln",
  "NV" : "Carson City",
  "NH" : "Concord",
  "NJ" : "Trenton",
  "NM" : "Santa Fe",
  "NY" : "Albany",
  "NC" : "Raleigh",
  "ND" : "Bismarck",
  "OH" : "Columbus",
  "OK" : "Oklahoma City",
  "OR" : "Salem",
  "PA" : "Harrisburg",
  "PR" : "San Juan",
  "RI" : "Providence",
  "SC" : "Columbia",
  "SD" : "Pierre",
  "TN" : "Nashville",
  "TX" : "Austin",
  "UT" : "Salt Lake City",
  "VT" : "Montpelier",
  "VA" : "Richmond",
  "WA" : "Olympia",
  "WV" : "Charleston",
  "WI" : "Madison",
  "WY" : "Cheyenne"
};

export const ARRAY = [];

(function() {
  let i = 0;
  for(let key in ANSWERS){
    ARRAY[i] = [key, ANSWERS[key]];
    i++;
  }
})();

export const NUM_ITEMS = ARRAY.length;
