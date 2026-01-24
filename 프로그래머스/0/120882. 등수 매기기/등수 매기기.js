function solution(score) {
    let answer = [];
    const averages = score.map(s => (s[0] + s[1]) / 2);
    
    averages.map((a)=>{
        const ranking = averages.filter(targetAver=>targetAver>a).length+1
        answer.push(ranking)
    })
    
    return answer
}