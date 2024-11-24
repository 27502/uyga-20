

// 1------------------------------------- kotta harf indexsini chiqar

{
 var capitals = function (word) {
	let arr = [];
  for(let i = 0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase() )
      arr.push(i);
  }
  return arr;
};
console.log(capitals("CoDeWaRs"));

   
}

// 2------------------------------------- 5 ta harfdan kup suzlarrni teskari
{
  function reverseLongWords(str) {
 
    let words = str.split(" ");
    
   
    let result = words.map(word => {
      
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    });
  
    
    return result.join(" ");
  }
  
  console.log(reverseLongWords("Hello world programming is fun")); 
    
}


