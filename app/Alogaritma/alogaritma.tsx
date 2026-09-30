function alogaritma(numbers: number[], target: number): number[][] {
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return [];
  }

  const result: number[][] = [];
  const seen = new Set<string>();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] !== target) {
        continue;
      }

      const pair = [numbers[i], numbers[j]].sort((a, b) => a - b);
      const key = pair.join("|");

      if (!seen.has(key)) {
        seen.add(key);
        result.push(pair);
      }
    }
  }

  return result;
}

export default alogaritma;
