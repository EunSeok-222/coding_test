function solution(t, p) {
    let answer = 0
    for (let i=0; i<=t.length-p.length; i++){
        const tStr = t.slice(i,i+p.length)
        if(tStr<=p){
            answer++
        }
    }
    return answer
}