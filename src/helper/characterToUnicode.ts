// eslint-disable-next-line import/prefer-default-export
export function characterToUnicode(inputText: string): string {
  return Array.from(inputText)
    .map((char) => {
      const charCode = char.charCodeAt(0).toString(16).toUpperCase();
      return `\\u${'0'.repeat(4 - charCode.length)}${charCode}`;
    })
    .join('');
}
