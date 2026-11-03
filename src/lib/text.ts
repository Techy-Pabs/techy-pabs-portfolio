// Small text helpers for showing some words of a heading in amber.

// Splits `text` around the first place `highlight` appears.
export function splitAround(text: string, highlight = '') {
  const start = highlight ? text.indexOf(highlight) : -1;
  if (start === -1) return { before: text, match: '', after: '' };
  return { before: text.slice(0, start), match: highlight, after: text.slice(start + highlight.length) };
}

// Splits off the last word, e.g. "How one answer gets made." -> "How one answer gets " + "made."
export function splitLastWord(text: string) {
  const cut = text.lastIndexOf(' ') + 1;
  return { before: text.slice(0, cut), last: text.slice(cut) };
}

const numberWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

// 3 -> "Three". Falls back to digits above ten.
export const numberWord = (n: number) => numberWords[n] ?? String(n);
