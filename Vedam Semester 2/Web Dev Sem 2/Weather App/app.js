const API_KEY = "3ffa041182664e06b5f44837262301";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('header form');
  const input = document.querySelector('input[name="location"]');
  const card = document.querySelector('.card');

  // Load default city on page load
  getWeather('New Delhi');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    getWeather(city);
  });

  function getWeather(city) {
    // Show loading spinner
    card.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>Loading weather data...</p>
      </div>
    `;

    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        // Format the date/time
        const localtime = data.location.localtime;
        const date = new Date(localtime);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[date.getDay()];
        const timeStr = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const dateStr = localtime.split(' ')[0];

        card.innerHTML = `
          <div class="temp">${data.current.temp_c} °C</div>
          <div>
            <div class="place">${data.location.name}, ${data.location.country}</div>
            <div class="meta">${timeStr} ${dayName} ${dateStr}</div>
          </div>
          <div class="icon">
            <img src="https:${data.current.condition.icon}" alt="Weather Icon">
            <div class="meta">${data.current.condition.text}</div>
          </div>
        `;
      })
      .catch(error => {
        card.innerHTML = `<div class="place">City not found ❌</div>`;
        console.error(error);
      });
  }
});

