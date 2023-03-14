<script setup lang="ts">
import { Country } from '../interfaces/Country'

defineProps<{ country: Country }>()

</script>

<template>
  <div>
    <h1>{{ country.Country }}</h1>
    <p>Total Confirmed: {{ country.TotalConfirmed }}</p>
    <p>Total Deaths: {{ country.TotalDeaths }}</p>
    <p>Fatalities Rate: {{ country.FatalitiesRate.toFixed(2) }}%</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
