const isItANum = (str) =>
    (str.replace(/\D/g, "").match(/^0\d{10}$/) || ["Not a phone number"])[0];
console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"));
