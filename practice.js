// var yourName = prompt("Please enter your name")
// alert(`Hello ${yourName}! Let’s go explore the Amazon.`)
// var adjective = prompt("Please enter an adjective.")
// var noun = prompt("Please enter a noun.")
// var liquid = prompt("Please enter a liquid.")
// var bodyPart = prompt("Please enter a body part.")
// var verb = prompt("Please enter a verb.")
// var secondNoun = prompt("Please enter a noun.")
// var place = prompt("Please enter a place.")

// var story = (`Once upon a time there were some intrepid explorers who wandered into the amazon. They found some amazing things! Piranhas are more ${adjective} during the day, so make sure you cross the ${noun} at night. Piranhas are attracted to fresh ${liquid} and will most likely take a bite out of your ${bodyPart} if you ${verb}. Whatever you do, if you have an open ${secondNoun} try and find another way to get back to ${place}. Good luck!`)

//var name = prompt("What is your name?")
//var canCode = prompt("Can you code?")
//    if (canCode === "yes"){
//        alert(`You will rule the world, ${name}`)
//   } else {
//       alert("Well, good luck with that.")
//  }

// var name = prompt("What is your name?")
// var canCode = prompt("Can you code?")
//     if (canCode === "yes"){
//         alert(`You will rule the world, ${name}`)
//     } else {
//         alert("Well, good luck with that.")
//     }

const worldDomination = () => {
    var user = prompt("What is your name?");
    var canCode = prompt("Can you code?");
        if (canCode === "yes"){
            alert('You will rule the world ${user.upperCase()}!')
        } else {
            return("Well, good luck with that.")
        }
}
    
worldDomination()