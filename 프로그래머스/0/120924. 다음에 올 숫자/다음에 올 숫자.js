function solution(common) {
    const [a,b,c] = common
    const last = common[common.length - 1]
    
    if(a-b===b-c){
        const d = b-a
        return last+d
        
    }
    if(a-b!==b-c){
        const r = b/a
        return last*r
    }
    
}