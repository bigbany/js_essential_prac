//this
//일반 (Normal) 함수는 호출 위치에서 따라 this 정의!
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!


// const hero = {
//   name: '히어로',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }

// }

// hero.normal()
// hero.arrow()

// console.log('amy 실행')

// const amy = {
//   name: 'Amy',
//   normal: hero.normal,
//   arrow: hero.arrow
// }

// amy.normal()
// amy.arrow()

// function User(name) {
//   this.name = name
// }

// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const hero2 = new User('hero2')

// hero2.normal()
// hero2.arrow()

// console.log('timer 테스트')


// const timer = {
//   name: 'hello!',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)
//   }
// };

// timer.timeout()

//ES6 Classes

console.log('여기서 부터 classes')

const vi = {
  name: 'joker',
  normal() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)

  }
}

vi.normal()
vi.arrow()

// function User(first,last){
//   this.firstName =first,
//   this.lastName= last
// }

// User.prototype.getFullName =function(){
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`

//   }
// }

// const hero = new User('hero', 'park')
// const amy = new User('Amy', 'Clarke')
// const Nero = new User('Nero', 'Smith')

// console.log(hero)
// console.log(amy.getFullName())
// console.log(Nero.getFullName())

class Vehicle{
  constructor(name, wheel){
    this.name=name
    this.wheel= wheel
  }
}

class Bicycle extends Vehicle{
  constructor(name,wheel){
    super(name,wheel)
  }
}

class Car extends Vehicle{
  constructor(name, wheel,license){
    super(name,wheel)
    this.license =license
    
  }
}