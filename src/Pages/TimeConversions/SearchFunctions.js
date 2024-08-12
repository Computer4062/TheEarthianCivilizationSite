function searchName(text){
	let countryData = "";
	for(let i = 0; i < currentTableList.length; i++)
	{
		if(text.toLowerCase() == currentTableList[i][0].toLowerCase())
		{
			countryData = currentTableList[i];
			break;
		}
	}

	searchSection.classList.remove("hidden");

	if(countryData)
	{
		const timeAndDate = getTimeAndDate(countryData[2]);

		searchTable.innerHTML += `
			<tr>
			<th scope="row">${1}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			<td>${timeAndDate[0]}</td>
			<td>${timeAndDate[1]}</td>
			</tr>
		`;

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchZone(text);
	}
}

function searchZone(text){
	let countryData = "";
	for(let i = 0; i < currentTableList.length; i++)
	{
		if(text.toLowerCase() == currentTableList[i][2].toLowerCase())
		{
			countryData = currentTableList[i];
			break;
		}
	}

	searchSection.classList.remove("hidden");

	if(countryData)
	{
		const timeAndDate = getTimeAndDate(countryData[2]);

		searchTable.innerHTML += `
			<tr>
			<th scope="row">${1}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			<td>${timeAndDate[0]}</td>
			<td>${timeAndDate[1]}</td>
			</tr>
		`;

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

function searchDate(text){
	let countriesData = [];

	for(let i = 0; i < currentTableList.length; i++)
	{
		if(text == currentTableList[i][4])
			countriesData.push(currentTableList[i]);
	}

	searchSection.classList.remove("hidden");

	if(countriesData.length !== 0)
	{
		searchTable.innerHTML = "";

		var i = 0;
		countriesData.forEach(countryData => {
			const timeAndDate = getTimeAndDate(countryData[2]);

			i++;
			searchTable.innerHTML += `
				<tr>
				<th scope="row">${i}</th>
				<td>${countryData[0]}</td>
				<td>${countryData[1]}</td>
				<td>${countryData[2]}</td>
				<td>${timeAndDate[0]}</td>
				<td>${timeAndDate[1]}</td>
				</tr>
			`;
		});

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

function search(text){
	if(/\d/.test(text))
		searchDate(text);
	else
		searchName(text);
}