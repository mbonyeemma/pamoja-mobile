module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "object-curly-newline": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "quotes": [2, "single"],
    "max-len": "off",
    "no-return-assign": "off"
  },
  globals: {
    fetch: false
  }
};
