 
$("button").click(function(){
    var name = $(".ball").val();
    var age=$(".cap").val();
    var money=$(".job").val();
    var answer=age*money;
    $(".cat").html("Good luck  "+answer);
});

