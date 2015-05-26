$(document).ready(function() {
	//Make nav Ancors Buttons
	//var $button = $(".nav").find("a");
	//$button.addClass("button-css");
	//$button.button();
	var $buttonHome = $(".nav-home").find("a");
	var $buttonRec = $(".nav-recordings").find("a");
	var $buttonPlug = $(".nav-plugins").find("a");
	var $buttonOther = $(".nav-other").find("a");

	$buttonHome.addClass("button-css");
	$buttonHome.button();

	$buttonRec.addClass("button-css");
	$buttonRec.button();

	$buttonPlug.addClass("button-css");
	$buttonPlug.button();

	$buttonOther.addClass("button-css-other");
	$buttonOther.button();

	//show hide explination of recordings
	function getInfoText(songName) {
		//note: === is the text in the h2 element for a specific piece
		if(songName === "What Happened") {
			return "This piece is an electo-acoustic expariment";		
		} else if (songName === "Electro Acoustic Sounds") {
			return "This piece is on of the first atempts I ever made to do electonic music." +
				"It was composed as an extra project for my Midi for Music Educators class" +
				"in 2003. It was created by laywering sound samples from various audio recordings."
		}
		else {
			return "No info given";
		}
	}
	$(".whathappened-textarea").hide();
	$("button").on("mouseover", function(event) {
		event.preventDefault();
		event.stopPropagation();
  			$(".whathappened-textarea").show();
			//$(".whathappened-textarea").text(getInfoText($(this).closest("li").find("h2").text()));
			$.ajax('/py/helloJson.py', {
				//url: "http://192.168.1.9:8080",
       			//type: "POST",
				//data: { information : "You have a very nice website, sir." },
				dataType: "json",
				success: function(response){
					var msg = $('<p></p>');
					msg.append("Got it");
					msg.append(" " + response.return);
					//$(".test").html(msg);
					$(".whathappened-textarea").text(msg.text());

				},
				error: function(request, errorType, errorMessage){
					var msg = $('<p></p>');
					msg.append("Could not get information about this piece");
					$(".whathappened-textarea").text(msg.text());
				},
				timeout: 1000
			});
			}).on("mouseleave", function(event) {
				event.preventDefault();
				event.stopPropagation();
				$(".whathappened-textarea").hide();
	});

	
});
