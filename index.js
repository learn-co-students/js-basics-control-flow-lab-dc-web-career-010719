function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue < 400) {
    greeting = 'This one is on me!'
  } else if (someValue > 2000 && someValue < 2500) {
    greeting = 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500) {
    greeting = 'No can do.'
  }
  return greeting
}

function ternaryCheckCity(city) {
  let result
  city === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.'
  return result
}

function switchOnCharmFromTip(tip) {
  let result
  switch (tip) {
    case 'generous':
    result = 'Thank you so much.';
    break
    case 'not as generous':
    result = 'Thank you.'
    break
    default:
    result = 'Bye.'
  }
  return result
}
