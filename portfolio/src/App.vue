<template>
  <v-app>
    <v-app-bar color="green" dark app>
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--
      <v-toolbar-items>
        <v-btn text to="/">
          <v-icon>mdi-door</v-icon>Top
        </v-btn>
        <v-btn text to="/profile">
          <v-icon>mdi-account</v-icon>Profile
        </v-btn>
        <v-btn text to="/skill">
          <v-icon>mdi-wrench</v-icon>Skill
        </v-btn>
        <v-btn text to="/link">
          <v-icon>mdi-link-variant</v-icon>Link
        </v-btn>
      </v-toolbar-items>
      -->
      <v-toolbar-items v-for="item in menus" :key="item.name">
        <v-btn text :to="item.path">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.name }}
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
      drawer: null,
      menus: [
        {
          name: "Top",
          path: "/",
          icon: "mdi-door"
        },
        {
          name: "Profile",
          path: "/profile",
          icon: "mdi-account"
        },
        {
          name: "Skill",
          path: "/skill",
          icon: "mdi-wrench"
        },
        {
          name: "Link",
          path: "/link",
          icon: "mdi-link-variant"
        }
      ]
    };
  }
};
</script>
