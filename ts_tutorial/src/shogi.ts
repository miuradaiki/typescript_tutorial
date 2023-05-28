// 駒の位置をクラスにする
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 // 横の位置、筋
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" // 縦の位置、段
type Player = "first" | "second" // 先手か後手

// 駒の位置を表す
class Position {
  constructor(
    // privateを使うことでそのクラスのみアクセス可能になる
    private suji: Suji,
    private dan: Dan
  ) {}

  // パラメータに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === "first") {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan))
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -(Math.abs(Number(position.dan) - Number(this.dan))) // 段（縦の位置は正と負を逆転させる）
      }
    }
  }
}

// 実行例
// new Position(1, '2')

// 駒を表すクラス
abstract class Piece {
  // classを作るとそのまま「型」として使える
  // protectedにすることでPieceクラスとサブクラスでアクセスできる
  protected position: Position

  constructor(
    private readonly player: Player, // 先手と後手どちらの駒かを表す
    suji: Suji,
    dan: Dan
  ) {
    // this = Piece classの中の〜
    this.position = new Position(suji,dan)
  }

  // メソッドの定義
  // 駒の移動用のメソッド
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるかどうかを判定するメソッド
  // abstractをつけて宣言しておき、サブクラスで具体的に実装する
  abstract canMoveTo(position: Position, player: Player): boolean
}

// 王将
class Osho extends Piece {
  // canMoveToについては具体的な実装が必要
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (distance.suji < 2 && distance.dan < 2)
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new Osho("first", 5, "1"),
      new Osho("second", 5, "9")
    ]
  }
}

// 例：駒を作る
// 先手のプレーヤーが1.1に駒を置く
// new Piece("first", 1, "1")
// 抽象クラスにすると上記はエラーとなる（直接newできない）

// 抽象クラス：abstract
// インスタンス化できない
// 再利用性を保つため具体的なところは継承させて決定する



