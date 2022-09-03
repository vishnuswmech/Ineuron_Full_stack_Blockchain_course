let array_of_numbers = [1, 2, 3, 4, 5, 6]
array_of_numbers.filter(value => value % 2 === 0).
map(value => Math.sqrt(value)).
forEach(value => console.log(value))
