const formatter = (price) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

export default formatter;
