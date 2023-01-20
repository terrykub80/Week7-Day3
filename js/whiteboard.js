



var capitals = function (word) {
    let caps = []
    for (let x = 0; x < word.length; x++){
        
        if (word[x] == word[x].toUpperCase()){
            caps.push(x)
        }
    } 	return caps
};

console.log(capitals('CodEWaRs'))