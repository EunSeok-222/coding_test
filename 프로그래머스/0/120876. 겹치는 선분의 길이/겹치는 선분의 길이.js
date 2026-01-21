function solution(lines) {
    let arr = Array(200).fill(0)
    for(let i of lines){
        let [start, end] = i
        for(let j=start; j<end; j++){
            arr[j+100] +=1
        }
    }
    return arr.filter(x=> x>=2).length;
}