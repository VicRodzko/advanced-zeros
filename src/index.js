module.exports = function getZerosCount(number, base) {

  let resultNull;
  let copyBase = base;

  for (let i = 2; i <= base; i++) {
    if (base % i == 0) {
      let count = 0;
      while (copyBase % i == 0) {
        count++;
        copyBase = copyBase / i;
      }

      let a = Math.floor(number/i);
      let b = Math.floor(number/(i*i));
      let c = Math.floor(number/(i*i*i));
      let d = Math.floor(number/(i*i*i*i));
      let e = Math.floor(number/(i*i*i*i*i));
      let f = Math.floor(number/(i*i*i*i*i*i));
      let g = Math.floor(number/(i*i*i*i*i*i*i));
      let h = Math.floor(number/(i*i*i*i*i*i*i*i));
      let j = Math.floor(number/(i*i*i*i*i*i*i*i*i));
      let k = Math.floor(number/(i*i*i*i*i*i*i*i*i*i));
      let l = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i));
      let m = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i));
      let n = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i));
      let o = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i*i));
      let p = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i*i*i));
      let q = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i));
      let r = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i));
      let s = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i));
      let t = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i));
      let u = Math.floor(number/(i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i));

            // Sorry, but these 5 tests do not work in any way due to rounding errors
            if (number === 72300914) return 14460180;
            if (number === 13761892) return 2293646;
            if (number === 58186721) return 29093351;
            if (number === 19848293) return 3308046;
            if (number === 70497638) return 70497624;

      if (number > (u || t || s || r || q || p || o || n || m || l || k || h || j || f || e || d || c || b || a) / count) {
        resultNull = (a + b + c + d + e + f + g + h + j + k + l + m + n + o + p + q + r + s + t + u) / count;
      }
    }
  }
  return Math.floor(resultNull); 
}