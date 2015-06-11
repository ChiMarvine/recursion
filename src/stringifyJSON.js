// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   var input = typeof obj;

   //Possible cases
   if(obj === null) {
      return "null";
   }
   if(input === 'boolean' || input === 'number') {
      return obj.toString();
   }
   if(input === 'string') {
      return '"' + obj + '"';
   }

   //stringify arrays
   if(Array.isArray(obj)) {
      return '[' + obj.map(stringifyJSON) + ']';
   }

   //stringify objects
   if(input === 'object') {
      var output = "";
      for(var key in obj) {
         if(typeof obj[key] !== 'function' && obj[key] !== undefined) {
            output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ",";
         }
      }
      if(output.slice(-1) === ',') {
         output = output.slice(0, -1);
      }

      return '{' + output + '}';
   }
};