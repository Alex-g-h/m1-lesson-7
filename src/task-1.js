let health = prompt('Введите число параметра "здоровье" для персонажа')
console.log('initial health: ', health, typeof health)
health = Number(health);
console.log('after convertion to number: ', health, typeof health)
if (health < 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`)
}