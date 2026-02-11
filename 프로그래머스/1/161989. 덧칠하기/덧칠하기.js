function solution(n, m, section) {
    let count = 0
    let paint = 0 
    for(let i of section){
        if(i>paint){
            count++
            paint = i+m-1
        }
    }
    
    return count
}