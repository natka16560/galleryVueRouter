<template>
  <v-app>
    <v-app-bar app color="#761ee9" light>
      <v-toolbar-title>Галерея фото</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Главная</v-btn>
      <v-btn text to="/add">Добавить фото</v-btn>
      <v-btn text to="/about">О проекте</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>
