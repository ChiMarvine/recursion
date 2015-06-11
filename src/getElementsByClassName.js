// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
   var theOne = [];
// check if the element has a class attribute & contains the specific class name
   function hunt(hunted) {
      if(hunted.classList && hunted.classList.contains(className)) {
         theOne.push(hunted);
      }
      for(var i = 0; i < hunted.childNodes.length; i++) {
         hunt(hunted.childNodes[i])
      }
   }
   hunt(document.body)
   return theOne;
};