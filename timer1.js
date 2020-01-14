const argList = process.argv.slice(2);
const timer1 = function(arrayInput) {
  for (let delay of arrayInput) {
    delay = Number(delay);
    if (delay >= 0 && delay !== undefined && !isNaN(delay)) {
      setTimeout(() => {
        process.stdout.write("BEEP!");
        console.log("");
      }, delay * 1000);
    }
  }
};

timer1(argList);