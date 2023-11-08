document.getElementById('wetterButton').addEventListener('click', function (e) {
	const stadt = document.getElementById('stadt').value;
	fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${stadt}&limit=1&appid=0e4194c846936b540bce21b6b2a47fb9`)
		.then((response) => response.json())
		.then((data) => {
			if (data.length > 0) {
				const { lat, lon } = data[0];
				const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=0e4194c846936b540bce21b6b2a47fb9&units=metric&lang=de`;
				return fetch(apiUrl);
			} else {
				throw new Error('Stadt nicht gefunden.');
			}
		})
		.then((response) => response.json())
		.then((data) => {
			const aktuell = data.current;
			const vorhersage = data.daily.slice(1, 6); // die nächsten 5 Tage, ohne den heutigen Tag

			let wetterAktuellHTML = `
            <h2>Aktuelles Wetter in ${stadt}</h2>
            <p>Temperatur: ${aktuell.temp} °C</p>
            <p>Windgeschwindigkeit: ${aktuell.wind_speed} m/s</p>
            <p>Luftfeuchtigkeit: ${aktuell.humidity}%</p>

            <p>Weitere Infos: ${aktuell.weather[0].description}</p>
            `;
			document.getElementById('aktuellesWetter').innerHTML = wetterAktuellHTML;

			let wetterVorhersageHTML = `
            <h2>5-Tage-Vorhersage für ${stadt}</h2>
            <table>
            <tr>
                <th>Datum</th>
                <th>Durchschnittstemperatur</th>
                <th>Regenwahrscheinlichkeit</th>
                <th>Windgeschwindigkeit</th>
                <th>Sonnenaufgang</th>
                <th>Sonnenuntergang</th>
                <th>Luftfeuchtigkeit</th>
            </tr>
            `;

			vorhersage.forEach((tag) => {
				wetterVorhersageHTML += `
            <tr>
                <td>${new Date(tag.dt * 1000).toLocaleDateString()}</td>
                <td>${tag.temp.day.toFixed(1)} °C</td>
                <td>${tag.pop * 100}%</td>
                <td>${tag.wind_speed} m/s</td>
                <td>${new Date(tag.sunrise * 1000).toLocaleTimeString()}</td>
                <td>${new Date(tag.sunset * 1000).toLocaleTimeString()}</td>
                <td>${tag.humidity}%</td>
            </tr>
            `;
			});

			wetterVorhersageHTML += `</table>`;
			document.getElementById('wetterTabelle').innerHTML = wetterVorhersageHTML;
		})
		.catch((error) => {
			console.error('Fehler beim Abrufen der Wetterdaten', error);
			document.getElementById('aktuellesWetter').innerHTML = `<p>Fehler: ${error.message}</p>`;
			document.getElementById('wetterTabelle').innerHTML = '';
		});
});
