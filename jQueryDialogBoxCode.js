/* ############################################################
## jQuery Dialog Box Code
## Example use case : https://umn.qualtrics.com/jfe/form/SV_2rFfUwQShKEAyih
## Code created by: Abbey Hammell
## Date: Fall 2019
##
############################################################ */



/* ############################################################
## Setting Up your Survey
##
## Note: The code in this section can be used universally for
## any survey; no changes necssary for use in a new survey
############################################################ */

//add the following to EXTERNAL CSS (you can either put color here or in the code itself; here is easier if it is all the same color)
<style type="text/css">
.tip {
text-decoration: none;
cursor: help; //can change cursor
color: blue; //can change color
}
</style>


// Add to HEADING OF YOUR SURVEY; this pulls in the dialog box library; this may need updates depending on when you end up using it (last updated Fall 2019)
<link href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" rel="stylesheet" />
<script src="//code.jquery.com/jquery-1.12.4.js"></script>
<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
  jQuery("[id*='dialog']" ).dialog({ autoOpen: false});
  jQuery('body').on('click','.ui-widget-overlay',function(){ jQuery("[id*='dialog']").dialog('close'); });
</script>
// This is the same as the code above, but it is not formatted
<link href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" rel="stylesheet" /><script src="//code.jquery.com/jquery-1.12.4.js"></script><script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script><script>jQuery("[id*='dialog']" ).dialog({ autoOpen: false});jQuery('body').on('click','.ui-widget-overlay',function(){ jQuery("[id*='dialog']").dialog('close'); });</script>
//Add the following JS code to YOUR FIRST QUESTION
//This code will tell participants if they should update their browser/use a different browser

Qualtrics.SurveyEngine.addOnload(function()
{
	    if (window.jQuery) {
    } else {
        // jQuery is not loaded message
		alert("WARNING: This survey relies on jQuery, and we noted that your browser did not have jQuery successfully"
			 +" loaded. Please be sure you are using the most recently version of your browser for optimal experience.");
    }

});
/* ############################################################
## Adding jQuery Dialog Boxes (w/ Hover Text too)
##
## Note: You can find an example of some of these questions the following survey on Qualtrics:
############################################################ */
// Health Care Components Question ################################
//#####################
//add in HTML View of question
//be sure to delete these and other comments when you add this into Qualtrics
//class "tip" creates a hover text
//text (NOT in the title) here is what will show up in the question description when you actually preview the survey
<span>Do you or anyone of your project/study team work in a unit within the </span>
<span class="tip" id="hcc" style="color:#3399FF" title="The healthcare components (HCC) refer to the parts of the University that access or work with Protected Health Information (PHI) and therefore are regulated under HIPAA. This includes the University's health plans, its health care provider services, and those that may access PHI to support the plans or health care provider services. The Health Information and Privacy office provides a list of units (see link) that are included in HCC. Areas outside of the University's health care components may also be subject to HIPAA if they act as a 'business associate' of an organization that is subject to HIPAA. For questions or more information, please contact privacy@umn.edu.">
  <span style="color:#3399FF;">Health Care Components</span> //add text that you want to be "hoverable and clickable" here
</span>
<span>?</span>
//text here will not show up unless the text you specified aboved is clicked; this is the text that will be in the dialog box
//this text still needs to be placed in the HTML view of the question
<span id="HCCdialog" title="About HCCs">The Health Care Components (HCC) refer to the parts of the University that access or work with Protected Health Information (PHI) and therefore are regulated under HIPAA. This includes the University's health plans, its health care provider services, and those that may access PHI to support the plans or health care provider services. The Health Information and Privacy office provides a <a href="https://www.healthprivacy.umn.edu/about" target="_blank" style="color:#0000ff">list&nbsp;of&nbsp;units</a> that are included in HCC. Areas outside of the University's health care components may also be subject to HIPAA if they act as a 'business associate' of an organization that is subject to HIPAA. For questions or more information, please contact privacy@umn.edu.
</span>
//Add the following to your JS for your question, under Qualtrics.SurveyEngine.addOnload()
//this code will open up the dialog box that contains the text that you specified directly above
jQuery( "#hcc" ).click(function() {
  jQuery("#HCCdialog").dialog( "option", "modal", true );
  jQuery("#HCCdialog").dialog( "open" );
  });

}// PCI Response ################################
//#####################
//add in HTML of question (DO NOT USE THIS CODE CHUNK IN THE RESPONSE-- see code chunk below)
<span>Payment Card Industry Data (</span>
  <span class="tip" id="pci1" style="color:#3399FF" title="The Payment Card Industry (PCI) data security standard applies to the storage, processing, and transmittance of credit card information. Individuals or organizations that handle credit card data are subject to these standards. See the University Policy on handling PCI data.">
    <span style="color:#3399FF;">PCI</span>
  </span>
<span>; credit card information)</span>
//create dialog box
<span id="PCIdialog" title="About PCI">TThe Payment Card Industry (PCI) data security standard applies to the storage, processing, and transmittance of credit card information. Individuals or organizations that handle credit card data are subject to these standards. See the <a href="https://policy.umn.edu/finance/paymentcards" target="_blank" style="color:#0000ff">University&nbsp;Policy</a> on handling PCI data.</span>
// JS
jQuery( "#pci1" ).click(function() {
  jQuery("#PCIdialog").dialog( "option", "modal", true );
  jQuery("#PCIdialog").dialog( "open" );
  if (Qualtrics.SurveyEngine.registry[questionID].getChoiceValue(2) == true){
  			Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(2, false );
  		} else {
  			Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(2, true );}
  });
//when you have your HTML in a response instead of in the question itself, the code needs to be condensed, otherwise Qualtrics will be dumb and automatically create extra responses for each link break you have in your code (not to be confused with HTML <br>)
<span>Payment Card Industry Data (</span><span class="tip" id="pci1" style="color:#3399FF" title="The Payment Card Industry (PCI) data security standard applies to the storage, processing, and transmittance of credit card information. Individuals or organizations that handle credit card data are subject to these standards. See the University Policy on handling PCI data."><span style="color:#3399FF;">PCI</span></span><span>; credit card information)</span><span id="PCIdialog" title="About PCI">TThe Payment Card Industry (PCI) data security standard applies to the storage, processing, and transmittance of credit card information. Individuals or organizations that handle credit card data are subject to these standards. See the <a href="https://policy.umn.edu/finance/paymentcards" target="_blank" style="color:#0000ff">University&nbsp;Policy</a> on handling PCI data.</span>


}// GLBA/Financial Response ################################
//#####################
//add in HTML of question (DO NOT USE THIS CODE CHUNK IN THE RESPONSE-- see code chunk below)
<span>Financial information (such as </span>
  <span class="tip" id="glba1" style="color:#3399FF" title="The Gramm-Leach-Bliley Act, or the Financial Modernization Act of 1999, applies to institutions that hold financial information, such as student loan and finance data. The GLBA requires institutions to communicate how they protect and share non-public personal information from financial customers and to store this information in a specific way. For consultation on working with GLBA data, please contact the Controller's office at controller@umn.edu.">
    <span style="color:#3399FF;">GLBA</span>
  </span>
<span> or financial aid)</span>
//create dialog box
<span id="GLBAdialog" title="About GLBA">The Gramm-Leach-Bliley Act, or the Financial Modernization Act of 1999, applies to institutions that hold financial information, such as student loan and finance data. The GLBA requires institutions to communicate how they protect and share non-public personal information from financial customers and to store this information in a specific way. For consultation on working with GLBA data, please contact the Controller's office at controller@umn.edu.</span>
//when you have your HTML in a response instead of in the question itself, the code needs to be condensed, otherwise Qualtrics will be dumb and automatically create extra responses for each link break you have in your code (not to be confused with HTML <br>)
<span>Financial information (such as </span><span class="tip" id="glba1" style="color:#3399FF" title="The Gramm-Leach-Bliley Act, or the Financial Modernization Act of 1999, applies to institutions that hold financial information, such as student loan and finance data. The GLBA requires institutions to communicate how they protect and share non-public personal information from financial customers and to store this information in a specific way. For consultation on working with GLBA data, please contact the Controller's office at controller@umn.edu."><span style="color:#3399FF;">GLBA</span></span><span> or financial aid)</span><span id="GLBAdialog" title="About GLBA">The Gramm-Leach-Bliley Act, or the Financial Modernization Act of 1999, applies to institutions that hold financial information, such as student loan and finance data. The GLBA requires institutions to communicate how they protect and share non-public personal information from financial customers and to store this information in a specific way. For consultation on working with GLBA data, please contact the Controller's office at controller@umn.edu.</span>
//add into JS
//the additional code (if/else statements) makes it so that the text that triggers the dialog box does not select/deselect the response option
var questionID = this.questionId;

jQuery( "#glba1" ).click(function() {
jQuery("#GLBAdialog").dialog( "option", "modal", true );
jQuery("#GLBAdialog").dialog( "open" );
if (Qualtrics.SurveyEngine.registry[questionID].getChoiceValue(3) == true){
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(3, false );
  } else {
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(3, true );}
});
// Government data response ################################
//#####################
//add in HTML of question
<span>Government data subject to the </span>
//ITAR/Export Control
<span class="tip" id="cc1d" style="color:#3399FF" title="The International Traffic in Arms Regulations (ITAR) covers technology, goods, and services that are listed on as defense or space related on the United States Munitions List (USML). Examples include encryption technology, biological or chemical toxins, space technology and satellites, and military or defense articles or services. For more information on ITAR data, please contact security@umn.edu.">
  <span style="color:#3399FF;">ITAR/Export Control</span>
</span>
<span>, </span>
//CUI
<span class="tip" id="cc1e" style="color:#3399FF" title="Controlled Unclassified Information (CUI) refers to government data that requires safeguarding and dissemination controls. Examples include chemical-terrorism vulnerability information, defense information, information about victims of human trafficking, internal intelligence data, nuclear data, and government security operations data. For more information on CUI data, please contact security@umn.edu.">
  <span style="color:#3399FF;">CUI</span>
</span>
<span>, or </span>
//FISMA
<span class="tip" id="cc1f" style="color:#3399FF" title="FISMA is applicable to data owned by the federal government, and requires data to be stored in compliance with specific security standards and remain on US soil. Typically, FISMA requirements of data are called out in the Request for Proposals (RFP) or in language within a contract or grant.">
  <span style="color:#3399FF;">FISMA</span>
</span>
//add in dialog boxes
<span id="ITARdialog" title="About ITAR/Export Control">The International Traffic in Arms Regulations (ITAR) covers technology, goods, and services that are listed on as defense or space related on the United States Munitions List (USML). Examples include encryption technology, biological or chemical toxins, space technology and satellites, and military or defense articles or services. For more information on ITAR data, please contact security@umn.edu.</span>
<span id="CUIdialog" title="About CUI">Controlled Unclassified Information (CUI) refers to government data that requires safeguarding and dissemination controls. Examples include chemical-terrorism vulnerability information, defense information, information about victims of human trafficking, internal intelligence data, nuclear data, and government security operations data. For more information on CUI data, please contact security@umn.edu.</span>
<span id="FISMAdialog" title="About FISMA">FISMA is applicable to data owned by the federal government, and requires data to be stored in compliance with specific security standards and remain on US soil. Typically, FISMA requirements of data are called out in the Request for Proposals (RFP) or in language within a contract or grant.</span>
//suppressed Government stuff to one line for Qualtrics responses

<span>Government data subject to the </span><span class="tip" id="cc1d" style="color:#3399FF" title="The International Traffic in Arms Regulations (ITAR) covers technology, goods, and services that are listed on as defense or space related on the United States Munitions List (USML). Examples include encryption technology, biological or chemical toxins, space technology and satellites, and military or defense articles or services. For more information on ITAR data, please contact security@umn.edu."><span style="color:#3399FF;">ITAR/Export Control</span></span><span>, </span><span class="tip" id="cc1e" style="color:#3399FF" title="Controlled Unclassified Information (CUI) refers to government data that requires safeguarding and dissemination controls. Examples include chemical-terrorism vulnerability information, defense information, information about victims of human trafficking, internal intelligence data, nuclear data, and government security operations data. For more information on CUI data, please contact security@umn.edu."><span style="color:#3399FF;">CUI</span></span><span>, or </span><span class="tip" id="cc1f" style="color:#3399FF" title="FISMA is applicable to data owned by the federal government, and requires data to be stored in compliance with specific security standards and remain on US soil. Typically, FISMA requirements of data are called out in the Request for Proposals (RFP) or in language within a contract or grant."><span style="color:#3399FF;">FISMA</span></span><span id="ITARdialog" title="About ITAR/Export Control">The International Traffic in Arms Regulations (ITAR) covers technology, goods, and services that are listed on as defense or space related on the United States Munitions List (USML). Examples include encryption technology, biological or chemical toxins, space technology and satellites, and military or defense articles or services. For more information on ITAR data, please contact security@umn.edu.</span><span id="CUIdialog" title="About CUI">Controlled Unclassified Information (CUI) refers to government data that requires safeguarding and dissemination controls. Examples include chemical-terrorism vulnerability information, defense information, information about victims of human trafficking, internal intelligence data, nuclear data, and government security operations data. For more information on CUI data, please contact security@umn.edu.</span><span id="FISMAdialog" title="About FISMA">FISMA is applicable to data owned by the federal government, and requires data to be stored in compliance with specific security standards and remain on US soil. Typically, FISMA requirements of data are called out in the Request for Proposals (RFP) or in language within a contract or grant.</span>
//add into JS
var questionID = this.questionId;

jQuery( "#cc1d" ).click(function() {
jQuery("#ITARdialog").dialog( "option", "modal", true );
jQuery("#ITARdialog").dialog( "open" );
if (Qualtrics.SurveyEngine.registry[questionID].getChoiceValue(1) == true){
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(1, false );
  } else {
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(1, true );}
});

jQuery( "#cc1e" ).click(function() {
jQuery("#CUIdialog").dialog( "option", "modal", true );
jQuery("#CUIdialog").dialog( "open" );
if (Qualtrics.SurveyEngine.registry[questionID].getChoiceValue(1) == true){
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(1, false );
  } else {
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(1, true );}
});

jQuery( "#cc1f" ).click(function() {
jQuery("#FISMAdialog").dialog( "option", "modal", true );
jQuery("#FISMAdialog").dialog( "open" );
if (Qualtrics.SurveyEngine.registry[questionID].getChoiceValue(1) == true){
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(1, false );
  } else {
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(1, true );}
});
// FERPA response ################################
//#####################
//add in HTML of question
<span>Student information subject to</span>
<span class="tip" id="cc2a" style="color:#3399FF" title="The Family Educational Rights and Privacy Act (FERPA) protects the privacy of student educational records. Examples of student information protected by FERPA include: grades, courses taken, schedule, test scores, advising records, educational services received, disciplinary actions, social security number, student ID number. Note: Directory information about a student is not regulated under FERPA, unless their information has been suppressed.">
  <span style="color:#3399FF;"> FERPA</span>
</span>
<span id="FERPAdialog" title="About FERPA">The Family Educational Rights and Privacy Act (FERPA) protects the privacy of student educational records. Examples of student information protected by FERPA include:
<br>
  <ul>
    <li>Grades</li>
    <li>Courses taken</li>
    <li>Schedule</li>
    <li>Test scores</li>
    <li>Advising records</li>
    <li>Educational services received</li>
    <li>Disciplinary actions</li>
    <li>Social security number</li>
    <li>Student ID number</li>
  </ul>
<br>Note: <a href="https://www.asr.umn.edu/training-and-support/ferpa-resources" target="_blank" style="color:#0000ff">Directory&nbsp;Information</a> about a student in not regulated under FERPA, unless their information has been suppressed.</span>
//suppressed FERPA to one line for qualtrics responses
<span>Student information subject to</span><span class="tip" id="cc2a" style="color:#3399FF" title="The Family Educational Rights and Privacy Act (FERPA) protects the privacy of student educational records. Examples of student information protected by FERPA include: grades, courses taken, schedule, test scores, advising records, educational services received, disciplinary actions, social security number, student ID number. Note: Directory information about a student is not regulated under FERPA."><span style="color:#3399FF;"> FERPA</span></span><span id="FERPAdialog" title="About FERPA">The Family Educational Rights and Privacy Act (FERPA) protects the privacy of student educational records. Examples of student information protected by FERPA include:<br><ul><li>Grades</li><li>Courses taken</li><li>Schedule</li><li>Test scores</li><li>Advising records</li><li>Educational services received</li><li>Disciplinary actions</li><li>Social security number</li><li>Student ID number</li></ul><br>Note: <a href="https://www.asr.umn.edu/training-and-support/ferpa-resources" target="_blank" style="color:#0000ff">Directory&nbsp;Information</a> about a student in not regulated under FERPA, unless their information has been suppressed.</span>
//add into JS
jQuery( "#cc2a" ).click(function() {
jQuery("#FERPAdialog").dialog( "option", "modal", true );
jQuery("#FERPAdialog").dialog( "open" );
if (Qualtrics.SurveyEngine.registry[questionID].getChoiceValue(2) == true){
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(2, false );
  } else {
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(2, true );}
});
// HIPAA privacry rule response ################################
//#####################
//add in HTML of question
<span>Protected Health Information under the </span>
<span class="tip" id="cc3" style="color:#0000ff" title="Whether data are considered Protected Health Information (PHI) under HIPAA depends on 1) who collected/holds the data and 2) what the data contain. 1) Who: HIPAA covers data that has been collected or is held by a healthcare provider, a health plan, or a health clearing house (&quot;covered entities&quot;) or by someone with a contract with one of these entities to hold the data (&quot;business associate&quot;). 2) What: The data also must contain individually identifiable health data, which is information, including demographic information, that relates to: A) the individual’s past, present, or future physical or mental health or condition, B) the provision of health care to the individual, or C) the past, present, or future payment for the provision of health care to the individual. Information needs to meet both of these conditions to be considered PHI. For questions about whether data falls under HIPAA at the University, please contact the privacy office at privacy@umn.edu.">
<span style="color:#0000ff;">HIPAA Privacy Rule</span>
//dialog box information
<span id="HIPAAdialog" title="About HIPAA">Whether data are considered Protected Health Information (PHI) under HIPAA depends on <b>1) who collected/holds the data</b> and <b>2) what the data contain.</b>
<br>
  <ol>
    <li><b>Who</b><br>HIPAA covers data that has been collected or is held by a healthcare provider, a health plan, or a health clearing house ("covered entities") or by someone with a contract with one of these entities to hold the data ("business associate").<br><br></li>
    <li><b>What</b><br>The data also must contain individually identifiable health data, which is information, including demographic information, that relates to:
      <ul>
        <li>The individual’s past, present, or future physical or mental health or condition,</li>
        <li>The provision of health care to the individual, or</li>
        <li>The past, present, or future payment for the provision of health care to the individual.</li>
        </ul>
    </li>
  </ol> Information needs to meet both of these conditions to be considered PHI. For questions about whether data falls under HIPAA at the University, please contact the privacy office at privacy@umn.edu.
</span>


<span>Protected Health Information under the </span>
<span class="tip" id="cc3a" style="color:#0000ff" title="Whether data are considered Protected Health Information (PHI) under HIPAA depends on 1) who collected/holds the data and 2) what the data contain. 1) Who: HIPAA covers data that has been collected or is held by a healthcare provider, a health plan, or a health clearing house (&quot;covered entities&quot;) or by someone with a contract with one of these entities to hold the data (&quot;business associate&quot;). 2) What: The data also must contain individually identifiable health data, which is information, including demographic information, that relates to: A) the individual’s past, present, or future physical or mental health or condition, B) the provision of health care to the individual, or C) the past, present, or future payment for the provision of health care to the individual. Information needs to meet both of these conditions to be considered PHI. For questions about whether data falls under HIPAA at the University, please contact the privacy office at privacy@umn.edu.">
  <span style="color:#3399FF;">HIPAA Privacy Rule</span>

<span id="HIPAAdialog" title="About HIPAA">Whether data are considered Protected Health Information (PHI) under HIPAA depends on <b>1) who collected / holds the data</b> and <b>2) what the data contain.</b>
<br>
  <ol>
    <li><b>Who</b><br>HIPAA covers data that has been collected or is held by a healthcare provider, a health plan, or a health clearing house ("covered entities") or by someone with a contract with one of these entities to hold the data ("business associate").<br><br></li>
    <li><b>What</b><br>The data also must contain individually identifiable health data, which is information, including demographic information, that relates to:
      <ul>
        <li>The individual’s past, present, or future physical or mental health or condition,</li>
        <li>The provision of health care to the individual, or</li>
        <li>The past, present, or future payment for the provision of health care to the individual.</li>
      </ul>
    </li>
  </ol> Information needs to meet both of these conditions to be considered PHI. For questions about whether data falls under HIPAA at the University, please contact the privacy office at privacy@umn.edu.</span>
//suppressed to one line for Qualtrics
<span>Protected Health Information under the </span><span class="tip" id="cc3a" style="color:#0000ff" title="Whether data are considered Protected Health Information (PHI) under HIPAA depends on 1) who collected/holds the data and 2) what the data contain. 1) Who: HIPAA covers data that has been collected or is held by a healthcare provider, a health plan, or a health clearing house (&quot;covered entities&quot;) or by someone with a contract with one of these entities to hold the data (&quot;business associate&quot;). 2) What: The data also must contain individually identifiable health data, which is information, including demographic information, that relates to: A) the individual’s past, present, or future physical or mental health or condition, B) the provision of health care to the individual, or C) the past, present, or future payment for the provision of health care to the individual. Information needs to meet both of these conditions to be considered PHI. For questions about whether data falls under HIPAA at the University, please contact the privacy office at privacy@umn.edu."><span style="color:#3399FF;">HIPAA Privacy Rule</span><span id="HIPAAdialog" title="About HIPAA">Whether data are considered Protected Health Information (PHI) under HIPAA depends on <b>1) who collected / holds the data</b> and <b>2) what the data contain.</b><br><ol><li><b>Who</b><br>HIPAA covers data that has been collected or is held by a healthcare provider, a health plan, or a health clearing house ("covered entities") or by someone with a contract with one of these entities to hold the data ("business associate").<br><br></li><li><b>What</b><br>The data also must contain individually identifiable health data, which is information, including demographic information, that relates to:<ul><li>The individual’s past, present, or future physical or mental health or condition,</li><li>The provision of health care to the individual, or</li><li>The past, present, or future payment for the provision of health care to the individual.</li></ul></li></ol> Information needs to meet both of these conditions to be considered PHI. For questions about whether data falls under HIPAA at the University, please contact the privacy office at privacy@umn.edu.</span>
//add into JS
jQuery( "#cc3a" ).click(function() {
jQuery("#HIPAAdialog").dialog( "option", "modal", true );
jQuery("#HIPAAdialog").dialog( "open" );
if (Qualtrics.SurveyEngine.registry[questionID].getChoiceValue(3) == true){
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(3, false );
  } else {
    Qualtrics.SurveyEngine.registry[questionID].setChoiceValue(3, true );}
});
// Data Use Agreement ################################
//#####################
//add in HTML of question
<span>Are your data owned by a source external to your group or associated with a </span>
<span class="tip" id="dua" style="color:#3399FF" title="Data Use Agreements (DUA; sometimes called data non-disclosure agreements or material transfer agreements) are contractual documents associated with data received by an external source, such as a repository, institution, or company. DUAs dictate how data can be used by the recipient and often provide specific security requirements for storing the data. For more information about DUAs, please contact University Information Security at security@umn.edu.">
  <span style="color:#3399FF;">Data Use Agreement</span>
</span>
<span>?</span>
//create dialog box
<span id="DUAdialog" title="About Data Use Agreements">Data Use Agreements (DUA; sometimes called data non-disclosure agreements or material transfer agreements) are contractual documents associated with data received by an external source, such as a repository, institution, or company. DUAs dictate how data can be used by the recipient and often provide specific security requirements for storing the data. For more information about DUAs, please contact University Information Security at security@umn.edu.
</span>
//JS

jQuery( "#dua" ).click(function() {
  jQuery("#DUAdialog").dialog( "option", "modal", true );
  jQuery("#DUAdialog").dialog( "open" );

  });



}//Human Subjects ################################
//#####################
//add in HTML of question
<span>Do the data contain information about </span>
  <span class="tip" id="humsub" style="color:#3399FF" title="Any information gathered from or about people. This is a broader definition than used by the Department of Health and Human Services (DHHS) or the Food and Drug Administration (FDA) for the purposes of Institutional Review Board (IRB) regulation.">
    <span style="color:#3399FF;">Human Subjects</span>
  </span>
<span>?</span>
//add dialog box
<span id="HUMSUBdialog" title="About Human Subjects">Any information gathered from or about people. This is a broader definition than used by the Department of Health and Human Services (DHHS) or the Food and Drug Administration (FDA) for the purposes of Institutional Review Board (IRB) regulation.</span>
//JS
  jQuery( "#humsub" ).click(function() {
    jQuery("#HUMSUBdialog").dialog( "option", "modal", true );
    jQuery("#HUMSUBdialog").dialog( "open" );
    });


}//Sensitive Information ################################
//#####################
// add in HTML of question
<span>Do the data contain </span>
<span class="tip" id="si" style="color:#3399FF" title="This includes any information that may cause harm, legal jeopardy, or reputational damage to the participant, institution, or subject of the data if disclosed. Such data may or may not be legally protected. Examples include: criminal or illegal behaviors, such as drug use; mental health information; sexual behaviors; food supply information; disease status; and information about minors or other vulnerable populations.">
  <span style="color:#3399FF;">sensitive information </span>
</span>
<span>or information that could cause harm to the individual or institution?</span>
// add dialog box
<span id="SIdialog" title="About Sensitive Information">This includes any information that may cause harm, legal jeopardy, or reputational damage to the participant, institution, or subject of the data if disclosed. Such data may or may not be legally protected. Examples include: criminal or illegal behaviors, such as drug use; mental health information; sexual behaviors; food supply information; disease status; and information about minors or other vulnerable populations.</span>
//JS
jQuery( "#si" ).click(function() {
  jQuery("#SIdialog").dialog( "option", "modal", true );
  jQuery("#SIdialog").dialog( "open" );
  });
