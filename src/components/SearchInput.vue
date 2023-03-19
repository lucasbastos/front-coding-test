<script setup lang="ts">

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['input']);

const updateValue = (event: Event) => {
  emit('input', (event.target as HTMLInputElement).value);
};
</script>

<template>
<div class="input-container">
  <h2 class="input-container__title">Filtrar dados sobre um país</h2>
  <div style="border-bottom: 1px solid #EF6160;">
    <font-awesome-icon icon="search" class="search-icon" />
    <input class="input-container__input" type="text" placeholder="Digite o nome do país" :value="value" @input="updateValue">
  </div>
</div>
</template>

<style scoped lang="scss">
.input-container {
    background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 26rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 47rem;
  height: 7.7rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .search-icon {
  position: relative;
  color: #EF6160;
  margin-right: 10px;
}
}
.input-container input[type="text"] {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  
  width: 36rem;


}
</style>