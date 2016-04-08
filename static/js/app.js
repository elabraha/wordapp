function isLetter(str) {
			return str.length === 1 && str.match(/[a-z]/i);
		}
function changeLetters() {
	var sentence = document.forms["submitForm"]["sentence"].value;
	j=1;
    for(var i = 0; i<sentence.length; i++){
    	if(!isLetter(sentence[i])){
    		continue;
    	}
    	if(j%5===0){
    		// console.log(j)
	        if(sentence[i] === sentence[i].toLowerCase()){
	            
	            sentence = sentence.substring(0,i)+ sentence[i].toUpperCase() + sentence.substring(i+1);
	            // console.log(sentence);
	        }
	        else {
	            sentence = sentence.substring(0,i)+ sentence[i].toLowerCase() + sentence.substring(i+1);
	            // console.log(sentence);			        
	        }
	    }
	    j++;
    }
    console.log(sentence);
    document.getElementById("display").innerHTML = sentence;
}