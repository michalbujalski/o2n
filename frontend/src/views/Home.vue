<template>
  <div>
    <search-form></search-form>
    <list :items="users" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import List from "@/components/List";
import SearchForm from "@/components/SearchForm";
export default {
  name: "home",
  components: { SearchForm, List },
  created() {
    this.fetchAll();
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(["fetchAll"])
  },
  watch: {
    query (newQuery) {
      console.log(newQuery);
    }
  }
};
</script>
