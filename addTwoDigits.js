function addTwoDigits(n) {
    let splitNum = (n).toString().split("")
    return splitNum.map(i => parseInt(i)).reduce((acc, cur) => acc += cur)
}
