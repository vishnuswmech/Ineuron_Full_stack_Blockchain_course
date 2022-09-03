let result = function(element1, element2, element3, element4, element5) {
sum = element1 + element2 + element3 + element4 + element5
return sum
}
let [element1, ...remaining_elements] = [10, 20, 30, 40, 50]
console.log(result(element1, ...remaining_elements))
