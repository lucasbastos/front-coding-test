<script setup lang="ts">

interface Country {
    ID: string;
    Country: string;
    CountryCode: string;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    FatalitiesRate: number;
  }

defineProps<{ country: Country }>()

</script>

<template>
  <div class="card">
    <div class="card__title">
      <h2>{{ country.Country }}</h2>
    </div>
    <div class="card__content">
      <div class="card__content-item">
        <p class="item__title">Total de casos</p>
        <p class="item__number">{{ country.TotalConfirmed.toLocaleString() }}</p>
      </div>
      <div class="card__content-item">
        <p class="item__title">Mortes</p>
        <p class="item__number">{{ country.TotalDeaths.toLocaleString() }}</p>
      </div>
      <div class="card__content-item">
        <p class="item__title">Fatalidades</p> 
        <p class="item__number">{{ country.FatalitiesRate.toFixed(2) }}%</p>
      </div>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 47rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  &__title{
    font-weight: bold;
  }
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }
}

.item {
  &__title {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    margin: 0;
  }
  &__number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #EF6160;
    margin: 0;

  }
}

</style>
