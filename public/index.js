function addImge(keyword, index){
    const image = document.createElement('img');
    image.src = `https://source.unsplash.com/400x225?${keyword}&sig=${index}`;
    const gallery = document.querySelector(".gallery");
    gallery.appendChild(image)
}
function removeAllPhoto(){
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = '';
}
function searchPhoto(event){
const keyword = event.target.value;
console.log(keyword);
if(event.key === 'Enter' && keyword){
    removeAllPhoto();
    for(let i=0; i<10; i++){
        addImge(keyword,i);
    }
}
}
function handleUpgrade(){
    const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
function main(){
    const inputControls = document.querySelectorAll('.controls input');
    inputControls.forEach((input) => {input.addEventListener('change',handleUpgrade);});

    const inputElement = document.querySelector(".search");
    inputElement.addEventListener('keydown',searchPhoto);
}

main();