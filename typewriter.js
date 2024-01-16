const characterDelay = function (sentence) {
  //set delay
  let delay = 0;
  
  for (const char of sentence) {
  //setTimeout to creat a counter //need to print each letter individually.
    setTimeout(() => {
      process.stdout.write(char);
    }, delay) // <= 1s delay //changed to no delay with increases each run

  //after each iteration  - need to print each letter individually. half second as full second is too long
  delay += 500;
  }
};

characterDelay("Let's see if I can print out this string slowly.");