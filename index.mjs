document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
 測試JavaScript
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// 普通function沒有bind this時，在這種情況下會發生this錯誤
// 因為普通function的this是被呼叫時的context決定的
// this.handleClick被呼叫時的context的this是指button
// class MyClass {
//   constructor() {
//     this.value = 42;
//     this.handleClick = function () {
//       console.log(this.value); 
//       // 印出來會是空的
//     };
//   }

//   registerClickHandler(element) {
//     element.addEventListener('click', this.handleClick);
//   }
// }

// const instance = new MyClass();
// const button = document.getElementById('myButton');

// instance.registerClickHandler(button);


// 普通function在constructor中bind this之後，this是指instance
// class MyClass {
//   constructor() {
//     this.value = 42;
//     // 宣告寫在這裡也可以
//     // this.handleClick = function () {
//     //   console.log(this.value); 
//     // };
//     // 在instanciate當下，綁定了這個instance
//     // bind回傳的是一個funtion，所以這時確保了this.handleClick的context已經被固定，不會跑掉了
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//       console.log(this.value); 
//       // 印出來是42
//   };
//   registerClickHandler(element) {
//     element.addEventListener('click', this.handleClick);
//   }
// }

// const instance = new MyClass();
// const button = document.getElementById('myButton');

// instance.registerClickHandler(button);


// arrow function：不需要bind this就可以正確綁定了
class MyClass {
  constructor() {
    this.value = 42;
    // 也可以寫在這裡
    // this.handleClick = () => {
    //   console.log(this.value); // 正確：這裡的 this 指向 MyClass 的實例
    // };
  }
    // 可以寫在這裡
    // codesandbox的parcel會報錯
    // 在package.json加上"@babel/core": "7.2.0"應該可以解決
    handleClick = () => {
      console.log(this.value); // 正確：這裡的 this 指向 MyClass 的實例
      // 印出42
    };

  registerClickHandler(element) {
    element.addEventListener('click', this.handleClick);
  }
}

const instance = new MyClass();
const button = document.getElementById('myButton');

instance.registerClickHandler(button);