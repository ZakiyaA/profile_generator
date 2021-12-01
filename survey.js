const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`)
  // --------------------------------------------------------------  
  rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
    console.log(`Thank you for your valuable feedback: ${name}`);
    // --------------------------------------------------------------  
    rl.question(`What's an activity you like doing?`, (activity) => {
      console.log(`Thank you for your valuable feedback: ${activity}`);
      // --------------------------------------------------------------  
      rl.question(`What do you listen to while doing that?`, (stream) => {
        console.log(`Thank you for your valuable feedback: ${stream}`);
        // --------------------------------------------------------------  
        rl.question(`Which meal is your favourite `, (favouriteMeal) => {
          console.log(`Thank you for your valuable feedback: ${favouriteMeal}`);
          // --------------------------------------------------------------  
          rl.question(`What's your favourite thing to eat for that meal?`, (favouriteFood) => {
            console.log(`Thank you for your valuable feedback: ${favouriteFood}`);
            // --------------------------------------------------------------  
            rl.question(`Which sport is your absolute favourite?`, (sport) => {
              console.log(`Thank you for your valuable feedback: ${sport}`);
              // --------------------------------------------------------------  
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superpower) => {
                console.log(`Thank you for your valuable feedback: ${superpower}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});



