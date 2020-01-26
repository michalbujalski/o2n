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
import { hasValidQuery } from "@/api";
export default {
  name: "home",
  components: { SearchForm, List },
  created() {
    if (!hasValidQuery(this.query)) {
      this.fetchAll();
    }
  },
  computed: {
    ...mapState(["users", "query"])
  },
  methods: {
    ...mapActions(["fetchAll", "fetchFiltered"])
  },
  watch: {
    query(newQuery) {
      this.fetchFiltered(newQuery);
    }
  }
};
</script>
