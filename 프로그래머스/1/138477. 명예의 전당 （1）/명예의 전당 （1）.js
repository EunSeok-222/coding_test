function solution(k, score) {
    let answer = [];
    let TOP_K =[]
    
    for(let i of score){
        TOP_K.push(i)
        TOP_K.sort((a,b)=>b-a)
        
        if(TOP_K.length > k){
            TOP_K.pop()
        }
        answer.push(TOP_K[TOP_K.length-1])
    }
    
    return answer;
}