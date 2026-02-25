function solution(bandage, health, attacks) {
    let answer = 0
    const [t,x,y] = bandage
    const time =  attacks[attacks.length-1][0]
    let maxHealth = health
    let count = 0
    
    for(let i=0; i<=time; i++){
        if(i === attacks[0][0]){
           health -= attacks[0][1]
           attacks.shift()
           count=0
            
           if (health <= 0) return -1;
        }else{
            
           if(maxHealth>health){
               count++
               count==t ? (health+=(x+y),count=0) : (health+=x)
            }
            if (health > maxHealth) health = maxHealth;
       }
    }
    
    return health
}