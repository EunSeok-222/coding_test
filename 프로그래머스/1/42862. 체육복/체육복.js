function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b)
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b)
    let student = n-realLost.length
    
    for(let i=0; i<reserve.length; i++){
        
        let lostIdx = realLost.indexOf(realReserve[i] - 1)
        
        if (lostIdx === -1) {
        lostIdx = realLost.indexOf(realReserve[i] + 1)
        }
        
        if (lostIdx !== -1) {
        student++
        realLost.splice(lostIdx, 1)
    }
       
    }
    return student
}