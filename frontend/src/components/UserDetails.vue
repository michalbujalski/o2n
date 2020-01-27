<template>
  <v-container>
    <v-row>
      <v-col md="3" sm="6" xs="12" cols="12">
        <h4>Name:</h4>
        <p>{{ userName }}</p>
      </v-col>
      <v-col md="3" sm="6" xs="12" cols="12">
        <h4>Email:</h4>
        <p>{{ data.email }}</p>
      </v-col>
      <v-col md="3" sm="6" xs="12" cols="12">
        <h4>Age:</h4>
        <p>{{ data.age }}</p>
      </v-col>
      <v-col md="3" sm="6" xs="12" cols="12">
        <h4>Address:</h4>
        <p>{{ data.address }}</p>
      </v-col>
      <v-col md="3" sm="6" xs="12" cols="12">
        <h4>Balance:</h4>
        <p>
          {{
            data.balance.toLocaleString("us-US", {
              style: "currency",
              currency: "USD"
            })
          }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    data: Object
  },
  computed: {
    userName() {
      return `${this.data.name.first} ${this.data.name.last}`;
    }
  }
};
</script>
