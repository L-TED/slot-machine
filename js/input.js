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

spinBtn.disabled = true;

bet.addEventListener("click", () => {
  alert("minimum bet is 100 credits to spin");
});

bet.addEventListener("input", () => {
  const betReg = /^\d+$/.test(bet.value);

  if (bet.value == "" || +bet.value > +credits.innerText || !betReg) {
    spinBtn.disabled = true;
  } else {
    spinBtn.disabled = false;
  }
  if (+bet.value > +credits.innerText) {
    alert("please do not type more than you have");
  }
});
