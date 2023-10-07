/* Turn a string of 24h time into words.

Example:
timeWord("00:00") => "midnight"
timeWord("12:00") => "noon"
timeWord("01:00") => "one o'clock am"
timeWord("06:01") => "six oh one am"
timeWord("06:10") => "six ten am"
timeWord("18:13") => "six thirteen pm"
timeWord("23:23") => "eleven twenty three pm"
*/

const timeWord = (time) => {
    let [hour, minute] = time.split(":");
    hour = parseInt(hour);
    minute = parseInt(minute);
    const amPm = hour < 12 ? "am" : "pm";
    let twelveHour = hour % 12;
    hourWord = twelveHour === 0 ? "twelve" : wordHelper(twelveHour);
    let minuteWord =
      minute === 0
        ? " o'clock"
        : minute < 10
        ? " oh " + wordHelper(minute)
        : " " + wordHelper(minute);
    return hour === 0 && minute === 0
      ? "midnight"
      : hour === 12 && minute === 0
      ? "noon"
      : hourWord + minuteWord + " " + amPm;
  };
  
  const wordHelper = (time) => {
    let word = "";
    let ones = time % 10;
    let tens = Math.floor(time / 10);
  
    if (tens === 0) {
      word = onesWord(ones);
    } else if (tens === 1) {
      word = teensWord(ones);
    } else {
      word = tensWord(tens) + " " + onesWord(ones);
    }
  
    return word;
  };
  
  const onesWord = (ones) => {
    switch (ones) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      default:
        return "nine";
    }
  };
  
  const teensWord = (ones) => {
    switch (ones) {
      case 0:
        return "ten";
      case 1:
        return "eleven";
      case 2:
        return "twelve";
      case 3:
        return "thirteen";
      case 4:
        return "fourteen";
      case 5:
        return "fifteen";
      case 6:
        return "sixteen";
      case 7:
        return "seventeen";
      case 8:
        return "eighteen";
      default:
        return "nineteen";
    }
  };
  
  const tensWord = (tens) => {
    switch (tens) {
      case 2:
        return "twenty";
      case 3:
        return "thirty";
      case 4:
        return "forty";
      default:
        return "fifty";
    }
  };
  
  modules.export = timeWord;