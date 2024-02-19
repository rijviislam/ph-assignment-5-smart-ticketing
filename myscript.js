console.log("connected!");
let availableSeats = document.getElementById("availableSeat").innerText;
let totalavailableSeats = parseInt(availableSeats);
let countSeats = document.getElementById("countSeat").innerText;
let totalCountedSeats = parseInt(countSeats);
const input = document.getElementById("inp");
const applyBtn = document.getElementById("apply");

function setSeatBgColor(seatId) {
  const seat = document.getElementById(seatId);
  seat.classList.add("seat_bg");
}

function setTextColor(eId) {
  const settext = document.getElementById(eId);
  settext.classList.remove("kdbTextColor");
  settext.classList.add("setTextColor");
}

const seatPlan = document.querySelectorAll(".kbd");
let buttonCounter = 0;
for (const eachSeat of seatPlan) {
  eachSeat.addEventListener("click", () => {
    buttonCounter++;
    if (buttonCounter <= 4) {
      const getSeatId = eachSeat.innerText;
      setSeatBgColor(getSeatId);
      setTextColor(getSeatId);

      document.getElementById("availableSeat").innerText =
        totalavailableSeats -= 1;
      document.getElementById("countSeat").innerText = totalCountedSeats += 1;
      eachSeat.setAttribute("disabled", "true");
      const seatTitile = document.getElementById("seatTitle");
      const div = document.createElement("div");
      div.classList.add("seat_flex");
      seatTitile.appendChild(div);
      const p1 = document.createElement("p");
      p1.innerText = getSeatId;
      div.appendChild(p1);
      const p2 = document.createElement("p");
      p2.innerText = "Economoy";
      p2.classList.add("economoy");
      div.appendChild(p2);
      const p3 = document.createElement("p");
      p3.innerText = "550";
      div.appendChild(p3);

      let ticketTotal = document.getElementById("totalPrice");
      let ticketPrice = ticketTotal.innerText;
      let totalTicketFare = parseInt(ticketPrice);
      totalTicketFare += 550;
      ticketTotal.innerText = totalTicketFare;

      const grandTotalPriceSeat = document.getElementById("grandTotal");
      let granPrice = grandTotalPriceSeat.innerText;
      let grandTotalFear = parseInt(granPrice);
      grandTotalFear += 550;
      grandTotalPriceSeat.innerText = grandTotalFear;
    } else {
      return alert("You only select up to 4 seat");
    }
  });
}

applyBtn.addEventListener("click", () => {
  if (buttonCounter >= 4) {
    const inputValue = input.value;
    const totalTicketPrice = document.getElementById("totalPrice").innerText;
    const totalTicketFare = parseInt(totalTicketPrice);
    const grandTotalPrice = document.getElementById("grandTotal");
    const inputApply = document.getElementById("inpApply");

    if (inputValue === "New15") {
      const discountPrice = totalTicketFare * 0.15;
      const totalGrandPrice = totalTicketFare - discountPrice;
      grandTotalPrice.innerText = totalGrandPrice;
      inputApply.classList.add("hidden");
    } else if (inputValue === "Couple 20") {
      const discountPrice = totalTicketFare * 0.2;
      const totalGrandPrice = totalTicketFare - discountPrice;
      grandTotalPrice.innerText = totalGrandPrice;
      inputApply.classList.add("hidden");
    } else {
      return alert("invalid coupon code!");
    }
  } else {
    return alert("you need to select 4 seat");
  }
});

const inputName = document.getElementById("inputName");
const inputNum = document.getElementById("phone");
const inputEmail = document.getElementById("inputEmail");

const inputButton = document.getElementById("inputButton");

function handleInput() {
  if (buttonCounter >= 1) {
    const inputNumVal = inputNum.value;
    if (inputNumVal.length == 11) {
      my_modal_5.showModal();
      inputName.value = "";
      inputNum.value = "";
      inputEmail.value = "";
      inputButton.classList.remove("bg-[#1DD100]");
      inputButton.classList.add("disabled");
      inputButton.setAttribute("disabled", "true");
    } else {
      return alert("Invalid Phone Number");
    }
  } else {
    return alert("you neet to select one seat");
  }
}
