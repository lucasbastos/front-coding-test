<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import TopBar from '../components/TopBar.vue';
import type { CountryDetails } from '../interfaces/country';
import { getCountryDetailsApi } from '../api/api'

const router = useRouter();
const slug  = ref(router.currentRoute.value.params.slug as string);
const flag = ref('')

const CountryDetailsData = ref([] as CountryDetails[])

async function getCountryData() {
    try {
        const response = await getCountryDetailsApi(slug.value) as CountryDetails[];
        flag.value = `https://flagcdn.com/w1280/${response[0].CountryCode.toLowerCase()}.png`;

        const countryData = response.slice(-5).map((country: CountryDetails) => {
            return {
                Country: country.Country,
                CountryCode: country.CountryCode,
                Province: country.Province,
                City: country.City,
                CityCode: country.CityCode,
                Lat: country.Lat,
                Lon: country.Lon,
                Cases: country.Cases,
                Status: country.Status,
                Date: country.Date
            }
        });
        CountryDetailsData.value = countryData.reverse();
    } catch (error) {
        console.log(error);
    }
}
const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("pt-BR");
  };
getCountryData();
</script>
<template>
    <TopBar />
    <img class="flag" :src="flag" alt="">
    <div v-for="(countryDetail, index) in CountryDetailsData" :key="index">
        <div class="country-details">
            <div class="country-details__body">
                <div class="country-details__body__item">
                    <p>{{ formatDate(countryDetail.Date) }}</p>
                    <p class="item__number">{{ countryDetail.Cases }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.flag {
    width: 100px;
    margin-top: 5rem;
}
.country-details {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.country-details__body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.country-details__body__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 50vw;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);   
    p {
        font-size: 1.2rem;       
    }
}
.item__number {
    font-size: 1.5rem;
    font-weight: 600;
    color: #EF6160;
}
</style>