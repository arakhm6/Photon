const auth = '563492ad6f91700001000001d639181332b44d7c8f92cc8241062eef';
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const submitBtn = document.querySelector('.submit-btn');
let searchValue;

async function curatedPhotos()
{
    const dataFetch = await fetch("https://api.pexels.com/v1/curated?per_page=1", 
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    data.photos.forEach(photo => 
        {
            const galleryImg = document.createElement('div');
            galleryImg.classList.add('gallery-img');
            galleryImg.innerHTML = `<img src=${photo.src.large}></img>
            <p>${photo.photographer}</p>`;
            gallery.appendChild(galleryImg);
        });
}

curatedPhotos();