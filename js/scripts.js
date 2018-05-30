$(function(){
  $("#form").submit(function(event){
    var name =$("input#enterName").val();

    $(".input").text(name);
    $(".story").show();
    event.preventDefault();
  });
});
