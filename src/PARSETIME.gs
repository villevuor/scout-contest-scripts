// Helpers function to parse time string

function PARSETIME(input) {
  
  // Remove every characters except numbers
  var str = toString(input).replace(/[^0-9]/, "")
  
  var hours = str.substring(0, 2)
  var minutes = str.substring(2, 2)
  var seconds = str.substring(4, 2)
  
  return new Date(0, 0, 0, hours, minutes, seconds)
}



