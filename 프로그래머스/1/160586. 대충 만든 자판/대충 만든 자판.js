function solution(keymap, targets) {
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
    
   return targets.map(word => {
    let total = 0
    for (const char of word) {
        if (!minKeys[char]) return -1 
        total += minKeys[char]
    }
    return total
})
}