<script>
import {CountryApiService} from "./countries/services/countries-api.service.js";
import CountryCardComponent from "./countries/components/country-card.component.vue";
import {Country} from "./countries/models/country.entity.js";
import FooterContent from "./public/components/footer-content.component.vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";

export default{
  name: "app",
  components: { FooterContent,CountryCardComponent, ToolbarContent},
  data(){
    return {
      countries: [],
      countriesApi : new CountryApiService()
    }
  },
  created(){
    this.completeInformationCountry();
  },
  methods:{

    buildCountryListFromResponseData(countries){
      let languages = [];

      countries.map(d=> {
        languages.push(d['languages']['aym']);
        languages.push(d['languages']['que']);
        languages.push(d['languages']['spa']);

      })

      return countries.map(c => new Country(c['name']['common'], c['name']['official'],c['currencies']['PEN']['name'],
      c['capital'], c['region'], c['subregion'], languages, c['area'], c['population'], c['flags']['png'],
      c['flags']['alt'], c['coatOfArms']['png']))
    },

    async completeInformationCountry(){
      debugger;
      let jsonData = await this.countriesApi.getCountryInformation();
      console.log(jsonData);
      this.countries = this.buildCountryListFromResponseData(jsonData);
      console.log(this.countries);

    },
  }
}
</script>

<template>
  <div class="w-full">
      <toolbar-content class="bg-primary" />
  </div>
  <country-card-component :country="countries[0]"></country-card-component>
  <footer-content></footer-content>
</template>

