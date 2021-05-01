class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID Hv8xpFm_IY_wWLr4siZu_t14GOTwm4scLfWECWLtfjk';
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            headers : {
                Authorization: this.clientID
            },
            params :{
                query : 'animal',
                count: 1
            }
        });
    }

    async randomPhotoBring(){
        try {
            const photoResponse = await this.axiosObject.get('/photos/random');
        console.log(photoResponse.data[0].urls.regular);
        return photoResponse.data[0].urls.regular;
        } catch (err) {
            console.log(err.response);
            return 'https://bulma.io/images/placeholders/1280x960.png';
        }

    }
}

export default function photoBring () {
    const bringPhoto = new UnsplashApi().randomPhotoBring();
    return bringPhoto;
}

// Acces key: Hv8xpFm_IY_wWLr4siZu_t14GOTwm4scLfWECWLtfjk
// secret key: IyUsHQk6z0A2eToxOe9wl94spfCSNjlj4aCtXrexN2I