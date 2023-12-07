/** const let 等の変数宣言*/

var var1 = "var変数";
console.log(var1);

// var変数は上書き可能
var1 = "var変数を上書き";
console.log(var1);

// // var変数は再宣言可能
var var1 = "var変数を再宣言";
console.log(var1);

let val2 = "let変数";
console.log(val2);

// val2 = "let変数を上書き";
console.log(val2);

let val2 = "let変数を再宣言";

// const val3 = "const変数";
console.log(val3);

// val3 = "const変数を上書き";
console.log(val3);

// const val3 = "const変数を再宣言";
console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能

const val4 = {
  name: "ジャケえ",
  age: 31,
};
console.log(val4);
val4.name = "jack";
val4.address = "hiroshima";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

const name = "じゃけえ";
const age = 31;

// 私の名前はじゃけぇです。年齢は31歳です。

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */

// 従来の関数

function func1(str) {
  return str;
}

const func1 = function func1(str) {
  return str;
};

console.log(func1("func1です"));

const func2 = (str) => {
  return str;
};

// 引数１個の場合は括弧の省略が可能
// lintで戻されはする
const func2 = (str) => {
  return str;
};

//{}とreturnを変えられることも
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(11, 2));

// オブジェクトを返却する場合など複数行での定義もできる
const func3 = (num1, num2) => ({
  hoge: num1,
  fuga: num2,
});

console.log(func3(10, 20));

//従来の関数とアロー関数の文法や中身なども違います

/*
 * 分割代入
//  */

const myProfile = {
  name: "じゃけぇ",
  age: 31,
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

//　必要な情報だけ取り出す
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);

const myProfile = ["じゃけぇ", 31];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

//　自分で好きな変数名で受け取る
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);

/**
 * デフォルト値(引数、分割代入)
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();

const myProfile = {
  age: 31,
};

const { age, name = "ゲスト" } = myProfile;

console.log(age);
console.log(name);

/***
 * オブジェクトの省略機能
 */

const name = "じゃけえ";
const age = 31;

const myProfile = {
  // 変数名が一緒なら省略できる
  //name: name,
  //age: age
  name,
  age,
};

console.log(myProfile);

/**
 * スプレッド構文
 */

配列の展開;
const arr1 = [1, 2];
console.log(arr1);
// ...で配列を順に展開してくれる
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// 配列の中身わたす
sumFunc(arr1[0], arr1[1]);
// スプレッド構文でじゅんじゅんに頭から渡してる
sumFunc(...arr1);

まとめる;
const arr2 = [1, 2, 3, 4, 5];
// 分割代入
// 最初は1つずつ、次も一つずつ、その次から最後までは配列オブジェクトとして
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];

// 配列のコピー
const arr6 = [...arr4];
arr6[0] = 100;
// 全く新しい配列として扱われる
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4; //　参照先がおなじ
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

// for分
const nameArr = ["田中", "山田", "じゃけぇ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// map
nameArr.map((name) => {
  console.log(name);
});

// // 新しい配列の生成
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// 新しい配列の生成をアロー関数で簡潔にかき直す
nameArr.map((name) => console.log(name));

// // 奇数のみ取り出して扱う
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const nameArr = ["田中", "山田", "じゃけぇ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

// // mapでかき直す
nameArr.map((name, index) => {
  console.log(`${index + 1}番目は${name}です`);
});

// // アロー関数
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// mapでかき直す
// UIのだしわけでも結構使う　reactでも
const newnameArr = nameArr.map((name) => {
  const jake = "じゃけぇ";
  if (name == jake) {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newnameArr);
nameArr.map((name, index) => {
  console.log(`${index + 1}番目は${name}です`);
});

/**
 * 三項演算子
 */

// ある条件 ? 条件がtrueの場合 : 条件がfalseの場合
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

const num = "1300";
// // 数値に使えるメソッド(3桁区切りにしてくれる)
// // 文字列だとただ文字列が変換される
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!" : "許容範囲内です";
};

// console.log(checkSum(40, 50));

/**
 * 論理演算子の本当に身を知ろう
 */
//ABC truthy
//0 falsy
//10 truthy
//undefined falsy
// null falsy
// false falsy
// NaN falsy
// "" falsy
// [] truthy
// {} truthy
const val = {};
if (val) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//||
const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

//// nullはfalcy なので 以下のようにできる
const num = 0;

//// || は左側がtruthyの時その時点で返却する
//// 左にくるものがfalsyだったら右側を実行
//// 左にくるものがtruthyだったらその時点で返却
const fee = num || "金額未設定です";
console.log(fee);

const num2 = NaN;
// || は左側がfalsyの時その時点で返却する
// 左にくるものがfalsyだったらその時点で返却
// 左にくるものがtruthyだったら右側を実行
const fee = num2 && "何か設定されました";
console.log(fee);
