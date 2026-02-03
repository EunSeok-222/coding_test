function solution(babbling) {
    let answer = 0
    for(let i of babbling){
        const stri = i.replace(/aya|ye|woo|ma/g,"")
        stri==="" ? answer++ : null
    }
    return answer
}