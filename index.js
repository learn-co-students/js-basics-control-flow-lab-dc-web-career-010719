// Write your code in this file!
function scuberGreetingForFeet(input) {

  let output

  if (input <= 400) {
    output = 'This one is on me!'
  }

  else if (input >= 2000 && input <= 2500) {
    output = 'I will gladly take your thirty bucks.'
  }

  else if (input >= 2500) {
    output = 'No can do.'
  }

  return output
}

function ternaryCheckCity(input) {

  let output
  input === 'NYC' ? output = 'Ok, sounds good.' : output = 'No go.'
  return output

}

function switchOnCharmFromTip(input) {

  let output

  if (input === 'generous') {
    output = 'Thank you so much.'
  }

  else if (input === 'not as generous') {
    output = 'Thank you.'
  }

  else {
    output = 'Bye.'
  }

  return output
}
