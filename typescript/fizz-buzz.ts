function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const fizzBuzz = (n: number): string[] => {
    const answer = [...range(0, n)].map((v) => {
        v++
        if (!(v % 3) && !(v % 5)) return "FizzBuzz"
        if (!(v % 3)) return "Fizz"
        if (!(v % 5)) return "Buzz"
        return "" + v
    })
    return answer
}
