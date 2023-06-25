export default function arraySample() {
  const colors: string[] = ["red", "green", "blue"]
  colors.push("yellow")
  // colors.push(123) // これはエラーになる

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("eight") // これはエラーとなる

  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)
  // ids.push(false) // これはエラーとなる

  // イミュータブルな配列
  const commands: readonly string[] = ["git add", "git commit", "git push"]
  // commands.push("git fetch") // これはエラーとなる
  // commands[2] = "git fetch" // これはエラーとなる
}
