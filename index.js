$(document).ready(() =>{
    	$(".paragraph1").hide();
        $(".paragraph2").hide();
        $(".paragraph3").hide();
        $(".paragraph4").hide();

    $(".component1").hover(()=>{
    	$(".row1").css("background-color","Grey");
        $(".component1").css("text-decoration", "underline");
    },function(){
    	$(".row1").css("background-color","LightGrey");
        $(".component1").css("text-decoration", "none");
    });
    $(".component1").click(()=>{
        $(".paragraph2").hide();
        $(".paragraph3").hide();
        $(".paragraph4").hide();                    	
        $(".paragraph1").toggle();
    });

    $(".component2").hover(()=>{
    	$(".row2").css("background-color","Grey");
        $(".component2").css("text-decoration", "underline");
    },function(){
    	$(".row2").css("background-color","LightGrey");
        $(".component2").css("text-decoration", "none");
    });
    $(".component2").click(()=>{
    	$(".paragraph3").hide();
        $(".paragraph4").hide();
        $(".paragraph1").hide();
        $(".paragraph2").toggle();
    });

    $(".component3").hover(()=>{
    	$(".row3").css("background-color","Grey");
        $(".component3").css("text-decoration", "underline");
    },function(){
    	$(".row3").css("background-color","LightGrey");
        $(".component3").css("text-decoration", "none");
    });
    $(".component3").click(()=>{
    	$(".paragraph4").hide();
        $(".paragraph1").hide();
        $(".paragraph2").hide();
        $(".paragraph3").toggle();
    });



    $(".component4").hover(()=>{
    	$(".row4").css("background-color","Grey");
        $(".component4").css("text-decoration", "underline");
    },function(){
    	$(".row4").css("background-color","LightGrey");
        $(".component4").css("text-decoration", "none");
    });
    $(".component4").click(()=>{
    	$(".paragraph1").hide();
        $(".paragraph2").hide();
        $(".paragraph3").hide();
        $(".paragraph4").toggle();
    });



});