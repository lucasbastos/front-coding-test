<script setup lang="ts">
import type { Country } from '../interfaces/country';

defineProps<{ country: Country }>()

</script>

<template>
  <div class="card" @click="$router.push(`/country/${country.Slug}`)">
    <div class="card__title">
      <h2>{{ country.Country }}</h2>
    </div>
    <div class="card__content">
      <div class="card__content-item">
        <p class="item__title">Total de casos</p>
        <p class="item__number">{{ country.TotalConfirmed.toLocaleString() }}</p>
      </div>
      <div class="card__content-item middle-border">
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
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  width: 48rem;
  height: 10.1rem;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    transform: translateY(-5px);
    transition: all 0.3s;
    cursor: pointer;
  }
  &__title{
    font-weight: bold;
    margin-top: -10px;
  }
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

.middle-border {
  padding: 0 6rem 0 6rem;
  border-left: 1px solid #0e1b3312;
  border-right: 1px solid #0e1b3312;
}

@media (max-width: 768px) {
  .card {
    height: auto;
    width: 90vw;
  }

  .card__content {
    flex-direction: column;
  }
}

</style>
