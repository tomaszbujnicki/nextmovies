function removeEmoji(text) {
  if (typeof text !== 'string') return undefined;

  const cleanText = text.replace(
    /(\u2B1C|[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  );
  return cleanText;
}

export default removeEmoji;
