function solution(spell, dic) {
    const target = spell.sort().join('')
    return dic.some(word => [...word].sort().join('') === target) ? 1 : 2
}