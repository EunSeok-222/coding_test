function solution(number, limit, power) {
    let answer = 0
    let div = []
    let divN = []
    for(let i=1; i<=number;i++){
        div.push(i)
    }
    
    div.forEach(n=> {
        let result =[]
        let index = 1
        while(index <= Math.sqrt(n)){
            if(n%index===0){
                result.push(index)
                if(n/index!==index) result.push(n/index)
            }
            index++
        }
        
        result.length<=limit ? (divN.push(result.length)):(divN.push(power))
        
    }
    )
    
    divN.forEach(n=> answer+=n)
    
    return answer;
}