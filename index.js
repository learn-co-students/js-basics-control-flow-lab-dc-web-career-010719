// Write your code in this file!
function scuberGreetingForFeet(feet) {
    
    
    if (feet < 400) {
        return 'This one is on me!'
    }
    
    if (feet > 2000 && feet < 2500) {
        return 'I will gladly take your thirty bucks.'
        
    }
    
    if (feet > 2500) {
        return 'No can do.'
    }
    
}

function ternaryCheckCity(city) {
    let result
    city ===  'NYC' ? (result = "Ok, sounds good.") :  (result = "No go.")
    return result
}

function switchOnCharmFromTip(tip) {

    if (tip === 'generous') {
        return 'Thank you so much.'
    }
    
    else if (tip === 'not as generous') {
        return 'Thank you.'
    }
    
    else {
        return 'Bye.'
    }

    
}