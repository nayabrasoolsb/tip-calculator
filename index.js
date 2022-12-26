let tips = document.querySelectorAll(".tip");
function removeClass(text) {
  for (let i = 0; i < tips.length; i++) {
    const btn = tips[i];
    if (btn.innerHTML != text) {
      if (btn.classList.contains("background")) {
        btn.classList.remove("background");
      }
    }
  }
}

let currDiscount = 0;
let bill = document.querySelector("#bill");
let no_of_people = document.querySelector("#no-of-people");
function changeHandler() {
  if (!currDiscount || !bill.value || !no_of_people.value) {
    return;
  }
  let tip =
    (parseInt(currDiscount) * parseInt(bill.value)) /
    100 /
    parseInt(no_of_people.value);
  document.querySelector(".tip-price").innerHTML = tip;
  document.querySelector(".total-price").innerHTML =
    parseInt(bill.value) +
    (parseInt(currDiscount) * parseInt(bill.value)) / 100;
}

bill.addEventListener("change", changeHandler);
no_of_people.addEventListener("change", changeHandler);

tips.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (btn.classList.contains("background")) {
      btn.classList.remove("background");
    } else {
      let text = btn.innerHTML;
      removeClass(text);
      currDiscount = text.split("%")[0];
      changeHandler();
      btn.classList.add("background");
    }
  }),
);
document.querySelector(".reset").addEventListener("click", () => {
  bill.value = "";
  currDiscount = 0;
  no_of_people.value = "";
  removeClass("");
  document.querySelector(".tip-price").innerHTML = "$ 0.00";
  document.querySelector(".total-price").innerHTML = "$ 0.00";
});
