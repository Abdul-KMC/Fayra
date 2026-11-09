import menu from './menuData.js'

export const menuItems = menu

const nonVegWords = /\b(chicken|mutton|lamb|fish|egg|eggs|prawn|prawns|shrimp|bacon|beef|pork|seafood)\b/i
const nonVegLabel = /\bnon[\s-]?veg\b/i
const mixedDietLabel = /\bveg\s*\/\s*non[\s-]?veg\b/i

export function getDietType(item) {
  const labels = `${item.category ?? ''} ${item.name ?? ''}`
  if (mixedDietLabel.test(labels)) return 'mixed'
  if (nonVegLabel.test(item.category ?? '') || nonVegWords.test(labels)) return 'non-veg'
  return 'veg'
}

export function formatPrice(price) {
  if (Array.isArray(price)) {
    return price.map((amount) => formatPrice(amount)).join(' / ')
  }
  if (typeof price === 'number') {
    return `₹ ${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(price)}`
  }
  return price
}
