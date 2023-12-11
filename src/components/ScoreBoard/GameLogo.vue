<template>
  <h1 class="logo">
    <a href="https://github.com/Davitoria" target="_blank"></a>
  </h1>
</template>

<style scoped>
.logo {
  width: 70px;
  height: 80px;
  line-height: 90px;
  padding: 5px;
  border-radius: 5px;
  background-color: #5979ac;
  background: url('../src/assets/icon.png');
  color: #fff;
  text-align: center;
}
a {
  text-decoration: none;
  color: #000000;
}

@media screen and (max-width: 450px) {
  .logo {
    width: 150px;
  }
}

@media screen and (max-width: 380px) {
  .logo {
    width: 140px;
  }
}

@media screen and (max-width: 360px) {
  .logo {
    width: 110px;
  }
  a {
    font-size: 18px;
  }
}
</style>
