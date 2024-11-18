const calculateDeckMetadata = (cards) => {
  const avgCost =
    cards.reduce((sum, card) => sum + card.cost, 0) / cards.length;
  const avgSpeed =
    cards.reduce((sum, card) => sum + card.speed, 0) / cards.length;
  const maxAttackCard = cards.reduce(
    (max, card) => (card.attack > max.attack ? card : max),
    cards[0]
  );

  return {
    avg_cost: avgCost,
    avg_speed: avgSpeed,
    max_attack: maxAttackCard,
    cards,
  };
};

module.exports = { calculateDeckMetadata };
