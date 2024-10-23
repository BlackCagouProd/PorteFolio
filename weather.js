const apiKey = '38749ab830be5aac618b1f6d6b49ce2c';
const city = 'Angers';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// Fonction pour choisir l'icône en fonction des conditions météo
function getWeatherIcon(weatherMain) {
  switch (weatherMain) {
    case 'Clear':
      return '☀️'; // Soleil
    case 'Clouds':
      return '☁️'; // Nuage
    case 'Rain':
    case 'Drizzle':
      return '🌧️'; // Pluie
    case 'Thunderstorm':
      return '⛈️'; // Orage
    case 'Snow':
      return '❄️'; // Neige
    case 'Mist':
    case 'Fog':
    case 'Haze':
      return '🌫️'; // Brouillard
    default:
      return '🌡️'; // Icône par défaut
  }
}

// Faire une requête GET à l'API OpenWeatherMap
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Extraire les informations pertinentes (exemple : température et météo)
    const temperature = data.main.temp;
    const weatherMain = data.weather[0].main;
    const weatherDescription = data.weather[0].description;

    // Afficher les informations sur la page
    const weatherInfo = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');

    weatherInfo.textContent = `La température à ${city} : ${temperature}°C, ${weatherDescription}`;
    weatherIcon.textContent = getWeatherIcon(weatherMain);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
