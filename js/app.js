function myFunction(){document.getElementById("demo").innerHTML=x+=1}function onScroll(t){var o=$("#intro_all").scrollTop();$(".bullet_point_vertical li").each(function(){var t=$("#intro_"+$(this).attr("id")),l="intro_"+$(this).attr("id"),n=document.getElementById(l).offsetTop;n-454<=o&&n-454+t.height()>o?$(this).css("color","red"):$(this).css("color","black")})}var x=0;$(document).ready(function(){$(".bullet_point_vertical li").click(function(){$(".bullet_point_vertical li").css("color","black"),$(this).css("color","red");var t="intro_"+$(this).attr("id"),o=document.getElementById(t).offsetTop;console.log(o-454),$(".intro_all").animate({scrollTop:o-454})})}),$(".p-b-100").on("scroll",onScroll);