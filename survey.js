const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
rl.question('What is your nickname? ', (answer) => {
  arr.push(answer);
  
  rl.question('What\'s an activity you like doing? ', (answer) => {
    arr.push(answer);
    
    rl.question('What do you listen to while doing that? ' , (answer) => {
      arr.push(answer);

      rl.question('Which meal is your favourite? ' , (answer) => {
        arr.push(answer);

        rl.question('What\'s your favourite thing to eat for that meal? ' , (answer) => {
          arr.push(answer);

          rl.question('Which sport is your absolute favourite? ' , (answer) => {
            arr.push(answer);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ' , (answer) => {
              arr.push(answer);
              console.log(arr);

              console.log(`${arr[0]} loves listening to ${arr[2]} while ${arr[1]}, 
              devouring ${arr[4]} for ${arr[3]}, prefers ${arr[5]} over any 
              other sport, and is amazing at ${arr[6]} at inopportune times.`);

              rl.close();
              
            });
            
          });
          
        });
        
      });
      
    });

  });
});
