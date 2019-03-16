window.onload = () => {
        
    let suiteArray = ["\u2665","\u2663","\u2666","\u2660"]
    let numberArray = ["J","Q","K","A",1,2,3,4,5,6,7,8,9]
        
    let bucketArray = []
        
        
        bucketArray.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
        bucketArray.push(suiteArray[Math.floor(Math.random() * suiteArray.length)]);
        
        console.log(bucketArray);
        if (bucketArray[1] === "\u2660" || bucketArray[1] === "\u2663") {
       document.querySelector("#icons").style.color = "black";
       document.querySelector("#icons2").style.color="black";
   }
        
        document.querySelector(".card-number").innerHTML = bucketArray[0];
        document.querySelector(".top-left-icon").innerHTML = bucketArray[1];
        document.querySelector(".bot-right-icon").innerHTML = bucketArray[1];
        
   
      
}