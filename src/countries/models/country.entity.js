export class Country{

    constructor(name = '', officialName = '', currency='', capital='',
                region ='',subRegion='', languages=[], area = 0,
                population = 0, urlFlag='',altFlag='', coatOfArmsImage='') {
        this.name=name;
        this.officialName=officialName;
        this.currency = currency;
        this.capital = capital;
        this.region = region;
        this.subRegion = subRegion;
        this.languages = languages;
        this.area = area;
        this.population = population;
        this.urlFlag = urlFlag;
        this.altFlag = altFlag;
        this.coatOfArmsImage = coatOfArmsImage;
    }

    listLanguages(){
        let data = '';

        if(this.languages.length > 0){
            this.languages.forEach(a =>{
                data += a + ', '
            })
        }
        return data;
    }
}