<template>
  <div class="about">
    <v-progress-circular v-if="isLoading" indeterminate color="primary" />
    <v-container v-if="userDetails">
      <v-row>
        <v-col md="3" sm="6" xs="12" cols="12">
          <h4>Name:</h4>
          <p>{{ userName }}</p>
        </v-col>
        <v-col md="3" sm="6" xs="12" cols="12">
          <h4>Email:</h4>
          <p>{{ userDetails.email }}</p>
        </v-col>
        <v-col md="3" sm="6" xs="12" cols="12">
          <h4>Age:</h4>
          <p>{{ userDetails.age }}</p>
        </v-col>
        <v-col md="3" sm="6" xs="12" cols="12">
          <h4>Address:</h4>
          <p>{{ userDetails.address }}</p>
        </v-col>
        <v-col md="3" sm="6" xs="12" cols="12">
          <h4>Balance:</h4>
          <p>
            {{
              userDetails.balance.toLocaleString("us-US", {
                style: "currency",
                currency: "USD"
              })
            }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.fetchDetails(this.$route.params.userId);
  },
  methods: {
    ...mapActions(["fetchDetails"])
  },
  computed: {
    ...mapState(["userDetails", "isLoading"]),
    userName() {
      return `${this.userDetails.name.first} ${this.userDetails.name.last}`;
    }
  }
};
</script>
