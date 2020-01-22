<template>
  <div class="about">
    <v-progress-circular v-if="isLoading" indeterminate color="primary" />
    <p>{{ userDetails }}</p>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => {
    return {
      isLoading: false
    };
  },
  async mounted() {
    this.isLoading = true;
    await this.fetchDetails(this.$route.params.userId);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchDetails"])
  },
  computed: {
    ...mapState(["userDetails"])
  }
};
</script>
