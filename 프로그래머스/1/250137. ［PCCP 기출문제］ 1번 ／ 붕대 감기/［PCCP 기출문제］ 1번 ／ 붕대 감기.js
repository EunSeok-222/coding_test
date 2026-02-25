function solution(bandage, health, attacks) {
    let answer = 0
    const [t,x,y] = bandage
    const time =  attacks[attacks.length-1][0]
    let maxHealth = health
    let count = 0
    let attackIdx = 0
    
    for(let i=0; i<=time; i++){
        if(attackIdx < attacks.length && i === attacks[attackIdx][0]){
           health -= attacks[attackIdx][1]
           count=0
           attackIdx++
            
           if (health <= 0) return -1;
        }else{
            count++;
            count === t ? (health+=(x+y),count=0) : (health+=x)
            
            if (health > maxHealth) health = maxHealth
       }
    }
    
    return health
}