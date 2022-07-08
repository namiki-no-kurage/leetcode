type romanNumeralsType = {
  symbol: string
  value: number
}

const romanNumerals: romanNumeralsType[] = [
  {symbol: "I", value: 1},
  {symbol: "V", value: 5},
  {symbol: "X", value: 10},
  {symbol: "L", value: 50},
  {symbol: "C", value: 100},
  {symbol: "D", value: 500},
  {symbol: "M", value: 1000}
]

const romanToInt = (s: string) => {
  let isSkip = false
  const arr = s.split("")
  const ret = arr.reduce((acc, v, i) => {
    if (isSkip) {
      isSkip = false
      return acc + 0
    }
    const currentNum = romanNumerals.find( ({symbol}) => symbol === v )?.value ?? 0
    const nextNum = romanNumerals.find( ({symbol}) => symbol === arr[i + 1])?.value ?? 0
    const addNum = nextNum > currentNum ? nextNum - currentNum : currentNum
    isSkip = nextNum > currentNum
    return acc + addNum
  }, 0)
  return ret
}
