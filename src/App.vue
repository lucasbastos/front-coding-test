<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
import { ref } from 'vue';

interface Country {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  FatalitiesRate: number;
}

const Countries = ref([] as Country[])

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
</script>

<template>
  <div>
    <div class="country" v-for="(country, index) in Countries" :key="index">
      <h1>{{ country.Country }}</h1>
      <p>Total Confirmed: {{ country.TotalConfirmed.toLocaleString() }}</p>
      <p>Total Deaths: {{ country.TotalDeaths.toLocaleString() }}</p>
      <p>Fatalities Rate: {{ country.FatalitiesRate.toFixed(2) }}%</p>
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
