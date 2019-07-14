// @flow
const PriceFormatter = (number : any) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

export default PriceFormatter;