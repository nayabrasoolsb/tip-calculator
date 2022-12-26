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
  if (!currDiscount && !bill.innerHTML && !no_of_people.innerHTML) {
    return;
  }
  console.log(currDiscount);
  console.log(bill.value);
  let tip =
    (parseInt(currDiscount) * parseInt(bill.value)) /
    100 /
    parseInt(no_of_people.value);
  document.querySelector(".tip-price").innerHTML = tip;
  document.querySelector(".total-price").innerHTML = parseInt(bill.value) + parseInt(tip);
}

bill.addEventListener("change", changeHandler);
no_of_people.addEventListener("change", changeHandler);

tips.forEach((btn) =>
  btn.addEventListener("click", () => {
    // console.log(btn);
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
