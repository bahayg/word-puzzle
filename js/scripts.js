$(document).ready(function(){
  var inputArray = [];
  var outputArray = [];
  var vowel = ["a", "i", "o", "u", "e"];
  $("form").submit(function(event){
  event.preventDefault();
  inputArray = $(".input").val().split("");

  for (var index = 0; index < inputArray.length; index ++) {
    for (var i = 0; i < vowel.length; i ++) {
      if (inputArray[index] === vowel[i]) {
          inputArray[index] = "_"
        }
      }
    }
  outputArray.push(inputArray);
  $(".puzzle").append(outputArray);
  });
});
