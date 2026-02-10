function solution(name, yearning, photo) {
    let answer = []
    let scoreMap = {}
   
    for(let i=0; i<name.length; i++){
        scoreMap[name[i]] = yearning[i]
    }
    
    photo.forEach(p=>{
        let photoScore =0
        for(let i of p){
            if(scoreMap[i]){
                photoScore += scoreMap[i]
            }
        }
        answer.push(photoScore)
    })
    return answer
}