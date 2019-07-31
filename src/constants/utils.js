export const toTitleCase = str => {
  const lowercased = str.trim().toLowerCase();
  const firstChar = lowercased.charAt(0).toUpperCase();
  const lastEndString = lowercased.slice(1);
  return firstChar + '' + lastEndString;
};
