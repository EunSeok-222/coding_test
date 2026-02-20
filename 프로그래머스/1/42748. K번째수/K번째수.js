function solution(array, commands) {
    let answer = []
    for(let item of commands){
        const [i,j,k] = item
        let arr = array.slice(i-1,j)
        arr.sort((a,b)=>a-b)
        answer.push(arr[k-1])
    }
    return answer
}