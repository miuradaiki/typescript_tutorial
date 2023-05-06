// tutorial
// プリミティブ型
// string, number, boolean, symbol, bigint, null, undefinedがある
// const a: number = 3;
// 以下はエラーになる: Type 'number' is not assignable to type 'string'.
// const b: string = a;

// --strictNullChecksをオンにしていない場合は、nullとundefinedは他の型の値として扱われる
// const c: null = null;
// strictNullChecksがオンになっている場合はエラー
// このオプションは常にオンにするのがいい
// const d: string = a;

// リテラル型
// プリミティブ型を細分化したもの
// リテラル型には文字列のリテラル型と数値のリテラル型と真偽値のリテラル型がある

// 文字列のリテラル型はstringの部分型であり、文字列のリテラル型を持つ値はstring型として扱うことができる
// const e: 'foo' = 'foo'; // fooがstringの部分型とみなされている
// const f: string = e; // string型への代入が可能

// リテラル型と型推論
// const g = 'foo'; // aは'foo'型を持つ
// エラー: Type '"foo"' is not assignable to type '"bar"'.
// const h: 'bar' = g;
// ただし、これはconstを使って変数を宣言した場合
// JavaScriptにおけるconstは変数に再代入されないことを保証するものであるため

// constではなくletやvarを使って変数を宣言した場合
// 最初に'foo'が入っていたからといって変数の型を'foo'型としてしまっては、他の文字列を代入することができなくて不便
// そのため、letやvarで変数が宣言される場合、推論される型はリテラル型ではなく対応するプリミティブ型全体に広げられる
// let a = 'foo'; // aはstring型に推論される
// const b: string = a;
// エラー: Type 'string' is not assignable to type '"foo"'.
// const c: 'foo' = a;
// なお、letで宣言する場合も型注釈をつければリテラル型を持たせることができる

// オブジェクト型
// interfaceでオブジェクト型に"MyObj"という名前をつけている
interface MyObj {
  foo: string;
  bar: number;
}

const a: MyObj = {
  foo: 'foo',
  bar: 3,
};

// 配列型
const foo: number[] = [0, 1, 2, 3];
foo.push(4);
// TypeScriptにジェネリクスが導入されて以降はArray<number>と書くことも可能

// 関数型
// 例）(foo: string, bar: number)=> boolean
// 上記の場合、第1引数としてstring型の、第2引数としてnumber型の引数をとり、返り値としてboolean型の値を返す関数の型となる
const f: (foo: string)=> number = func;

function func(arg: string): number {
  return Number(arg);
}

// void型
// 主にに関数の返り値の型として使われ「何も返さない」ことを表す
// JavaScriptでは何も返さない関数（return文が無い、もしくは返り値の無いreturn文で返る）はundefinedを返すことになっている
// =void型というのはundefinedのみを値にとる型
// その逆はできない、つまり「void型の値はundefined型の変数に代入できない」
// const a: void = undefined;
// エラー: Type 'void' is not assignable to type 'undefined'.
// const b: undefined = a;

// any型
// any型は何でもありな型
// つまりプログラマの敗北（=型システムを無視しているため）

// クラスの型
// この例では、クラスFooを定義したことで、Fooという型も同時に定義される
class Foo {
  method(): void {
    console.log('Hello, world!');
  }
}

const obj: Foo = new Foo();

// ジェネリクス
// 型名をFoo<S, T>のようにする
// =名前のあとに< >で囲った名前の列を与えることで、型の定義の中でそれらの名前を型変数として使うことができる
// interface Foo<S, T> {
//   foo: S;
//   bar: T;
// }

// const obj: Foo<number, string> = {
//   foo: 3,
//   bar: 'hi',
// };

// タプル型
// タプル型は[string, number]のように書き複数の値を保持できる
// const foo: [string, number] = ['foo', 5];

// const str: string = foo[0];

// function makePair(x: string, y: number): [string, number] {
//   return [x, y];
// }

// 可変長タプル型は最後に...(配列型)という要素を書いたタプル型として表される
// 例）type NumAndStrings = [number, ...string[]];
// ただし、...を使えるのはタプル型のどこかに1回だけ

// オプショナルな要素を持つタプル型
// 例）type T = [string, number?];
// この場合、numberはあってもなくてもいい

// union型
// union型は値が複数の型のどれかに当てはまるような型を表している
let value: string | number = 'foo';

// オブジェクト型でもunion型を作ることが可能
interface HogeHoge {
  foo: string;
  bar: number;
}
interface PiyoPiyo {
  foo: number;
  baz: boolean;
}

type HogeHogePiyoPiyo = HogeHoge | PiyoPiyo;

const unionObj: HogeHogePiyoPiyo = {
  foo: 'hello',
  bar: 0,
};

// intersection型
// 2つの型T, Uに対してT & Uと書くと、TでもありUでもあるような型を表す
interface Hoge {
  foo: string;
  bar: number;
}
interface Piyo {
  foo: string;
  baz: boolean;
}

const intersectionObj: Hoge & Piyo = {
  foo: 'foooooooo',
  bar: 3,
  baz: true,
};

// オブジェクト型（再訪）
// ?を付けて宣言したプロパティは省略可能になる
// interface MyObj {
//   foo: string;
//   bar?: number;
// }

// let obj: MyObj = {
//   foo: 'string',
// };

// obj = {
//   foo: 'foo',
//   bar: 100,
// };

// ?修飾子を付けられたプロパティを取得する場合は自動的にundefined型とのunion型になる
function func(obj: MyObj): number {
  return obj.bar !== undefined ? obj.bar * 100 : 0;
}
// このように使うときにはundefinedチェックが必要となる

// exactOptionalPropertyTypesコンパイラオプション
// デフォルトではこのオプションは無効
// このオプションが無効の場合は、bar?: number;というのはbar?: number | undefined;と書いたのと同じ意味になる
// オプショナルなプロパティには明示的にundefinedを入れることができる

// exactOptionalPropertyTypesが有効の場合
// オプショナルなプロパティにundefinedを入れることができなくなる


// 修飾子：readonly
// これを付けて宣言されたプロパティは再代入できなくなる
// ただし、readonlyでない型を経由して書き換えできるので注意


// asによるダウンキャスト
// 式 as 型と書く
// 型安全ではないが、たまに必要となる場面がある
// ダウンキャストというのは、派生型の値を部分型として扱うためのもの
const value = rand();

const str = value as number;
console.log(str * 10);

function rand(): string | number {
    if (Math.random() < 0.5) {
        return 'hello';
    } else {
        return 123;
    }
}

// readonlyな配列とタプル
// arrは readonly number[] 型
const arr: readonly number[] = [1, 2, 3];

// arrの要素を書き換えるのは型エラー
// エラー: Index signature in type 'readonly number[]' only permits reading.
arr[0] = 100;

// readonly配列型にはpushなどの書き換えメソッドは存在しない
// エラー: Property 'push' does not exist on type 'readonly number[]'
arr.push(4);

// readonlyな配列のプロパティを書き換えようとするとエラーになる

// readonlyなタプルについても同様に、タプル型の前にreadonlyを付けて表現します。
const tuple: readonly [string, number] = ['foo', 123];
// エラー: Cannot assign to '0' because it is a read-only property.
tuple[0] = 'bar';
