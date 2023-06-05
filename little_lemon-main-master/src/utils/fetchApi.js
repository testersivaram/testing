const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    }
  }

  function fetchAPI(date) {
    let result = [];
    let dateObj = new Date(date)
    let random = seededRandom(dateObj.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  }

  function submitAPI(formData) {
    return new Promise((resolve, reject)=>{
      if (formData){
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  export {fetchAPI, submitAPI}