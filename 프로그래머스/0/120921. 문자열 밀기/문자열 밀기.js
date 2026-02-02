function solution(A, B) {
    if(A===B)return 0 
    
    let answer = 0;
    let arrA = A.split('')
    
    for(let i=0;i<A.length;i++){
        let lastA = arrA.pop()
        arrA.unshift(lastA)
        
        let charA = arrA.join('')
        
        if(charA === B){
            return i + 1
        }
    
    }

    return -1;;
}