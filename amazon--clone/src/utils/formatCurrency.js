function formatCurrency(currency) {
  try {
    currency = Number(currency)
  } catch {
    console.log(currency)
    currency = Number(currency.replace(",", ""))
  }
  return Intl.NumberFormat("en-GB").format(currency.toFixed(2))
}

export default formatCurrency