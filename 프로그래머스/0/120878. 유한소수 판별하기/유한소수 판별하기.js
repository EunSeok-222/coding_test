function solution(a, b) {
    const gcd = (x,y)=>{
        if(y===0) return x
        return gcd(y,x%y)
    }
   const G = gcd(a,b)
   let reducedB = b / G;
    
   while(reducedB % 2 === 0){
       reducedB /= 2
   }
    while(reducedB % 5 === 0){
        reducedB /= 5
    }
    
return reducedB === 1 ? 1 : 2
}