<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
// import { Country } from './interfaces/country.interface';
import CountryVue from './components/Country.vue';
import SearchInput from './components/SearchInput.vue';
import TopBar from './components/TopBar.vue';

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
  <div class="main">
    <TopBar />
    <SearchInput v-model="searchInput" />
    <div class="main__top-content">
      <div class="content-text">
        <h1>Conheça o Covidômetro</h1>
        <p>Fique atualizado com velocidade e transparência. O covidômetro é uma
        ferramenta que mostra para você em tempo real o nome de casos e óbitos
        relacionados a pandemia da COVID-19 ao redor do mundo.</p>
      </div>
      <img src="./assets/doctors.svg" alt="">
    </div>
    <div class="country" v-for="(country, index) in filteredCountries()" :key="index">
      <CountryVue :country="country" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__top-content {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 109px;
    z-index: -1
  }
  .country {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 2rem;
    width: 745px;
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
      font-weight: 300;
      text-align: center;
    }
  }
}


</style>
