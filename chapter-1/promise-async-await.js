const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
  
  promise.then(console.log);  // Done! (after 1 second)
  
  const asyncFunc = async () => {
    const result = await promise;
    console.log(result);  // Done! (after 1 second)
  }
  
  asyncFunc();
  