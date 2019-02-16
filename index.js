// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue < 400) {
    return "This one is on me!"
  }
  else if (someValue < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  let x
  city === "NYC" ? x = "Ok, sounds good." : x = "No go."
  return x
}

function switchOnCharmFromTip(tip) {
  let response

  switch(tip) {
    case 'generous':
      response = "Thank you so much."
      break
    case 'not as generous':
      response = "Thank you."
      break
    default:
      response = "Bye."
  }
  return response
}
