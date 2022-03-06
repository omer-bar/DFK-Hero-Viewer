export const calculateHeroSummonCost = (summonerGen: any, totalHeroesAlreadySummoned: any) => {
  const baseCost = 6
  const perChildIncrease = 2
  const GenerationIncrease = 10

  let totalCost = baseCost + perChildIncrease * totalHeroesAlreadySummoned + GenerationIncrease * summonerGen

  if (summonerGen === 0 && totalCost > 30) {
    totalCost = 30
  }

  return totalCost
}
