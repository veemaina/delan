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
$(".button").click(function () {
    var name = document.getElementById('mce-Email').Value
    alert('Hey' + "thank you for contacting us.We will get back to you")
})

