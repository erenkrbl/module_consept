class JokeApi {
    constructor() {
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
        });
    }

    async randomJokeBring(){
        try {
            const jokeResponse = await this.axiosObject.get('/jokes/random');
        console.log(jokeResponse.data.value);
        return jokeResponse.data.value;

        } catch (error) {
            console.log(error);
        }
    }
}

export default  function jokeBring() {
    const bringJoke = new JokeApi().randomJokeBring();
    return bringJoke;
}


// export API_KEY=AIzaSyAw0tZD1IjVJ2EWl2h3mIU60Wi-8qExVSY

