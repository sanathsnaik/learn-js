// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    if (this.errMsg) {
      console.log(this.errMsg);
    }
  }
  
  const temp = {
      name: 'Prajwal',
      errMsg: 'This is an error message'
  };
  
  logMsg.call(temp);