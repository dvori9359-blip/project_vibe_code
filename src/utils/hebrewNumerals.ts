export const convertToHebrewNumeral = (num: number): string => {
  const hebrewNumerals: Record<number, string> = {
    1: 'א', 2: 'ב', 3: 'ג', 4: 'ד', 5: 'ה',
    6: 'ו', 7: 'ז', 8: 'ח', 9: 'ט', 10: 'י',
    20: 'כ', 30: 'ל', 40: 'מ', 50: 'ן',
    60: 'ס', 70: 'ע', 80: 'פ', 90: 'צ',
    100: 'ק', 200: 'ר'
  };

  if (num <= 10) return hebrewNumerals[num] + "'";
  if (num === 15) return 'ט"ו';
  if (num === 16) return 'ט"ז';
  if (num < 20) return hebrewNumerals[10] + hebrewNumerals[num - 10] + '"';

  const tens = Math.floor(num / 10) * 10;
  const ones = num % 10;

  if (ones === 0) return hebrewNumerals[tens] + "'";
  return hebrewNumerals[tens] + hebrewNumerals[ones] + '"';
};
