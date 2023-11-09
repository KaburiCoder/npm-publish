// src/index.ts
function validPassword(password, type = 0 /* korea */) {
  if (password.length < 8) {
    return {
      errorMessage: "\uBE44\uBC00\uBC88\uD638\uB294 \uCD5C\uC18C 8\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."
    };
  }
  const englishRegexp = /[a-zA-Z]/;
  const specialRegexp = /[!@#$%^&*]/;
  const numberRegexp = /\d/;
  const regexpes = [englishRegexp, specialRegexp, numberRegexp];
  const count = regexpes.reduce((acc, regexp) => {
    return acc + (regexp.test(password) ? 1 : 0);
  }, 0);
  if (count < 3) {
    return {
      errorMessage: "\uBE44\uBC00\uBC88\uD638\uB294 \uB300\uBB38\uC790, \uC18C\uBB38\uC790, \uC22B\uC790, \uD2B9\uC218 \uBB38\uC790\n \uC911 3\uAC00\uC9C0 \uC774\uC0C1\uC744 \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4."
    };
  }
  return {
    validate: true
  };
}
export {
  validPassword
};
//# sourceMappingURL=index.js.map
