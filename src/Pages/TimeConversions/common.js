let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];

const countriesJsonFileLocation = "../../Assets/Json/Countries.json";
const jsonFileLocation = "../../Assets/Json/Currencies.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");

/* modes */
let ascendingNamesMode = false;
let descendingNamesMode = false;
let ascendingUnitsMode = false;
let descendingUnitsMode = false;
let ascendingCodesMode = false;
let descendingCodesMode = false;

/* Renderer */
function render()
{
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingUnitsMode) sortAscendingUnits();
	else if(descendingUnitsMode) sortDescendingUnits();
	else if(ascendingCodesMode) sortAscendingCodes();
	else if(descendingCodesMode) sortDescendingCodes();

	countriesTable.innerHTML = "";

	var i = 0;
	currentTableList.forEach(countryData => {
		i++;
		let htmlContent = `
			<tr>
			<th scope="row">${i}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			<td>${countryData[3]}</td>
			<td>${countryData[4]}</td>
			<td>${countryData[5]}</td>
			</tr>
		`;

		countriesTable.innerHTML += htmlContent;
	});

	/* Reload the search section if it is activated so that it will also be sorted or filtered */
	if(!searchSection.classList.contains("hidden"))
		search(searchBox.value);
}

/* Default renderer - played at the beginning */
function defaultRender(){
	countriesTable.innerHTML = "";
	currentTableList = [];

	let listOfCountries = [];
	fetch(countriesJsonFileLocation)
	.then(response => response.json())
	.then(countries => {
		continents.forEach(continent => {
			countries[continent].forEach(country => {
				listOfCountries.push([country, continent]);
			});
		});
	})
	.catch(error => {
		console.error("Error:", error);
	});

	var i = 0;
	fetch(jsonFileLocation)
		.then(response => response.json())
		.then(currency => {
			countriesTable.innerHTML = "";

			listOfCountries.forEach(countryData => {
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${currency[countryData[0]].currency}</td>
					<td>${currency[countryData[0]].unit}</td>
					<td>${currency[countryData[0]].symbol}</td>
					<td>${currency[countryData[0]].code}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
				currentTableList.push([countryData[0], countryData[1], currency[countryData[0]].currency, currency[countryData[0]].unit, currency[countryData[0]].symbol, currency[countryData[0]].code]);
			});
		})
	.catch(error => {
		console.error('Error:', error);
	});
}

/* Functions */
function removeItem(list, itemToRemove) {
  const index = list.indexOf(itemToRemove);
  if (index !== -1) {
    list.splice(index, 1);
  }
  return list;
}