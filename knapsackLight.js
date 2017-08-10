function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let totalWeight = weight1 + weight2
  let totalValue = value1 + value2
  if(weight1 > maxW && weight2 > maxW) return 0
  if(totalWeight <= maxW) return totalValue
  if(weight1 <= maxW) return value1
  else if(weight2 <= maxW) return value2
  else if (weight1 <= maxW && weight2 <= maxW) return Math.max([value1, value2])
}
