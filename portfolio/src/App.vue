<template>
  <v-app>
    <v-app-bar color="green" dark app clipped-left>
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/" large>
          <v-icon large>mdi-door</v-icon>Top
        </v-btn>
        <v-btn text to="/profile" large>
          <v-icon large>mdi-account</v-icon>Profile
        </v-btn>
        <v-btn text to="/skill" large>
          <v-icon large>mdi-wrench</v-icon>Skill
        </v-btn>
        <v-btn text to="/link" large>
          <v-icon large>mdi-link-variant</v-icon>Link
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="green" dark app>
      <v-toolbar-title>Portfolio</v-toolbar-title>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>
