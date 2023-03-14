<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { Country } from './interfaces/Country';
import CountryVue from './components/Country.vue';



const Countries = ref([] as Country[])

let searchInput = ref('')

axios.get('https://api.covid19api.com/summary')
  .then((response) => {
    response.data.Countries.map((country: Country) => {
      let countryData = {
        ID: country.ID,
        Country: country.Country,
        CountryCode: country.CountryCode,
        Slug: country.Slug,
        TotalConfirmed: country.TotalConfirmed,
        TotalDeaths: country.TotalDeaths,
        FatalitiesRate: (country.TotalDeaths / country.TotalConfirmed * 100)
      }
      Countries.value.push(countryData)
    })
  })
  .catch((error) => {
    console.log(error);
  })

function filteredCountries(): Country[] {
  return Countries.value.filter((country) => {
    return country.Country.toLowerCase().includes(searchInput.value.toLowerCase())
  })
}
</script>

<template>
  <div>
    <input type="text" v-model="searchInput">
    <div class="country" v-for="(country, index) in filteredCountries()" :key="index">
      <CountryVue :country="country" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
