const Calculate = (data, buttonName) => {
  let { total, next, operation} = data;
if (buttonName == '+/-'){
    total *= -1;
    next *= -1;
   }

};

export default Calculate;
