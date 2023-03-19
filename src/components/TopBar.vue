<script setup lang="ts"></script>
<template>
    <div class="topbar">
        <img src="../assets/logo.png" alt="" >
    </div>
</template>
<style scoped lang="scss">
.topbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    height: 4rem;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    img {
    display: flex; 
    align-items: center;
    margin-left: 11px;
    }
}
</style>