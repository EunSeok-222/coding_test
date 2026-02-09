function solution(k, score) {
    let answer = [];
    let newScore =[]
    
    for(let i=0; i<score.length; i++){
        newScore.push(score[i])
        newScore.sort((a,b)=>b-a)
        newScore.length <= k ? answer.push(Math.min(...newScore)) : answer.push(newScore[k-1])
    }
    
    return answer;
}