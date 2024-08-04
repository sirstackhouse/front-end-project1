console.log("This is my test page");


function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testEqual(10));
  console.log(typeof '3');

  function golfScore(par, strokes) {
    // Only change code below this line
      if (4, 1) {
      return "Hole-in-one";
    } else if (4, 2) {
      return "Eagle";
    } else if (5, 2) {
      return "Eagle";
    } else if (4, 3) {
      return "Birdie";
    } else if (4, 4) {
      return "Par";
    } else if (1, 1) {
      return "Hole-in-one";
    } else if (5, 5) {
      return "Par";
    } else if (4, 5) {
      return "Bogey";
    } else if (4, 6) {
      return "Double Bogey";
    } else if (4, 7) {
      return "Go Home!";
    } else (5, 9); {
      return "Go Home!";
    } 
  
    // Only change code above this line
  }
  
  console.log(golfScore(4, 3)); 

  function caseInSwitch (val) {
    let answer = " ";
    switch (val) {
      case 1:
        answer = "alpha";
        break;
    }
  }
  function chainToSwitch(val) {
    let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
      case 42:
        answer = "The Answer";
        break;
        case 1:
          answer = "There is no #1";
          break;
          case 99:
            answer = "Missed me by this much!";
            break;
            case 7:
              answer = "Ate Nine";
              break;
  }
  return answer;
}


console.log(chainToSwitch(7));
