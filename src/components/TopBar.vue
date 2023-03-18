<script setup lang="ts"></script>
<template>
    <div class="topbar">
        <img src="../assets/logo.png" alt="" >
    </div>
</template>
<style scoped lang="scss">
.topbar {
    background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  position: absolute;
    top: 0px;
  img {
    display: flex; 
    width: fit-content; 
    align-items: center;
    margin-left: 127px;
    margin-top: 11px;
  }
}
</style>