const isValidPriceFormat = (price: string): boolean => {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(price);
};

export default isValidPriceFormat;
