function solution(num, total) {
    let answer = [];
    const start =Math.floor(total/num-(num-1)/2)
    
    for(let i=0; i<num; i++){
        answer.push(start+i)
    }
    
    
    return answer;
}