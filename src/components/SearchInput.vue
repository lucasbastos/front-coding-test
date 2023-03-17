<script setup lang="ts">
</script>

<template>
        <div class="input-container">
            <h2>Filtrar dados sobre um país</h2>
            <input type="text" placeholder="Digite o nome do país">
        </div>
</template>

<style scoped lang="scss">
.input-container {
    background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 22rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 47rem;
  height: 7.7rem;
  display: flex;
  flex-direction: column;
}
.input-container input[type="text"] {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 1px solid red;
}


.input-container i.fa {
  font-size: 20px;
  margin-right: 10px;
}
</style>