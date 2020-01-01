<template>
  <div>
    <v-container>
      <v-card title="title" class="mx-auto">
        <v-card-title>Profile</v-card-title>
        <v-card-text>
          <p>Hi, I'm dkuji. Infrastructure developer.</p>
          <p>Since I started my journey as a developer in 2011, I have built infrastructure for many projects with System Integrator. And Edtech Startup builds and operates a cloud-native infrastructure.</p>
        </v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Company</th>
              <th class="text-left">Job</th>
              <th class="text-left">Years</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carrers" :key="item.company">
              <td>{{ item.company }}</td>
              <td>{{ item.job }}</td>
              <td>{{ item.year }}</td>
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
      carrers: [
        {
          company: "System integrator company",
          job: "Infrastructure developer",
          year: "about 6years"
        },
        {
          company: "Edtech startup company",
          job: "Infrastructure developer",
          year: "about 2years"
        },
        {
          company: "Mobile communication, ISP service company",
          job: "Infrastructure developer, Web application developer",
          year: "now"
        }
      ]
    };
  }
};
</script>

<style>
</style>
