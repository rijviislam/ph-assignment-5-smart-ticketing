console.log("connected!");
let seatArr = [];
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

const seatPlan = document.getElementsByClassName("kbd");

for (const eachSeat of seatPlan) {
  eachSeat.addEventListener("click", () => {
    const getSeatId = eachSeat.innerText;
    setSeatBgColor(getSeatId);
    setTextColor(getSeatId);
    console.log(getSeatId);
    document.getElementById("availableSeat").innerText =
      totalavailableSeats -= 1;
    document.getElementById("countSeat").innerText = totalCountedSeats += 1;

    const seatTitile = document.getElementById("seatTitle");

    eachSeat.setAttribute("disabled", "true");

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
  });
}

applyBtn.addEventListener("click", () => {
  const inputValue = input.value;
  const totalTicketPrice = document.getElementById("totalPrice").innerText;
  const totalTicketFare = parseInt(totalTicketPrice);
  const grandTotalPrice = document.getElementById("grandTotal");
  const inputApply = document.getElementById("inpApply");
  console.log(totalTicketFare);

  //   NEW 15 DISCOUNT CALCULATION //
  if (inputValue === "New15") {
    if (totalTicketFare >= 550) {
      const discountPrice = totalTicketFare * 0.15;
      const totalGrandPrice = totalTicketFare - discountPrice;
      grandTotalPrice.innerText = totalGrandPrice;
      inputApply.classList.add("hidden");
    } else {
      return alert(
        "Please purchease your ticket then you will get a discount!"
      );
    }
    console.log(totalTicketFare);
  } else if (inputValue === "Couple 20") {
    if (totalTicketFare >= 550) {
      const discountPrice = totalTicketFare * 0.15;
      const totalGrandPrice = totalTicketFare - discountPrice;
      grandTotalPrice.innerText = totalGrandPrice;
      inputApply.classList.add("hidden");
    } else {
      return alert(
        "Please purchease your ticket then you will get a discount!"
      );
    }

    //   COUPLE 20 DISCOUNT CALCULATION //

    console.log(totalTicketFare);
  } else {
    return alert("invalid coupon code!");
  }

  //   console.log(inputValue);
});
