function solution(food) {
    
    let foodContest = []
    for(let i = 1; i<food.length; i++){
        const foodNum = Math.floor(food[i]/2)
        const iStr = String(i)
        const reFood = iStr.repeat(foodNum)
        if(foodNum > 0){
            foodContest.push(reFood)
        }
    }
    
    return foodContest.join('') + 0 + foodContest.reverse().join('')
}