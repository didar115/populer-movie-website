/*
document.getElementById("search-button").addEventListener("click", function () {
	const getName = document.getElementById("search-field");
	const getValue = getName.value;
	if (getValue.length > 1) {
		https://api.themoviedb.org/3/movie/550?api_key=ff8b1c2bfb159209d397e1f2952a6c2b
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => searchResult(data.meals));
	} else if (getValue.length == 1) {

		const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${getValue}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => searchResult(data.meals));

	}
	else {
		const div = document.getElementById("parent-div");
		div.innerHTML = "";
		const createNewDiv = document.getElementById("warning");
		createNewDiv.classList.remove("d-none");
	}
	
});
*/
/*
const searchResult = (data) => {
	// console.log(data);
	const getName = document.getElementById("search-field");
	getName.value = "";
	const div = document.getElementById("parent-div");
	div.innerHTML = "";
	data.forEach((element) => {
		const createNewDiv = document.createElement("div");
		createNewDiv.classList.add("col");
		createNewDiv.innerHTML = `
					<div class="card" style="width: 18rem">
						<img src="${element.strMealThumb}" class="card-img-top" alt="..." />
					         <div class="card-body">
							  <h5 class="card-title">${element.strMeal}</h5>
							  <p class="card-text">
								${element.strInstructions.slice(0, 100)}
							</p>

							<button type="button" onclick="loadCountryByName('${
								element.strMeal
							}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >View Details</button>
							
						</div>
					
				</div>`;

		div.appendChild(createNewDiv);
	});
};
*/
const runApi = () => {
	fetch(
		"https://api.themoviedb.org/3/movie/top_rated?api_key=ff8b1c2bfb159209d397e1f2952a6c2b"
	)
		.then((res) => res.json())
		.then((data) => getData(data.results));
};
runApi();

const getData = (data) => {
	// console.log(data);
	const pic = "https://image.tmdb.org/t/p/original";

	const div = document.getElementById("parent-div");
	data.forEach((element) => {
		console.log(element);
		const createNewDiv = document.createElement("div");
		createNewDiv.classList.add("col");
		createNewDiv.innerHTML = `
					<div class="card h-100" style="width: 18rem">
						<img src="${pic + element.poster_path}" class="card-img-top" alt="..." />
						 <div class="card-body">
							  <h5 class="card-title">${element.title}</h5>
							  <p class="card-text">
								${element.overview.slice(0, 100)}
							</p>

							
							
						</div>
							<div class="card-footer">
     						 	<small class="text-muted"> Popularity:${element.popularity} Avarage-Vote: ${element.vote_average} Vote-count: ${
			element.vote_count
		} </small>
   							 </div>
					        
					
				</div>`;

		div.appendChild(createNewDiv);
	});
};


	/* <button type="button" onclick="loadCountryByName('${
								element.strMeal
							}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >View Details</button> */

/*
const loadCountryByName = (name) => {
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayModal(data));
};

const displayModal = (data) => {
	const array = data.meals[0];
	const title = document.getElementById("exampleModalLabel");
	title.innerText = array.strMeal;
	const imgAdd = document.getElementById("modal-img");

	imgAdd.innerHTML = `
	<img src="${array.strMealThumb}" alt="" class="img-fluid">
	<h3>Food Origin: ${array.strArea}</h3>
	<h4>Food Type: ${array.strTags}</h4>
						
	<h4>Food Ingredient</h4>
	<li>${array.strMeasure1}</li>
	<li>${array.strMeasure2}</li>
	<li>${array.strMeasure3}</li>
	<li>${array.strMeasure4}</li>
	<li>${array.strMeasure5}</li>`;
	// console.log(array);
};
const clearData = () => {
	const clearTitle = document.getElementById("exampleModalLabel");
	const clearImg = document.getElementById("modal-img");
	clearTitle.innerText = "";
	clearImg.innerText = "";
};
*/
