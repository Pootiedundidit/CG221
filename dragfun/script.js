$(document).ready(function(){
      //alert("Hello!!");
    $('h2').fadeOut(2000);
    $('h2').fadeIn(2000);


    $('.trippy').fadeOut(1000);
    $('.trippy').fadeIn(2000);

    $(".text1").mouseenter(function(){
          $(this).css("background-color", "#F9E3F2");
      });
     $(".text1").mouseleave(function(){
            $(this).css("background", "none");
        });

        $( function() {
      $( ".draggable" ).draggable();
    } );


    $( "#img" ).click(function() {
      alert( "Handler for .click() called." );
    });


});
