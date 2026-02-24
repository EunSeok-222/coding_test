function solution(keymap, targets) {
    let answer = []
    const minKeys = {}
    
    keymap.forEach(keys => {
        for(let i = 0; i < keys.length; i++) {
            const char = keys[i]
            const count = i + 1
        
            if (!minKeys[char] || count < minKeys[char]) {
                minKeys[char] = count
            }
        }
    })
    for(let i of targets){
        let count = 0 
        
        for(let j = 0; j < i.length; j++){
            const char = i[j]
            
            if(!minKeys[char]){
                count = -1 
                break
            }else{
                count += minKeys[char]
            } 
        }
        
        answer.push(count)
    }
    return answer
}