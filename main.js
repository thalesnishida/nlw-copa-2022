function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
    createCard(
      "28/11",
      "segunda",
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")) +
    createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))



let mainColor = document.getElementById("bo");

let dotYellow = document.getElementById("dot-yellow").addEventListener('click', function(){
  mainColor.classList.remove('blue');
  mainColor.classList.remove('green');
  mainColor.classList.toggle('yellow')
});

let dotGreen = document.getElementById("dot-green").addEventListener('click', function(){
  mainColor.classList.remove('blue');
  mainColor.classList.remove('yellow');
  mainColor.classList.toggle('green');
});

let dotBlue = document.getElementById("dot-blue").addEventListener('click', function(){
  mainColor.classList.remove('green');
  mainColor.classList.remove('yellow');
  mainColor.classList.toggle('blue');
});

