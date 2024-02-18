console.log("connected!");

let availableSeats = document.getElementById("availableSeat").innerText;
let totalavailableSeats = parseInt(availableSeats);

// console.log(totalavailableSeats)

function setSeatBgColor(seatId) {
  const seat = document.getElementById(seatId);
  seat.classList.add("seat_bg");
  console.log(seatId);
}

let countSeats = document.getElementById("countSeat").innerText;
let totalCountedSeats = parseInt(countSeats);
// console.log(totalCountedSeats);

const seatPlan = document.getElementsByClassName("kbd");

// console.log(seatPlan);
for (const eachSeat of seatPlan) {
  eachSeat.addEventListener("click", () => {
    // console.log(eachSeat.innerText);
    const getSeatId = eachSeat.innerText;
    setSeatBgColor(getSeatId);
    document.getElementById("availableSeat").innerText =
      totalavailableSeats -= 1;
    document.getElementById("countSeat").innerText = totalCountedSeats += 1;

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
    console.log(totalTicketFare);
  });
}
