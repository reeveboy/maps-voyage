export function splitText(text: string) {
  let paragraph = "";
  const chunkSize = 400;
  const paragraphs: string[] = [],
    sentenceRegex = /[^\.!\?]+([\.!\?]+|\s*$)/g,
    sentences = text.match(sentenceRegex);

  sentences?.forEach(function createParagraphs(sentence, index) {
    paragraph += sentence;

    if (paragraph.length >= chunkSize || index === sentences.length - 1) {
      paragraphs.push(paragraph);
      paragraph = "";
    }
  });

  return paragraphs.length === 0 ? [text] : paragraphs;
}
