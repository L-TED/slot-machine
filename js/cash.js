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

changeCredits.addEventListener("click", () => {
  const count = localStorage.getItem("cash");
  const changingCredits = prompt(
    "how much credits you wanna change to cash? 100 credits = 90 cashes"
  );
  const cashReg = /^\d+$/.test(changingCredits);

  if (cashReg) {
    localStorage.setItem("cash", +count + changingCredits * 0.9);
    credits.innerText = credits.innerText - changingCredits;
    cash.innerText = +count + changingCredits * 0.9;
  } else {
    alert("you can only type numbers");
  }
});
