<template>
  <div>
    <search-form></search-form>
    <div class="d-flex justify-center">
      <v-progress-circular v-if="isLoading" indeterminate color="primary" />
    </div>
    <list :items="pagedUsers" />
    <v-pagination
      :value="page"
      @input="onPageChange"
      :circle="circle"
      :length="length"
      :next-icon="nextIcon"
      :prev-icon="prevIcon"
      :total-visible="totalVisible"
    ></v-pagination>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import List from "@/components/List";
import SearchForm from "@/components/SearchForm";
import { hasValidQuery } from "@/api";

const PAGE_LIMIT = 10;

export default {
  name: "home",
  components: { SearchForm, List },
  data() {
    return {
      circle: true,
      length: 0,
      nextIcon: "navigate_next",
      nextIcons: ["mdi-chevron-right", "mdi-arrow-right", "mdi-menu-right"],
      prevIcon: "navigate_before",
      prevIcons: ["mdi-chevron-left", "mdi-arrow-left", "mdi-menu-left"],
      totalVisible: 10
    };
  },
  created() {
    if (!hasValidQuery(this.query)) {
      this.fetchAll();
    }
  },
  computed: {
    ...mapState(["users", "query", "page", "isLoading"]),
    pagedUsers() {
      const startIndex = (this.page - 1) * PAGE_LIMIT;
      const u = this.users.slice(startIndex, startIndex + PAGE_LIMIT);
      return u;
    }
  },
  methods: {
    ...mapActions(["fetchAll", "fetchFiltered", "setPage"]),
    onPageChange(newPage) {
      this.setPage(newPage);
    }
  },
  watch: {
    async query(newQuery, oldQuery) {
      if (JSON.stringify(newQuery) !== JSON.stringify(oldQuery)) {
        await this.fetchFiltered(newQuery);
        this.setPage(1);
      }
    },
    users(newUsers) {
      this.length = Math.ceil(newUsers.length / PAGE_LIMIT);
    }
  }
};
</script>
