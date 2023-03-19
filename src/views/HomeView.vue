<script setup lang="ts">
import { computed, ref } from 'vue';
import CountryVue from '../components/CountryData.vue';
import SearchInput from '../components/SearchInput.vue';
import TopBar from '../components/TopBar.vue';

import { getCountriesApi } from '../api/api'
import type { Country } from '../interfaces/country';

const Countries = ref([] as Country[])
const searchInput = ref('')
const orderedByTotalConfirmed = ref(false)



async function getCountriesData() {
  try {
    const response = await getCountriesApi() as Country[];
    const countriesData = response.map((country: Country) => {
      return {
        ID: country.ID,
        Country: country.Country,
        CountryCode: country.CountryCode,
        Slug: country.Slug,
        TotalConfirmed: country.TotalConfirmed,
        TotalDeaths: country.TotalDeaths,
        FatalitiesRate: (country.TotalDeaths / country.TotalConfirmed * 100)
      }
    });
    Countries.value = countriesData;
  } catch (error) {
    console.log(error);
  }
}

getCountriesData();

const orderBy = ((typeOrder: string) => {
  if (typeOrder === 'cases') {
    Countries.value.sort((a, b) => {
      if (a.TotalConfirmed > b.TotalConfirmed) {
        return -1;
      }
      if (a.TotalConfirmed < b.TotalConfirmed) {
        return 1;
      }
      return 0;
    });
    orderedByTotalConfirmed.value = true;
  } else {
    Countries.value.sort((a, b) => {
      if (a.Country > b.Country) {
        return 1;
      }
      if (a.Country < b.Country) {
        return -1;
      }
      return 0;
    });
    orderedByTotalConfirmed.value = false;
  }
});

const filteredCountries = computed(() => {
  return Countries.value.filter((country) => {
    return country.Country.toLowerCase().includes(searchInput.value.toLowerCase())
  })
});

const updateSearchInput = (value: string) => {
  searchInput.value = value;
};

</script>

<template>
  <div class="main">
    <TopBar />
    <SearchInput v-model="searchInput" :value="searchInput" @input="updateSearchInput" />
    <div class="order-icons">
      <font-awesome-icon @click="orderBy('cases')" icon="fa-solid fa-arrow-up-z-a" />
      <font-awesome-icon  @click="orderBy('name')" icon="fa-solid fa-arrow-up-1-9" />
    </div>

    <div class="main__top-content">
      <div class="content-text">
        <p class="text-title">Conheça o Covidômetro</p>
        <p class="text-subtitle">Fique atualizado com velocidade e transparência. O covidômetro é uma
        ferramenta que mostra para você em tempo real o nome de casos e óbitos
        relacionados a pandemia da COVID-19 ao redor do mundo.</p>
      </div>
      <img src="../assets/doctors.svg" alt="">
    </div>
    <div class="country" v-for="(country, index) in filteredCountries" :key="index">
      <CountryVue :country="country" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #EF6160;
  cursor: pointer;
  svg {
    margin: 0 1rem;
  }
}
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
    .text-title {
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      position: relative;
      bottom: 49px;
      left: 13px;
    }
    .text-subtitle {
      position: relative;
      bottom: 79px;
      font-size: 1.1rem;
      width: 563px;
    }
  }
}

@media screen and (max-width: 768px) {
  .main {
    &__top-content {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 0;
      z-index: 0;
      img {
        display: none;
      }
      .content-text {
        display: none;
      }
    }
  }
  .country {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>
