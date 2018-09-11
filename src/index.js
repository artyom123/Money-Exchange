// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
     
    const obj = {"H" : 50, "Q" : 25, "D" : 10, "N" : 5, "P" : 1};
    let objFinal = {};
    
    for(let key in obj) {

    	objFinal[key] = Math.floor(currency / obj[key]);
      
        if(objFinal[key] <= 0) delete objFinal[key];
        else currency -= obj[key] * objFinal[key];
    }
    
    return objFinal;
}
