var mergeAlternately = function(word1, word2) {
  const maxLength = Math.max(word1.length, word2.length);
  console.log(maxLength);
  
//   const splitWord1= word1.split('');
//   const splitWord2= word2.split('');
  
  let i=0, resStr='';
  
  while(i<maxLength) {
  	/* resStr = resStr + splitWord1[i] ? splitWord1[i] : '' + splitWord2[i] ? splitWord2[i] :''; */ 
    /* what's wrong with the above approach?? */
    if(word1[i]) {
    	resStr = resStr + word1[i];
    }
    
    if(word2[i]) {
    	resStr = resStr + word2[i];
    }
    
    i++;
  }
  
  console.log(resStr);
  return resStr;
};