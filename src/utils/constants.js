export const SCORE = {
  correct: 0,
  incorrect: 0
}

window.INITIAL_QUESTION_BEING_RENDERED = true;

export const ANSWERS = {
  "Alabama" : "Montgomery",
  "Alaska" : "Juneau",
  "Arizona" : "Phoenix",
  "Arkansas" : "Little Rock",
  "California" : "Sacramento",
  "Colorado" : "Denver",
  "Connecticut" : "Hartford",
  "Delaware" : "Dover",
  "Washington D.C." : "District Of Columbia",
  "Florida" : "Tallahassee",
  "Georgia" : "Atlanta",
  "Hawaii" : "Honolulu",
  "Idaho" : "Idaho",
  "Illinois" : "Boise",
  "Indiana" : "Indianapolis",
  "Iowa" : "Des Moines",
  "Kansas" : "Topeka",
  "Kentucky" : "Frankfort",
  "Louisiana" : "Baton Rouge",
  "Maine" : "Augusta",
  "Maryland" : "Annapolis",
  "Massachusetts" : "Boston",
  "Michigan" : "Lansing",
  "Minnesota" : "Saint Paul",
  "Mississippi" : "Jackson",
  "Missouri" : "Jefferson City",
  "Montana" : "Helena",
  "Nebraska" : "Lincoln",
  "Nevada" : "Carson City",
  "New Hampshire" : "Concord",
  "New Jersey" : "Trenton",
  "New Mexico" : "Santa Fe",
  "New York" : "Albany",
  "North Carolina" : "Raleigh",
  "North Dakota" : "Bismarck",
  "Ohio" : "Columbus",
  "Oklahoma" : "Oklahoma City",
  "Oregon" : "Salem",
  "Pennsylvania" : "Harrisburg",
  "Puerto Rico" : "San Juan",
  "Rhode Island" : "Providence",
  "South Carolina" : "Columbia",
  "South Dakota" : "Pierre",
  "Tennessee" : "Nashville",
  "Texas" : "Austin",
  "Utah" : "Salt Lake City",
  "Vermont" : "Montpelier",
  "Virginia" : "Richmond",
  "Washington" : "Olympia",
  "West Virginia" : "Charleston",
  "Wisconsin" : "Madison",
  "Wyoming" : "Cheyenne"
};

export const ARRAY = [];

export const SHOWNSTATES = [];

(function() {
  let i = 0;
  for(let key in ANSWERS){
    ARRAY[i] = [key, ANSWERS[key]];
    i++;
  }
})();
