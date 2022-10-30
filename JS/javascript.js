let slideshowMovies = [
    {id: 0, title: "Monster House", director: "Gil Kenan", image_url: "Media/Scene/movie0.jpg" , page_link: "page5-1-movie.html"},
    {id: 1, title: "Coco", director: "Adrian Molina and Lee Unkrich", image_url: "Media/Scene/movie1.jpg" , page_link: "page5-4-movie.html"},
	{id: 2, title: "Despicable Me", director: "Pierre Coffin and Chris Renaud", image_url: "Media/Scene/movie2.jpg" , page_link: "page5-6-movie.html"},
	{id: 3, title: "Spiderman: Into the Spiderverse", director: "Bob Persichetti and Rodney Rothman", image_url: "Media/Scene/movie3.jpg" , page_link: "page5-7-movie.html"},
	{id: 4, title: "Monsters, Inc.", director: "Pete Docter", image_url: "Media/Scene/movie4.jpg" , page_link: "page5-8-movie.html"},
    {id: 5, title: "The Mitchells vs The Machines", director: "Michael Rianda", image_url: "Media/Scene/movie5.jpg" , page_link: "page5-9-movie.html"}
    ];

let topMovies = [
    {id: 0, title: "The Incredibles", director: "Brad Bird", year: 2004, image_url: "Media/Poster/movie2.jpg", page_link: "page5-3-movie.html"},
    {id: 1, title: "How To Train Your Dragon", director: "Chris Sanders and Dean DeBlois", year: 2010, image_url: "Media/Poster/movie4.jpg", page_link: "page5-5-movie.html"},
    {id: 2, title: "Toy Story", director: "John Lasseter", year: 1995, image_url: "Media/Poster/movie1.jpg", page_link: "page5-2-movie.html"}
    ];
	
let upcomingMovies = [
	{id: 0, title: "Puss In Boots: The Last Wish", director: "Joel Crawford", year: 2022, image_url: "Media/UpcomingPoster/movie0.jpg"},
    {id: 1, title: "Spiderman: Across the Multiverse", director: "Joaquim Santos, Kemp Powers and Justin Thompson", year: 2023, image_url: "Media/UpcomingPoster/movie1.jpg"},
    {id: 2, title: "Disney Elemental", director: "Peter Sohn", year: 2023, image_url: "Media/UpcomingPoster/movie2.jpg"},
	{id: 3, title: "Guillermo del Toro's Pinocchio", director: "Guillermo del Toro and Mark Gustafson", year: 2022, image_url: "Media/UpcomingPoster/movie3.jpg"},
    {id: 4, title: "Super Mario Movie", director: "Aaron Horvath and Michael Jelenic", year: 2023, image_url: "Media/UpcomingPoster/movie4.jpg"},
    {id: 5, title: "Disney Wish", director: "Chris Buck and Fawn Veerasunthorn", year: 2023, image_url: "Media/UpcomingPoster/movie5.jpg"}
    ];

let allMovieList = [
	{id: 0, title: "Monster House", director: "Gil Kenan", year: 2006, image_url: "Media/Poster/movie0.jpg", page_link: "page5-1-movie.html"},
    {id: 1, title: "Toy Story", director: "John Lasseter", year: 1995, image_url: "Media/Poster/movie1.jpg", page_link: "page5-2-movie.html"},
    {id: 2, title: "The Incredibles", director: "Brad Bird", year: 2004, image_url: "Media/Poster/movie2.jpg", page_link: "page5-3-movie.html"},
	{id: 3, title: "Coco", director: "Adrian Molina and Lee Unkrich", year: 2017, image_url: "Media/Poster/movie3.jpg", page_link: "page5-4-movie.html"},
    {id: 4, title: "How To Train Your Dragon", director: "Chris Sanders and Dean DeBlois", year: 2010, image_url: "Media/Poster/movie4.jpg", page_link: "page5-5-movie.html"},
    {id: 5, title: "Despicable Me", director: "Pierre Coffin and Chris Renaud", year: 2010, image_url: "Media/Poster/movie5.jpg", page_link: "page5-6-movie.html"},
	{id: 6, title: "Spiderman: Into the Spiderverse", director: "Bob Persichetti and Rodney Rothman", year: 2018, image_url: "Media/Poster/movie6.jpg", page_link: "page5-7-movie.html"},
	{id: 7, title: "Monsters, Inc.", director: "Pete Docter", year: 2001, image_url: "Media/Poster/movie7.jpg", page_link: "page5-8-movie.html"},
    {id: 8, title: "The Mitchells vs The Machines", director: "Michael Rianda", year: 2021, image_url: "Media/Poster/movie8.jpg", page_link: "page5-9-movie.html"}
	];

let genreListA = [
	{id: 0, title: "Monster House", page_link: "page5-1-movie.html"},
    {id: 1, title: "Toy Story", page_link: "page5-2-movie.html"},
    {id: 2, title: "The Incredibles", page_link: "page5-3-movie.html"}
	];

let genreListB = [
	{id: 0, title: "Coco", page_link: "page5-4-movie.html"},
    {id: 1, title: "How To Train Your Dragon", page_link: "page5-5-movie.html"},
    {id: 2, title: "Despicable Me", page_link: "page5-6-movie.html"}
	];
	
let genreListC = [
	{id: 0, title: "Spiderman: Into the Spiderverse", page_link: "page5-7-movie.html"},
	{id: 1, title: "Monsters, Inc.", page_link: "page5-8-movie.html"},
    {id: 2, title: "The Mitchells vs The Machines", page_link: "page5-9-movie.html"}
	];

// ------------------------------------------------------------------------------------------------------

// Use JavaScript to store information/data to get info of each movie for the movie, year and image.

var movieTitle = document.getElementById("movieTitle");
let movieSelectList = document.getElementById("genreSelect");

//Declare a variable to store index
var movieName = document.getElementById("movieName");
var movieDirector = document.getElementById("movieDirector");
var movieImageURL = document.getElementById("movieImageURL");
var movieImageLink = document.getElementById("movieImageLink");
let movieList = document.getElementById("movieList");

let index = 0;

function nextSlideShowImage() {
	//Increase the index by 1 only if it's not reaching the last image
	if (index == images.length - 1 ) {
		index = index
	} else {
		index = index + 1;//Increase the index by 1
	}
	
	//Display the current image based on its index to html
	//Change the source of img element on HTML fileCreatedDate
	//Find the image with id="movieImageURL" and change its source
	setMovieSelected(index);
}

function previousSlideShowImage() {
	//Increase the index by 1 only if it's not reaching the last image
	if (index == 0 ) {
		index = index
	} else {
		index = index - 1;//Increase the index by 1
	}
	
	//Display the current image based on its index to html
	//Change the source of img element on HTML fileCreatedDate
	//Find the image with id="movieImageURL" and change its source
	setMovieSelected(index);
}

function setMovieSelected(index)
{
    // Display the selected movie
    movieName.innerHTML = slideshowMovies[index].title;
    movieDirector.innerHTML = slideshowMovies[index].director;
    movieImageURL.src = slideshowMovies[index].image_url;
	movieImageLink.href = slideshowMovies[index].page_link;
}

let topMovieHTMLContent = "";
var topMovieGrid = document.getElementById("topMovieGrid");

let upcomingMovieHTMLContent = "";
var upcomingMovieGrid = document.getElementById("upcomingMovieGrid");

let movieListHTMLContent = "";
var movieListGrid = document.getElementById("movieListGrid");

var movieTitleA = document.getElementById("movieTitleA");
var movieTitleB = document.getElementById("movieTitleB");
var movieTitleC = document.getElementById("movieTitleC");
let genreSelectA = document.getElementById("genreSelectA");
let genreSelectB = document.getElementById("genreSelectB");
let genreSelectC = document.getElementById("genreSelectC");

var movieLinkA = document.getElementById("movieLinkA");
var movieLinkB = document.getElementById("movieLinkB");
var movieLinkC = document.getElementById("movieLinkC");

var sidebar = document.getElementById("mySidebar");
var main = document.getElementById("main");

var formSubmit = document.getElementById("formSubmit");

var customForm = document.getElementById("customForm");

for (let i=0; i < topMovies.length; i++)
{
    // Build HTML content for each movie
    let topMovieContent = `
					<div class="topMovieGridItemStyle">
						<a href=${topMovies[i].page_link} id="topMovieLink">
							<img src=${topMovies[i].image_url} class="imageCenter">
							<h3>${topMovies[i].title}</h3>
							<p>${topMovies[i].director}</p>
							<p>${topMovies[i].year}</p>
						</a>
					</div>
    `;

    // Append this movie conent to the topMovieHTMLContent
    topMovieHTMLContent += topMovieContent;
}

for (let i=0; i < upcomingMovies.length; i++)
{
    // Build HTML content for each movie
    let upcomingMovieContent = `
					<div class="gridItemStyle">
						<img src=${upcomingMovies[i].image_url} class="imageCenter">
						<h3 class="textCenter">${upcomingMovies[i].title}</h3>
						<p class="textCenter">${upcomingMovies[i].director}</p>
						<p class="textCenter">${upcomingMovies[i].year}</p>
					</div>
    `;

    // Append this movie conent to the upcomingMovieHTMLContent
    upcomingMovieHTMLContent += upcomingMovieContent;
}

for (let i=0; i < allMovieList.length; i++)
{
    // Build HTML content for each movie
    let movieListContent = `
					<div class="gridItemStyle">
						<a href=${allMovieList[i].page_link}>
							<img src=${allMovieList[i].image_url} class="imageCenter">
							<h3 class="textCenter">${allMovieList[i].title}</h3>
							<p class="textCenter">${allMovieList[i].director}</p>
							<p class="textCenter">${allMovieList[i].year}</p>
						</a>
					</div>
    `;

    // Append this movie conent to the upcomingMovieHTMLContent
    movieListHTMLContent += movieListContent;
}

breakTopMovie: if (topMovieGrid == null) {
	break breakTopMovie;
}
else {
	topMovieGrid.innerHTML = topMovieHTMLContent;
	setMovieSelected(index);
}

breakUpcomingMovie: if (upcomingMovieGrid == null) {
	break breakUpcomingMovie;
}
else {
	upcomingMovieGrid.innerHTML = upcomingMovieHTMLContent;
}

breakAllMovieList: if (movieListGrid == null) {
	break breakAllMovieList;
}
else {
	movieListGrid.innerHTML = movieListHTMLContent;
}

breakGenreList: if (genreSelectA == null) {
	break breakGenreList;
}
else {
	for(let i=0; i < genreListA.length; i++)
	{
		// Create a HTMl option
		let node = document.createElement("option");

		// Assign the id and text to the option
		node.value = genreListA[i].id;
		node.textContent = genreListA[i].title;

		// Append the option to the select element in the HTML
		genreSelectA.appendChild(node);
	}
	for(let i=0; i < genreListB.length; i++)
	{
		// Create a HTMl option
		let node = document.createElement("option");

		// Assign the id and text to the option
		node.value = genreListB[i].id;
		node.textContent = genreListB[i].title;

		// Append the option to the select element in the HTML
		genreSelectB.appendChild(node);
	}
	for(let i=0; i < genreListC.length; i++)
	{
		// Create a HTMl option
		let node = document.createElement("option");

		// Assign the id and text to the option
		node.value = genreListC[i].id;
		node.textContent = genreListC[i].title;

		// Append the option to the select element in the HTML
		genreSelectC.appendChild(node);
	}
	
	setMovie()
}

// ------------------------------------------------------------------------------------------------------

// Use JavaScript to store information/data to get info of each movie for the movie, year and image.

let images = ["Media/Scene/movie0.jpg", 
			  "Media/Scene/movie1.jpg", 
			  "Media/Scene/movie2.jpg", 
			  "Media/Scene/movie3.jpg", 
			  "Media/Scene/movie4.jpg", 
			  "Media/Scene/movie5.jpg" 			  
			 ];

// ------------------------------------------------------------------------------------------------------

// Use JavaScript to open and close the sidebar when clicked.

function setMovie()
{
    // Gets the value of the movie selected
    var movieSelectedA = genreSelectA.value;
	var movieSelectedB = genreSelectB.value;
	var movieSelectedC = genreSelectC.value;

    // Display the selected movie
    movieTitleA.innerHTML = genreListA[movieSelectedA].title;
	movieTitleB.innerHTML = genreListB[movieSelectedB].title;
	movieTitleC.innerHTML = genreListC[movieSelectedC].title;
	
	movieLinkA.href = genreListA[movieSelectedA].page_link;
	movieLinkB.href = genreListB[movieSelectedB].page_link;
	movieLinkC.href = genreListC[movieSelectedC].page_link;
}

function changeFontSize()
{
    // Get the selected font size that the user chooses
    let selectedFontSize = document.getElementById("fontSize").value;

    // Get the "main-content-area" id and change it to that selected font size
    document.getElementById("mainContentArea").style.fontSize = selectedFontSize;
}


function changeBackgroundColor()
{
    // Get the selected color that user clicks
    let selectedColor = document.getElementById("colorOption").value;

    // Get the "main-content-area" id and change it to that selected color
    document.getElementById("mainContentArea").style.backgroundColor = selectedColor;
}

function openNav() {
	sidebar.style.width = "250px";
	main.style.marginLeft = "250px";
}
  
function closeNav() {
	sidebar.style.width = "0";
	main.style.marginLeft= "0";
}

function openForm() {
	formSubmit.style.visibility = "visible";
}

function closeForm() {
	formSubmit.style.visibility = "hidden";
}

function openCustom() {
	customForm.style.visibility = "visible";
}

function closeCustom() {
	customForm.style.visibility = "hidden";
}