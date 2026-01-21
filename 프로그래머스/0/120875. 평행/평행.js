function solution(dots) {
    const [a,b,c,d] = dots
    const diff1 = (b[1] - a[1]) / (b[0] - a[0])
    const diff2 = (d[1] - c[1]) / (d[0] - c[0])
    const diff3 = (c[1] - a[1]) / (c[0] - a[0])
    const diff4 = (d[1] - b[1]) / (d[0] - b[0])
    
    console.log(diff1,diff2,diff3,diff4)
    return diff1 === diff2||diff3 === diff4 ? 1:0;
}