<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col sm="6" xs="12" cols="12">
          <v-select
            v-model="ageSelected"
            :items="ageItems"
            label="age"
            @change="onAgeSelect"
          ></v-select>
        </v-col>
        <v-col sm="6" xs="12" cols="12">
          <v-select
            v-model="selectedSortBy"
            :items="sortByItems"
            label="Sort by"
            @change="onAgeOrderSelect"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-select
      v-model="selectedCompanies"
      :items="companies"
      chips
      label="Companies"
      multiple
    ></v-select>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
const PERIOD = 9;
const getItem = (startAge, period) => {
  return {
    text: `${startAge} - ${startAge + period}`,
    value: {
      minAge: startAge,
      maxAge: startAge + period
    }
  };
};

const getItems = (minAge, maxAge) => {
  const items = [
    {
      text: "none",
      value: {
        minAge: null,
        maxAge: null
      }
    }
  ];
  for (let age = minAge; age < maxAge; age += 10) {
    items.push(getItem(age, PERIOD));
  }
  return items;
};

const NONE = "none";
export default {
  data() {
    return {
      ageSelected: null,
      ageItems: getItems(0, 100),
      sortByItems: [NONE, "age", "company"],
      selectedSortBy: null,
      selectedCompanies: []
    };
  },
  mounted() {
    if (this.query.minAge) {
      this.ageSelected = getItem(this.query.minAge, PERIOD);
    }
    if (this.query.sortBy) {
      this.selectedSortBy = this.query.sortBy;
    }
    this.selectedCompanies = this.query.selectedCompanies;
  },
  computed: {
    ...mapState(["query", "companies"])
  },
  methods: {
    ...mapActions(["setQuery"]),
    onAgeSelect(e) {
      this.setQuery({ ...this.query, minAge: e.minAge, maxAge: e.maxAge });
    },
    onAgeOrderSelect(sortBy) {
      this.setQuery({ ...this.query, sortBy: sortBy !== NONE ? sortBy : null });
    }
  },
  watch: {
    selectedCompanies(newSelected) {
      this.setQuery({ ...this.query, selectedCompanies: newSelected });
    }
  }
};
</script>
<style scoped>
.age-select {
  width: 250px;
}
</style>
