$(document).ready(function(){
      //alert("Hello!!");

    //$('.trippy').fadeOut(1000);
    //$('.trippy').fadeIn(2000);

    $(".text1").mouseenter(function(){
          $(this).css("background-color", "#F9E3F2");
      });
     $(".text1").mouseleave(function(){
            $(this).css("background", "none");
        });

        //alertbutton down hur//

        $(".alert").click(function(){
            alert("Thank you!!! Your order has been submitted.");
          });
          //datepicker//
              $( function() {
        $( "#datepicker" ).datepicker();
      } );

        ///checkbox radio//
          $( function() {
        $( "input" ).checkboxradio();
        } );

///dropdown//
        $( function() {
           $( "#speed" ).selectmenu();

           $( "#files" ).selectmenu();

           $( "#number" )
             .selectmenu()
             .selectmenu( "menuWidget" )
               .addClass( "overflow" );

           $( "#salutation" ).selectmenu();
         } );
            //slideshow//


});
