function scuberGreetingForFeet(feet) {
  let message

  if (feet <= 400) {
    message = 'This one is on me!'
  } else if (feet > 2500) {
    message = 'No can do.'
  } else if (feet > 2000 && feet <= 2500) {
    message = 'I will gladly take your thirty bucks.'
  }

  return message
}

function ternaryCheckCity(city) {
  let message

  switch (city) {
    case 'NYC':
      message = "Ok, sounds good."
      break
    default:
      message = "No go."
      break
  }

  return message
}

function switchOnCharmFromTip(tip) {
  let message

  switch (tip) {
    case 'generous':
      message = "Thank you so much."
      break
    case 'not as generous':
      message = "Thank you."
      break
    default:
      message = "Bye."
      break
  }

  return message
}
