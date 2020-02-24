$(document).ready(function () {
    $("#vee").click(function () {
        $(this).hide();
        $(".web").show();
    });
    $('.web').click(function () {
        $(this).hide();
        $("#vee").show()
    });
      $("#acra").click(function(){
        $(this).hide();
        $(".dev").show();
    })
    $('.dev').click(function(){
        $(this).hide();
        $("#acra").show()
    });
   $("#sonia") .click(function () {
       $(this).hide();
       $(".pro").show();
   })
   $('.pro').click(function(){
       $(this).hide();
       $("#sonia").show()
   })
})

