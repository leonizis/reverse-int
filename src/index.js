module.exports = function reverse (n) {
    n = Math.abs(n);
    let nTxt = String(n);
    let tTxt = nTxt;
    let numberTxt = '';
    for(let i = 0; i < nTxt.length; i++){
        let a = n % 10;
        n = String(n);
        n = n.slice(0, -1);
        n = Number(n);
        numberTxt = numberTxt + String(a);

  }
  

  return numberTxt;
};

module.exports(-367);





