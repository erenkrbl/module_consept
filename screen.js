class Screen {
    constructor(){
        this.jokeBringBtn = document.querySelector('.joke-bring-button');
        this.jokeBringBtn .addEventListener('click', ()=>this.jokeBring());
    }

    async jokeBring(){
        const randomPhoto = await new UnsplashApi().randomPhotoBring();
        const randomJoke = await new JokeApi().randomJokeBring();
        const translate = await new TranslateApi(randomJoke).translatedDid();

        const allResult = {
            randomPhoto,
            randomJoke,
            translate
        }
        this.screenResultPrint(allResult);
    }

    screenResultPrint(results){
        document.querySelector('.result').innerHTML = `
        <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${results.randomPhoto}" alt="Placeholder image">
            <img>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">${results.randomJoke}</p>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-primary pb-4">${results.translate}</p>
            </div>
          </div>
        </div>
      </div>`};
}