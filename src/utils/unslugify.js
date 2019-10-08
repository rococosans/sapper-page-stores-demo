// https://capitalizemytitle.com/

const wordsNotCapitalizedInTitleCase = [
  'a', 'an', 'the', 'and', 'but', 'for', 'at', 'by', 'from', 'etc', 'on', 'in', 'with'
];

export function capitalizeWord(word) {
  const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1)
  return capitalizeWord
}

export function unslugify(slug) {
  const replaceHype = slug.replace(/-|_/g, ' ');
  const capitalizeWords = replaceHype.split(' ').map(res => {
    if (wordsNotCapitalizedInTitleCase.includes(res.toLowerCase())) {
      return res;
    }
    return capitalizeWord(res);
  }).join(' ')
  
  const unslug = capitalizeWords
  return unslug
}