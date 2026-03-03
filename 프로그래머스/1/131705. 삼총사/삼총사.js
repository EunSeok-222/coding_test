function solution(number) {
    let answer = 0
    for(let i=0; i<number.length; i++){
        let own = number[i]
        
        for(let j=i+1; j<number.length; j++){
            let two = number[j]
            
            for(let k=j+1; k<number.length; k++){
                let three = number[k]
                
                if(own+two+three===0)answer++
            
            }
            
        }
    }
    
    return answer
}