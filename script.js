const images = [
    'images/cruz_azul.png',
    'images/dodgers.png',
    'images/cowboys.png',
    'images/warriors.png',
    'images/realmadrid.png'
];

const descriptions = [
    '9 veces campeones de la liga mexicana de fútbol, y el único que nació grande. Fundado en 1927, con figuras como Miguel Marín, Cesar Delgado, Jesus Corona, entre otros.',
    '7 veces ganadores de la serie mundial, con grandes figuras mexicanas en su historia, como el recien fallecido Fernando Valenzuela, o el campeon en 2020 Julio Urías.',
    'A pesar de llevar 30 años sin ganar el super bowl, los vaqueros de Dallas siguen siendo un referente del futbol americano, con quarterbacks como Troy Aikman, Tony Romo y Dak Prescott.',
    '5 veces campeones de la NBA, teniendo dentro del equipo a uno de los mejores jugadores de la historia de la NBA Stephen Curry, los warriors se han consolidado como uno de los equipos mas importantes de la liga.',
    'No les hace falta una descripción a ellos.'
];

const names = [
    "Cruz Azul",
    "Dodgers",
    "Cowboys",
    "Golden State",
    "Real Madrid"
];

let currentIndex = 0;

document.getElementById('change-image').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('team-image').src = images[currentIndex];
    document.getElementById('team-name').textContent = names[currentIndex];
    document.getElementById('team-description').textContent = descriptions[currentIndex];
});
