export default function tupleSample() {
  let response: [number, string] = [200, "OK"]
  // response = [400, "Bad Request", "Email parameter is missing"] // これはエラーとなる
  response = [400, "Bad Request"] // OK

  // 可変長引数を使ったタプル
  const girlfrirends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
  girlfrirends.push("Teruko")
}
