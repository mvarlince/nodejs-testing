export function calculateSalesTax(subtotal, taxRate){
    return Number((subtotal * taxRate).toFixed(2))
}

export function factorial(num){
    return (num < 2) ? 1 : num * factorial(num - 1)
}

console.log(calculateSalesTax(10, 0.07)) // 0.7
console.log(calculateSalesTax(15, 0.07)) // 1.05
console.log(calculateSalesTax(17.5, 0.07)) // 1.23