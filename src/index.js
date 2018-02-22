// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
     
    let k = 0, 
    		obj = {"H" : 50, "Q" : 25, "D" : 10, "N" : 5, "P" : 1};
    
    for(let key in obj){

    	k = obj[key];
    	obj[key] = Math.floor(currency / obj[key]);
      
        if(obj[key] <= 0) delete obj[key];
        else currency = currency - obj[key]*k;
    }
    
    return obj;
}
