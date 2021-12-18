var arrayStringsAreEqual = function(word1, word2) {
    if(word1.length ===0 || word2.length ===0) return false;
    
    let s1 = '';
    let s2 = '';
    for(let w of word1){
    s1 = s1+w;
    }
    
    for(let w of word2){
        s2 = s2+w;
    }
    
    return s1=== s2;
    };
    arrayStringsAreEqual(["ab", "c"],["a", "bc"])
