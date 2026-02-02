function solution(id_pw, db) {
    const [id,pw] = id_pw
    
    for(let i of db){
        const [dbId, dbPw] = i;

        if (dbId === id) {
            return dbPw === pw ? "login" : "wrong pw";
        }
        
    }
    return "fail";
}