// Get visible expenses

export default (features, { text, sortBy, startDate, endDate }) => {
  return features.filter((feature) => {
    const startDateMatch = typeof startDate !== 'number' || feature.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || feature.createdAt <= endDate;
    const textMatch = feature.name.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1;
    }
  });
};
