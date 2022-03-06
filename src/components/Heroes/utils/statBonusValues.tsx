const statValues = ['strength', 'intelligence', 'wisdom', 'luck', 'agility', 'vitality', 'endurance', 'dexterity']
export const statMapping = {
  str: {
    value: 'strength'
  },
  int: {
    value: 'intelligence'
  },
  wis: {
    value: 'wisdom'
  },
  lck: {
    value: 'luck'
  },
  agi: {
    value: 'agility'
  },
  vit: {
    value: 'vitality'
  },
  end: {
    value: 'endurance'
  },
  dex: {
    value: 'dexterity'
  }
}

export interface StatMappingInterface {
  str: {
    value: string
  }
}

export default statValues
