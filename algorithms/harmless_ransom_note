// Check if the provided paragraph have enough words to make the provided sentence.

function harmlessRansomNote(sentence, paragraph){
  
  const sentenceArr = sentence.split(" ");
  const paragraphArr = paragraph.split(" ");
  let paragraphObj = {};
  let isSentencePossible = true;
  
  paragraphArr.forEach(function(word){
    
    if (!paragraphObj[word]) paragraphObj[word] = 0;
    paragraphObj[word]++;

  });
  
  
  sentenceArr.forEach(function(word){
      
    if (paragraphObj[word]) {
    
      paragraphObj[word]--;  
      if (paragraphObj[word] < 0) isSentencePossible = false;
    }
    
    else isSentencePossible = false;
    
  });
  
  return isSentencePossible;
  
}

harmlessRansomNote('i am here', 'i am here ok. come on.. i am here');
