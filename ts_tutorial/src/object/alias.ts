export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan"
  }

  // 合併型(union)と交差型(intersection)
  // 合併型：型Aか型Bどちらかの型を持つ
  // 交差型：型Aと型Bの両方を持つ
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型...KnightかWizardの型を持つ
  // 注意）オブジェクトに使うときはどっちのプロパティも持てるので注意
  type Adventurer = Knight | Wizard

  // 交差型...KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: "木の棒",
    swordSkill: "三連切り"
  }

  // Wizard寄りの冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: "木の枝",
    magicSkill: "ファイヤボール"
  }

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: "銀の剣",
    swordSkill: "三連切り",
    magicSkill: "ファイヤボール"
  }
}
