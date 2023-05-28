export default function genericsBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("Generics basic sample 1:", stringReduce(["May ", "the ", "force ", "be ", "with ", "you"], ""))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("Generics basic sample 2:", numberReduce([100, 200, 300], 1000))

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("Generics basic sample 3:", genericStringReduce(["Make ", "the ", "TS  ", "greate ", "again "], ""))

  const genericNumberReduce: GenericReduce<number> = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("Generics basic sample 4:", genericNumberReduce([1000, 2000, 3000], 10000))

  // 色々なジェネリック型の定義方法
  // 完全な呼び出しシグネチャ（ここのシグネチャにジェネリック型を割り当てる）
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  // 呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4<U> = (array: U[], initialValue: U) => U
}

