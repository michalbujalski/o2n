<template>
  <div class="home">
    <List :items="users" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import List from "@/components/List";
export default {
  name: "home",
  components: { List },
  mounted() {
    this.fetchAll();
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(["fetchAll"])
  }
};
</script>
