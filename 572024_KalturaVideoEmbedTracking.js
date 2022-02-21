/////////////////////////////////////////////////////////////////////////
// Code for Kaltura Video Embedding & Tracking for Project 572024
// By: Abbey Hammell
// Date: Feb 2022
// Description: Embed a video hosted on Kaltura using the kWidget API, and use
// the kWidget API to track video behavior to help ensure research data quality.
/////////////////////////////////////////////////////////////////////////


/////////////
// ADD HTML/CSS TO THE QUESTION UNDER "HTML View"
//////////////

//make the question container reactive for this page
<style>
.Skin #SkinContent {
    width: 100%;
    max-width: 100%;
}

#Questions
{
width: 100%;
max-width: 1920px;
margin: auto
}
</style>

// set up video box

<div style="text-align: center;"><br></div>

<div style="text-align: center;">&nbsp;<strong style="font-size: 42px;">DLD Video</strong></div>
&nbsp;

<center>
<div style="width: 100%; height: auto; display: inline-block;position: relative;">
 <div id="dummy" style="margin-top: 56.25%;"></div>
 <div id="myEmbedTarget" style="position:absolute;top:0;left:0;left: 0;right: 0;bottom:0;border:solid thin black;">
 </div>
</div>
<center>

// add in kWidget; specific IDs are kept out for privacy, and replaced with XXXXXX
// http://player.kaltura.com/docs/api
<script src="https://cdnapisec.kaltura.com/p/XXXXXX/sp/XXXXXX00/embedIframeJs/uiconf_id/XXXXXXXX/partner_id/XXXXXX"></script>


/////////////
// ADD THE FOLLOWING JS TO THE JAVASCRIPT SECTION OF THE QUESTION
//////////////

Qualtrics.SurveyEngine.addOnload(function()
{

// embed the video using kWidget
	kWidget.embed({
		'targetId': 'myEmbedTarget',
		'wid': '', //kept out for kept out for privacy
		'uiconf_id' : '', //kept out for kept out for privacy
		'entry_id' : '', //kept out for kept out for privacy
		'flashvars':{ // flashvars allows you to set runtime uiVar configuration overrides.
			'autoPlay': false
		},
		'params':{ // params allows you to set flash embed params such as wmode, allowFullScreen etc
			'wmode': 'transparent'
		}
	});

// add video behavior/play time Tracking
// note that this requires embedded data in Qualtrics with the names "watch.start", "watch.25", "watch.50", "watch.75", and "watch.100" in order to track video behavior

kWidget.addReadyCallback(function(){
	console.log("kWidget Ready");
	var kdp = document.getElementById("myEmbedTarget");
	kdp.kBind('firstPlay', function(){ // when the video is first played, event listener
		var dend = new Date();
		Qualtrics.SurveyEngine.setEmbeddedData('watch.start', dend.getTime());
		kdp.kUnBind('firstPlay');
		});
	kdp.kBind('firstQuartile', function(){ // when the first quartile is hit, event listener
			var dend = new Date(); // get the current time
			Qualtrics.SurveyEngine.setEmbeddedData('watch.25', dend.getTime()); //set the current time in embed 5
		    kdp.kUnBind('firstQuartile');
		});
	kdp.kBind('secondQuartile', function(){ // when the first quartile is hit, event listener
			var dend = new Date(); // get the current time
			Qualtrics.SurveyEngine.setEmbeddedData('watch.50', dend.getTime()); //set the current time in embed 5
      kdp.kUnBind('secondQuartile');
		});
	kdp.kBind('thirdQuartile', function(){ // when the first quartile is hit, event listener
			var dend = new Date(); // get the current time
			Qualtrics.SurveyEngine.setEmbeddedData('watch.75', dend.getTime()); //set the current time in embed 5
      kdp.kUnBind('thirdQuartile');
		});
	kdp.kBind('playerPlayEnd', function(){ // when the first quartile is hit, event listener
			var dend = new Date(); // get the current time
			Qualtrics.SurveyEngine.setEmbeddedData('watch.100', dend.getTime()); //set the current time in embed 5
      kdp.kUnBind('playerPlayEnd');
		});
});



});


});
