process.stdout.write('hello from spinner2.js... \rheyyy\n');

let spinChar = ['|', '/', '-', '\\'];

const spinMe = function(revolutions) {
  if (revolutions > 0) {
    let displayDelay = 100;
    for (let i = 0; i < revolutions; i++) {
      spinChar.forEach((chr) => {
        displayDelay += 200;
        setTimeout(() => {
          process.stdout.write(`\r ${chr}`);
        }, displayDelay);
      });
    }
    setTimeout(() => {
      process.stdout.write('\n');
    },displayDelay);
  } else {
    console.log('I want to spin pick a larger number.');
  }
};

spinMe(10);