// @flow

export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'Poor':
      return '#9d9d9d';
    case 'Common':
      return '#ffffff';
    case 'Uncommon':
      return '#1eff00';
    case 'Rare':
      return '#0070dd';
    case 'Epic':
      return '#a335ee';
    case 'Legendary':
      return '#ff8000';
    case 'Artifact':
      return '#e6cc80';
    case 'Heirloom':
      return '#00ccff';
  }
};

export const getRiskColor = (risk: string): string => {
  switch (risk) {
    case 'Very Low':
      return '#00E5FF';
    case 'Low':
      return '#00FF24';
    case 'Medium':
      return '#E6FF00';
    case 'High':
      return '#FFA000';
    case 'Very High':
      return '#FF5100';
  }
};
