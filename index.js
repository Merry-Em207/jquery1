$(document).ready(function () {
    $("#myCheck").on("click", function () {
      var checkbox = $("#myCheck");
      var button = $(".button");
      if (checkbox.is(":checked") == true) {
        button.prop("disabled", false);
      } else {
        button.prop("disabled", true);
      }
    });
    $("#good").on("click", function () {
      if ($(this).html() == "Good Morning") {
        $(this).html("Good Evening");
      } else {
        $(this).html("Good Morning");
      }
    });
    $(".up").on("click", function () {
      $("div .move").animate({ top: "-=50px" });
    });

    $(".down").on("click", function () {
      $("div .move").animate({ top: "+=50px" });
    });

    $(".left").on("click", function () {
      $("div .move").animate({ left: "-=50px" });
    });

    $(".right").on("click", function () {
      $("div .move").animate({ left: "+=50px" });
    });

    $(".number").on('keyup', function(){
        $(".number").val($(".number").val().replace(/[^0-9]/g, ''));
    })

    $(".animate").on('click', function(){
        $(".jquery").animate({width:"70%",opacity:"0.4",fontSize:"3em",marginLeft: "0.6in",borderWidth: "10px"},5000)
    })

    $(".remain").on('keyup', function(){
        $(".countChar").html(15 - $(this).val().length)
        $(".displayValue").html($(".remain").val())
      })
     
      $(".select").on('click', function(){
          $("#select").append("<option value='"+$(".remain").val()+"'>"+$(".remain").val()+"</option>")
      })
    
      $(".remove").on('click', function(){
        $('#select option[value="'+ $('#select').val() + '"]').remove() 
    })
    $(".alternate").on('click', function(){
        $(".alter").addClass("bg-warning text-dark").removeClass("bg-success")
    })
    $(".top").on('click', function(){
        $(window).scrollTop(0)
    })

   
    
  });