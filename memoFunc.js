function memo(func) {
    const track = {};
  
    const memoizedFunct = async param => {
      if (track[param]) {
        return track[param];
      }
      const currentResult = await func(param);
      track[param] = currentResult;
      return currentResult;
    };
  
    return memoizedFunct;
  }
  
  function square(num) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("computed square", num);
        resolve(num * num);
      }, 500);
    });
  }
  
  const memoSquare = memo(square);
  
  memoSquare(5).then(v => console.log(v));
  memoSquare(5).then(v => console.log(v));
  memoSquare(8).then(v => console.log(v));
  memoSquare(5).then(v => console.log(v));
  
  /*
  square(5); // 25
  
  const memoizedSquare = memo(square);
  memoizedSquare(5) // 25
  
  if(track[param]) {
    return track[param]
  }
  
  track[param] = func(param);
  func(param);
  
  const track = {
    5: 25,
    7: 49
  }
  
  
  */
  