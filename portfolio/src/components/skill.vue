<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 v-for="item in infra" :key="item.title">
        <v-card class="ma-3">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>
            <p>{{ item.text }}</p>
          </v-card-text>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Technology</th>
                <th class="text-left">notes</th>
              </tr>
            </thead>
            <tbody v-for="item2 in item.carrers" :key="item2.tech">
              <tr>
                <td>{{ item2.tech }}</td>
                <td>{{ item2.notes }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infra: [
        {
          title: "Infrastructure",
          text:
            "I like building a cloud-native infrastructure using a public cloud",
          carrers: [
            {
              tech: "AWS",
              notes: ""
            },
            {
              tech: "GCP",
              notes: ""
            },
            {
              tech: "VMware",
              notes: ""
            },
            {
              tech: "OnPremises",
              notes: "NEC, FUJITSU, HPE"
            },
            {
              tech: "Kubernetes",
              notes: "use GKE"
            }
          ]
        },
        {
          title: "Dev Tools",
          text: "I like Infrastructure as Code, modern tools.",
          carrers: [
            {
              tech: "Github",
              notes: ""
            },
            {
              tech: "Ansible",
              notes: ""
            },
            {
              tech: "Terraform",
              notes: ""
            },
            {
              tech: "Circle CI",
              notes: ""
            },
            {
              tech: "Prometheus",
              notes: ""
            }
          ]
        },
        {
          title: "frontend",
          text: "I want to challenge if I have the opportunity.",
          carrers: [
            {
              tech: "Vue.js",
              notes: "Maked this portfolio."
            }
          ]
        },
        {
          title: "Backend",
          text: "I want to challenge if I have the opportunity.",
          carrers: [
            {
              tech: "Ruby",
              notes: ""
            },
            {
              tech: "Python",
              notes: ""
            },
            {
              tech: "django",
              notes: ""
            },
            {
              tech: "Ruby On Rails",
              notes: ""
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
