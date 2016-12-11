

$(document).ready(function()
{
    $("#firstName1").focusin(function()
    {
        $(this).css("background-color","#cccccc");
    });
    	 $("#firstName1").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
    $("#lastName1").focusin(function()
    {
        $(this).css("background-color","#cccccc");
    });
    	 $("#lastName1").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
    $("#phoneNumber1").focusin(function()
    {
        $(this).css("background-color","#cccccc");
    });
    	 $("#phoneNumber1").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
     $("#emailAddress1").focusin(function()
    {
        $(this).css("background-color","#cccccc");
    });
    	 $("#emailAddress1").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
      $("#questionAndComment1s").focusin(function()
    {
        $(this).css("background-color","#cccccc");
    });
    	 $("#questionAndComments1").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
    
    



});


////////////number 6//the slide for the picture of the dog
$(document).ready(function() 
{
	$("#formFiller").click(function() {
	    $("#theForm").slideToggle("slow");
	        $("#sendButton").show();
	});
   
    
});





$(document).ready(function() {
    $("#atSymbol").click(function() {
        var move=$("#emailText");
        move.show();
    
        move.animate({right:'100px'},"slow");
        move.animate({fontSize:'2em'},"slow");
        
        
    });
});


$(document).ready(function() {
    $("#sendButton").click(function() {
       
        alert("Your info has been sent to Sergio Ochoa.");
        
    });
});

$(document).ready(function() 
{
	$("#objectiveText").click(function() {
	    $("#objectiveTextShow").slideToggle("slow");
	       
	});
   
    
});

$(document).ready(function() 
{
	$("#educationText").click(function() {
	    $("#educationTextShow").slideToggle("slow");
	     $("#educationTextShow2").slideToggle("slow");
	       
	});
   
    
});

$(document).ready(function() 
{
	$("#SkillsText").click(function() {
	    $("#SkillsTextShow").slideToggle("slow");
	       
	});
   
    
});

$(document).ready(function() 
{
	$("#workHistoryText").click(function() {
	    $("#workHistoryTextShow").slideToggle("slow");
	     $("#workHistoryTextShow2").slideToggle("slow");
	       $("#workHistoryTextShow3").slideToggle("slow");
	       
	});
   
    
});

$(document).ready(function() 
{
	$("#workHistoryTextShow").click(function() {
	    $("#moreDetailsText").slideToggle("slow");
	       
	});
   
    
});

$(document).ready(function() 
{
	$("#moreDetailsText").click(function() {
	    $("#moreDetailsTextShow").slideToggle("slow");
	       
	});
   
    
});



$(document).ready(function() 
{
	$("#workHistoryTextShow2").click(function() {
	    $("#moreDetailsText2").slideToggle("slow");
	       
	});
   
    
});

$(document).ready(function() 
{
	$("#moreDetailsText2").click(function() {
	    $("#moreDetailsTextShow2").slideToggle("slow");
	       
	});
   
    
});


$(document).ready(function() 
{
	$("#workHistoryTextShow3").click(function() {
	    $("#moreDetailsText3").slideToggle("slow");
	       
	});
   
    
});

$(document).ready(function() 
{
	$("#moreDetailsText3").click(function() {
	    $("#moreDetailsTextShow3").slideToggle("slow");
	       
	});
   
    
});




