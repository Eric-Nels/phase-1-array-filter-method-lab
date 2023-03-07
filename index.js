function findMatching(array, string) {
    return array.filter(item => item.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(item => item[0, 1] === string[0, 1])
}

function matchName(array, string) {
    return array.filter(object => object.name === string)
}