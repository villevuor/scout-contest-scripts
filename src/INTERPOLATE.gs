// Helper function for interpolation

function INTERPOLATE(input, maxPoints, bestResult, zeroResult) {

  // General interpolation formula, check "orange book" p. 94  
  var points = maxPoints * (input - zeroResult) / (bestResult - zeroResult)
  
  // Check that points are within 0 and max points
  points = Math.max(points, 0)
  points = Math.min(points, maxPoints)
  
  // Return as rounded to 1 decimal
  return Math.round(points * 10) / 10
}
