<template>
  <div class="d-flex flex-column justify-center align-center">
    <v-progress-circular v-if="isLoading" indeterminate color="primary" />
    <user-details v-if="userDetails" :data="userDetails"></user-details>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import UserDetails from "@/components/UserDetails";
export default {
  components: { UserDetails },
  created() {
    this.fetchDetails(this.$route.params.userId);
  },
  methods: {
    ...mapActions(["fetchDetails"])
  },
  computed: {
    ...mapState(["userDetails", "isLoading"])
  }
};
</script>
