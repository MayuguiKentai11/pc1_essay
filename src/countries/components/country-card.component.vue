<script>
import {Country} from "../models/country.entity.js";

export default {
  name: "country-card",
  props:{
    country: Country
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #header >
      <img :alt="country.altFlag" :src="country.urlFlag" width="400" height="300"/>
      <img :alt="country.altFlag" :src="country.coatOfArmsImage" width="400" height="300"/>
    </template>
    <template #title>
      <p>{{country.name}}</p>
    </template>
    <template #content>
      <p class="flex align-content-center flex-wrap">
        Official Name: {{country.officialName}}<br>
        Currency: {{country.currency}} <br>
        Capital: {{country.capital}} <br>
        Region: {{country.region}} <br>
        SubRegion: {{country.subRegion}} <br>
        Languages: {{country.listLanguages()}} <br>
        Area: {{country.area }} <br>
        Population: {{country.population}} <br>
      </p>
    </template>
  </pv-card>
</template>
