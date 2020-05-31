const countProps = function(obj) {
    let counter = 0;
    for (const key in obj) {
        counter += 1;
    }
    return (counter);

  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countProps({})); // 0
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3