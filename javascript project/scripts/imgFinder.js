const apiKey = 'auSJ2q3NSuQMelRhZjLKlBkskn-zisVtwkhQWRmnJa0';

const searchInput = document.getElementById('search-input');
const showMoreBtn = document.getElementById('show-more-btn');
const formEl = document.querySelector('form');
const searchResultsDiv = document.querySelector('.search-results');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener('click', searchImages);

let inputData = '';
let page = 1;

async function searchImages(){
  inputData = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if(page === 1){
    searchResultsDiv.innerHTML = '';
  }

  const results = data.results;
  results.map(result => {
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('search-result');
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.textContent = result.alt_description;
    
    imgWrapper.appendChild(image);
    imgWrapper.appendChild(imageLink);
    searchResultsDiv.appendChild(imgWrapper);
  });

  page++;

  if(page > 1){
    showMoreBtn.style.display = 'block';
  }
}
