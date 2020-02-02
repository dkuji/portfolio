<template>
  <v-app>
    <v-container>
      <v-app-bar dark app>
        <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text v-for="item in menus" :key="item.name" :to="item.path">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.name }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-content>
        <router-view />
      </v-content>
      <v-footer dark app>
        <v-toolbar-title>Portfolio</v-toolbar-title>
      </v-footer>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item v-for="item in menus" :key="item.name">
          <v-btn text :to="item.path">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
      ],
      title: "Portfolio",
      toggle_exclusive: undefined
    };
  },
  mounted() {
    //console.log(this.$vuetify.breakpoint);
  }
};
</script>
