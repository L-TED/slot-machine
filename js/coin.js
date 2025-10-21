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

chargeCoin.addEventListener("click", () => {
  if (confirm("are you sure you wanna recharge coins? 100 credits = 5 coins")) {
    if (+credits.innerText >= 200) {
      credits.innerText = +credits.innerText - 100;
      coins.innerText = +coins.innerText + 5;
    } else {
      alert(
        "you have not enough credits to charge coins! you must have at least 200 credits to recharge"
      );
    }
  } else {
    alert("cancled");
  }
});
