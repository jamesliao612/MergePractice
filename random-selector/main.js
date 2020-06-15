// window.onload = function(){
//     this.document.write("HI JS ~");
// };
$(document).ready(function(){
    $("input").click(function(){
        //alert("DONE");
        let length = $("#choices li").length;
        let random = Math.floor(Math.random()*length);
        $("#random-result").text($("#choices li").eq(random).text());
        $(".food_img").attr("src", images[random] );
    });
});