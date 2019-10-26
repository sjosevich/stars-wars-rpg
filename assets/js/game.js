
$(document).ready(function(){
    



/* Global Variables  
===========================================================================*/

var myimgId;
$("#card5, #card6, #card7, #card8").hide();
var min = 90;
var max = 150;
var minAttacPower = 1;
var maxAttackPower = 9;    
var initNumber;   
var character= {}    


/* Functions  and methods
===========================================================================*/  

   $(".image").on("click", function(){
       myimgId= $(this).attr("id");
       //myimgId = myimgId.match(/\d/g);
       console.log(myimgId);
      
       if (myimgId === "myImage1"){
           $("#card2, #card3, #card4").hide();
           
           var img = $('#myImage5');
           img.attr("src", "./assets/images/luke-skywalker.jpg");
           $("#myImage5").html(img)
           
           
           var img = $('#myImage6');
           img.attr("src", "./assets/images/darth-sidious.jpg");
           $("#myImage6").html(img)
           
           var img = $('#myImage7');
           img.attr("src", "./assets/images/darth-maul.jpg");
           $("#myImage7").html(img)
           
           var selectName = $("#name2").text();
           $("#name5").html(selectName);
           var selectText = $("#points2").text();
           $("#points5").html(selectText);
           
           var selectName = $("#name3").text();
           $("#name6").html(selectName);
           var selectText = $("#points3").text();
           $("#points6").html(selectText);
           
           var selectName = $("#name4").text();
           $("#name7").html(selectName);
           var selectText = $("#points4").text();
           $("#points7").html(selectText);
           
           
           $("#card5, #card6, #card7").show();
           
       }
       if (myimgId === "myImage2"){
           $("#card1, #card3, #card4").hide();
           var img = $('#myImage5');
           img.attr("src", "./assets/images/obi-wan.jpg");
           $("#myImage5").html(img)
           
           var img = $('#myImage6');
           img.attr("src", "./assets/images/darth-sidious.jpg");
           $("#myImage6").html(img)
           
           var img = $('#myImage7');
           img.attr("src", "./assets/images/darth-maul.jpg");
           $("#myImage7").html(img)
           
           
           var selectName = $("#name1").text();
           $("#name5").html(selectName);
           var selectText = $("#points1").text();
           $("#points5").html(selectText);
           
           var selectName = $("#name3").text();
           $("#name6").html(selectName);
           var selectText = $("#points3").text();
           $("#points6").html(selectText);
           
           var selectName = $("#name4").text();
           $("#name7").html(selectName);
           var selectText = $("#points4").text();
           $("#points7").html(selectText);
           
           $("#card5, #card6, #card7").show();
           
       }
       
       if (myimgId === "myImage3"){
           $("#card1, #card2, #card4").hide();
           var img = $('#myImage5');
           img.attr("src", "./assets/images/luke-skywalker.jpg");
           $("#myImage5").html(img)
           
           var img = $('#myImage6');
           img.attr("src", "./assets/images/obi-wan.jpg");
           $("#myImage6").html(img)
           
           var img = $('#myImage7');
           img.attr("src", "./assets/images/darth-maul.jpg");
           $("#myImage7").html(img)
           
           var selectName = $("#name1").text();
           $("#name5").html(selectName);
           var selectText = $("#points1").text();
           $("#points5").html(selectText);
           
           var selectName = $("#name2").text();
           $("#name6").html(selectName);
           var selectText = $("#points2").text();
           $("#points6").html(selectText);
           
           var selectName = $("#name4").text();
           $("#name7").html(selectName);
           var selectText = $("#points4").text();
           $("#points7").html(selectText);
           
           $("#card5, #card6, #card7").show();
           
       }
       
       if (myimgId === "myImage4"){
           $("#card1, #card2, #card3").hide();
           var img = $('#myImage5');
           img.attr("src", "./assets/images/luke-skywalker.jpg");
           $("#myImage5").html(img)
           
           var img = $('#myImage6');
           img.attr("src", "./assets/images/obi-wan.jpg");
           $("#myImage6").html(img)
           
           var img = $('#myImage7');
           img.attr("src", "./assets/images/darth-sidious.jpg");
           $("#myImage7").html(img)
           
           var selectName = $("#name1").text();
           $("#name5").html(selectName);
           var selectText = $("#points1").text();
           $("#points5").html(selectText);
           
           var selectName = $("#name2").text();
           $("#name6").html(selectName);
           var selectText = $("#points2").text();
           $("#points6").html(selectText);
           
           var selectName = $("#name3").text();
           $("#name7").html(selectName);
           var selectText = $("#points3").text();
           $("#points7").html(selectText);
           
           $("#card5, #card6, #card7").show();
           
       }
       
   $(".image1").on("click", function(){
       myimgId = $(this).attr("id");
       if (myimgId === "myImage5"){
           $("#card5").hide();
           var selectedImage = $("#myImage5").attr('src');
           console.log(selectedImage);
           var img = $('#myImage8');
           img.attr("src", selectedImage);
           $("#myImage8").html(selectedImage);
           
           var selectName = $("#name5").text();
           $("#name8").html(selectName);
           var selectText = $("#points5").text();
           $("#points8").html(selectText);
           
           $("#card8").show();
       }
       
       if (myimgId === "myImage6"){
           $("#card6").hide();
           var selectedImage = $("#myImage6").attr('src');
           //console.log(selectedImage);
           var img = $('#myImage8');
           img.attr("src", selectedImage);
           $("#myImage8").html(selectedImage);
           
           var selectName = $("#name6").text();
           $("#name8").html(selectName);
           var selectText = $("#points6").text();
           $("#points8").html(selectText);
           
           $("#card8").show();
       }
       if (myimgId === "myImage7"){
           $("#card7").hide();
           var selectedImage = $("#myImage7").attr('src');
           //console.log(selectedImage);
           var img = $('#myImage8');
           img.attr("src", selectedImage);
           $("#myImage8").html(selectedImage);
           
           var selectName = $("#name7").text();
           $("#name8").html(selectName);
           var selectText = $("#points7").text();
           $("#points8").html(selectText);
           
           $("#card8").show();
       }
       
   });
       
           $("#card5").addClass('colorCard');
           $("#card6").addClass('colorCard');
           $("#card7").addClass('colorCard');
   
   }); 
    
 //This function generates a random value between 90 and 150      
 function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
  
 }  
    
  function randomAttackPower(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
  
 }    

/* Main 
===========================================================================*/ 
  
document.getElementById('points1').innerHTML= randomIntFromInterval(min,max);  
document.getElementById('points2').innerHTML= randomIntFromInterval(min,max);
document.getElementById('points3').innerHTML= randomIntFromInterval(min,max);
document.getElementById('points4').innerHTML= randomIntFromInterval(min,max);
    
    
    
});    