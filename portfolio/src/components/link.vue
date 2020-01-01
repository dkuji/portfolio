<template>
  <div>
    <v-container>
      <v-card title="title" class="mx-auto">
        <v-card-title>Link</v-card-title>
        <v-card-text>
          <p></p>
        </v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Url</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in links" :key="item.name">
              <td>
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.name }}
              </td>
              <td>
                <a :href="item.link">{{ item.link }}</a>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Github",
          icon: "fab fa-github-square",
          link: "https://github.com/dkuji"
        },
        {
          name: "twitter",
          icon: "fab fa-twitter",
          link: "https://twitter.com/ddkuji"
        },
        {
          name: "Facebook",
          icon: "fab fa-facebook-square",
          link: "https://www.facebook.com/dkuji"
        },
        {
          name: "Qiita",
          icon: "fab fa-qiita",
          link: "https://qiita.com/dkuji"
        }
      ]
    };
  }
};
</script>

<style>
</style>
