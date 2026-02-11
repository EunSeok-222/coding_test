function solution(a, b, n) {
    let answer = 0
     
    while(n>=a){
        let newCola = Math.floor(n/a) * b
        n = (n%a) + newCola
        answer += newCola
    }
   

    return answer
}