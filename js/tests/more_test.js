export const tests = []
const t = (f) => tests.push(f)

// more is declared and is a function and take 1 argument
t(() => typeof more === 'function')
t(() => more.length === 1)

// more works with positive numbers
t(() => more(5) === 6)
t(() => more(more(more(5))) === 8) 

// more works with negative numbers
t(() => more(-5) === -4)
t(() => more(more(more(-5))) === -2)

const rand = Math.random()
t(() => more(rand) === rand + 1)

Object.freeze(tests)