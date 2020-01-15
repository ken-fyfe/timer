const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// function to create a beep sound
const beepFunction = function() {
  console.log('beep');
  process.stdout.write('\u0007');
};

stdin.on('data', (keypress) => {  // read keyboard
  if (keypress === '\u0003') {  // \u0003 maps to ctrl+c input to stop input
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if ((keypress >= 1) && (keypress <= 9)) {
    process.stdout.write(`Setting timer for ${keypress} seconds...\n`);
    setTimeout(() => {  // delays for keypress number of seconds
      beepFunction();
    }, keypress * 1000);
  }
  if (keypress === "b") {  // makes a beep sound
    beepFunction();
  }
});