/* eslint-disable import/prefer-default-export */
export const capitalize = (text) => {
  const [firstSymbol = '', ...restSymbols] = text;
  return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};
