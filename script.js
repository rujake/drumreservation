let loggedIn = false;
const reservations = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "KimPark" && password === "ParkKim") {
        loggedIn = true;
        document.getElementById("login-section").style.display = "none";
        document.getElementById("reservation-section").style.display = "block";
    } else {
        alert("Login failed. Please try again.");
    }
}

function makeReservation() {
    if (!loggedIn) {
        alert("Login required to make a reservation.");
        return;
    }

    const name = document.getElementById("name").value;
    const month = document.getElementById("month").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Perform validation and reservation logic here

    // Add the reservation to the list
    reservations.push({ name, month, date, time });

    // Update the reservation list display
    updateReservationList();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("month").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}

function updateReservationList() {
    const reservationList = document.getElementById("reservation-list");
    reservationList.innerHTML = "";

    reservations.forEach((reservation) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${reservation.name} - ${reservation.month} ${reservation.date}, ${reservation.time}`;
        reservationList.appendChild(listItem);
    });
}

function logout() {
    loggedIn = false;
    reservations.length = 0; // Clear reservations
    document.getElementById("login-section").style.display = "block";
    document.getElementById("reservation-section").style.display = "none";
    document.getElementById("reservation-management-section").style.display = "none";
}
