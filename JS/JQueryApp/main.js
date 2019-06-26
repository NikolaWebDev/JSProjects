var backgrounds = [
    "img/base1.jpg", 
    "img/base2.jpg", 
    "img/base3.jpg", 
    "img/base4.jpg"
];

$(".side-bar > a").siblings().hide();

$(".side-bar > a").click(function(){

   // console.log("It's working");
    $(this).siblings().toggle();

    $(this).toggleClass("open");

    $(".back1").css("background-image", "url( " + backgrounds[0] + ")");
    $(".back2").css("background-image", "url( " + backgrounds[1] + ")");
    $(".back3").css("background-image", "url( " + backgrounds[2] + ")");
    $(".back4").css("background-image", "url( " + backgrounds[3] + ")");

    if($(this).hasClass("open")){

        $(".side-bar").animate({

                width: "40%"
            }, 1000, function(){
                $(".side-bar > a").text("CLOSE");
        });

    } else{
        $(".side-bar").animate({

            width: "12%"
        }, 1000, function(){
            $(".side-bar > a").text("OPEN");
        });
    }
});


$(".newBackgrounds > div").click(function(){
    $(this).toggleClass("addBorder");
    $(this).siblings().removeClass("addBorder");
});


$("#updateBtn").click(function(){
    // console.log("Update Button is working")
    
    var jobTitle = $("#jobTitle").val();
    var jobTitleColor = $("#jobTitleColor").val();

    var newIntroText = $("#introText").val();
    var newIntroTextColor = $("#introTextColor").val();

    $(".container h1").text(jobTitle).val();
    $(".container h1").css("color", jobTitleColor).val();

    $(".container > p").text(newIntroText);
    $(".container > p").css("color", newIntroTextColor);

    if( $(".back1").hasClass("addBorder")){

        $("header").css("background-image", "url(" + backgrounds[0] + ")" );
    }
    else if( $(".back2").hasClass("addBorder")){

        $("header").css("background-image", "url(" + backgrounds[1] + ")" );
    }
    else if($(".back3").hasClass("addBorder")){
        $("header").css("background-image", "url(" + backgrounds[2] + ")" );
    }
    else if($(".back4").hasClass("addBorder")){
        $("header").css("background-image", "url(" + backgrounds[3] + ")" );
    }
});