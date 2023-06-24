export default function objectSample() {
  const a: object  = {
    name: "Trahack",
    age: 28
  }
  // a.name :エラーとなる

  // オブジェクトリテラル記法
  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan"
  }

  // 特別なプロパティを扱う
  // オプショナル：？のついたプロパティ
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: "Yamada",
    firstName: "Taro"
  }

  torahack.gender = "male" // これは代入可
  // torahack.firstName = "Daiki" // これはreadonlyのため再代入できない

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: "Tokyo",
    Korea: "Seoul"
  }

  capitals.China = "Beijing"
  capitals.Canada = "Ottawa"
}

