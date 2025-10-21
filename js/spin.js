import {
  $,
  line1,
  line2,
  line3,
  spinBtn,
  bet,
  coins,
  credits,
  cash,
  chargeCoin,
  changeCredits,
} from "./query.js";

// symbol 스핀
const symbols = ["🍉", "🍒", "🍎", "🍋", "🍀"];
const getRandomSymbol = () =>
  symbols[Math.floor(Math.random() * symbols.length)];

spinBtn.addEventListener("click", async () => {
  const getSymbols = (symbol) => {
    return (
      line1.innerText == line2.innerText &&
      line2.innerText == line3.innerText &&
      line3.innerText == symbol
    );
  };
  if (+coins.innerText > 0) {
    coins.innerText = +coins.innerText - 1;

    let interval1 = setInterval(() => {
      line1.innerText = getRandomSymbol();
    }, 100);
    let interval2 = setInterval(() => {
      line2.innerText = getRandomSymbol();
    }, 100);
    let interval3 = setInterval(() => {
      line3.innerText = getRandomSymbol();
    }, 100);

    const spinLine1 = () =>
      new Promise((res, rej) =>
        setTimeout(() => {
          clearInterval(interval1);
          line1.innerText = getRandomSymbol();
          res();
        }, 1000)
      );
    const spinLine2 = () =>
      new Promise((res, rej) =>
        setTimeout(() => {
          clearInterval(interval2);
          line2.innerText = getRandomSymbol();
          res();
        }, 1000)
      );
    const spinLine3 = () =>
      new Promise((res, rej) =>
        setTimeout(() => {
          clearInterval(interval3);
          line3.innerText = getRandomSymbol();
          res();
        }, 1000)
      );

    await spinLine1();
    await spinLine2();
    await spinLine3();
    if (getSymbols("🍀")) {
      return (credits.innerText = +credits.innerText + +bet.value * 7);
    } else if (getSymbols("🍋")) {
      return (credits.innerText = +credits.innerText + +bet.value * 3);
    } else if (getSymbols("🍎")) {
      return (credits.innerText = +credits.innerText + +bet.value * 2);
    } else if (getSymbols("🍒")) {
      return (credits.innerText = +credits.innerText + +bet.value * 1.5);
    } else if (getSymbols("🍉")) {
      return (credits.innerText = +credits.innerText + +bet.value * 1);
    }
  } else {
    credits.innerText =
      +credits.innerText - +bet.value > 0 ? +credits.innerText - +bet.value : 0;
    alert("please charge your coins first!");
  }
});
