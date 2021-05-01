class TranslateApi{
    constructor(englishJoke) {
        this.baseURL = 'https://translation.googleapis.com/';
    
        this.searchStatement = englishJoke;
        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            params: {
                target: 'tr',
                //key: 'AIzaSyAw0tZD1IjVJ2EWl2h3mIU60Wi-8qExVSY',
                q:this.searchStatement
            }
        });
    }

    async translatedDid() {
        try {
            const translate = await this.axiosObject.get('language/translate/v2');
            console.log(translate.data.data.translations[0].translatedText);

        return translate.data.data.translations[0].translatedText;
        } catch (err) {
            console.log(err.response.data.error.message);
        }
    }
}

export default function translatedDid(translateTextDid){
    const translate = new TranslateApi(translateTextDid).translatedDid();
    return translate;
}

