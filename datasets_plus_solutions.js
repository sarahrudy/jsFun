// After jsFun kickoff, it took me a while to get started because even though I felt comfortable with the iterator methods and what they do, I was unfamiliar with the syntax. I created this solutions file so you have a better idea what the syntax looks like as you walk through them. Then delete the answers and start from scratch over and over again until you don't have to look at the solutions anymore. 

// Copy and paste each dataset into a separate rep.l to practice -- like this: https://replit.com/@SarahRudy/1-Kitties#index.js

// ---- KITTIES ----
const kitties = [
  {
    name: 'Felicia',
    age: 2,
    color: 'grey'
  },
  {
    name: 'Tiger',
    age: 5,
    color: 'orange'
  },
  {
    name: 'Snickers',
    age: 8,
    color: 'orange'
  },
  {
    name: 'Max',
    age: 1,
    color: 'tuxedo'
  }
]

// TASK: return an array of just the names of kittes who are orange 

// OUTPUT:  ['Tiger', 'Snickers']

function orangeKittyNames() {
  const orangeKitties = kitties.filter((kitty) => {
    return kitty.color === 'orange'
  }).map((kitty) => kitty.name)
    return orangeKitties;
}
orangeKittyNames()

// TASK: sort kitties by their age

// ascending 
function sortByAge() {
  const sortedKitties = kitties.sort((a, b) => a.age - b.age)
    return sortedKitties 
}
sortByAge()

// decending 
function sortByAge() {
  const sortedKitties = kitties.sort((a, b) => b.age - a.age)
    return sortedKitties 
}
sortByAge()

// TASK: return an array of kitties who have all grown up by 2 years e.g.

// output: [{
  //   name: 'Felicia',
  //   age: 4,
  //   color: 'grey'
  // },
  // {
  //   name: 'Tiger',
  //   age: 7,
  //   color: 'orange'
  // },
  // ...etc]

function growUp() {
  const plus2 = kitties.map(kitty => {
    kitty.age = kitty.age + 2
      return kitty
  })
  return plus2
}
growUp() 



















