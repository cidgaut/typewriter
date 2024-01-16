const sentence = "hello there from lighthouse labs";
//set delay
let delay = 0;
for (const char of sentence) {
  //setTimeout to creat a counter //need to print each letter individually.
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
}