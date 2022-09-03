let result = function(element1, element2, element3, ...remaining_elements) {
    sum = element1 + element2 + element3
    for (j of remaining_elements) {
        sum = sum + j
}
    return sum
}
console.log(result(10, 20, 30, 40, 50))
