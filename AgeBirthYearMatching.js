// AgeBirthYearMatching.js

// For data quality check. Takes two values- (1) reported age and (2) reported birthyear, and calculates the descrepancies between the two. Researchers can decide on what their age descrepancy threshold is.

// put in a question on a separate page, after the age check


// HTML for the question
// Note, participants might not even see this if their internet is fast enough

<div>Please wait a moment...</div>

// JS for the quesiton

Qualtrics.SurveyEngine.addOnReady(function()
{
var Age = parseInt("${q://QID269/ChoiceTextEntryValue}"); //pull in age value
var BirthYear = parseInt("${q://QID289/ChoiceTextEntryValue}"); //pull in birth year
var CurrentYear = new Date().getFullYear(); //get today's year

// calculate current age by birth year
var CalcYear = CurrentYear - BirthYear;
var AgeDiff = CalcYear - Age;

Qualtrics.SurveyEngine.setEmbeddedData('CRS_AgeDiff', AgeDiff); //set CRS_AgeDiff embedded data as AgeDiff value
//add in skip & display logic with the AgeDiff value in whatever way you want

jQuery("#NextButton").hide();
jQuery("#NextButton").click();

});
