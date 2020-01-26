<template>
  <div>
    <h1>title</h1>
    <p>{{ JSON.stringify(query) }}</p>
    <v-select :items="ageItems" label="age" @change="onAgeSelect"></v-select>
    <v-select
      :items="ageOrder"
      label="Order by age"
      @change="onAgeOrderSelect"
    ></v-select>
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
    items.push(getItem(age, 9));
  }
  return items;
};

const NONE = "none";
export default {
  data() {
    return {
      ageItems: getItems(0, 100),
      ageOrder: [NONE, "ascending", "descending"],
      selectedCompanies: []
    };
  },
  computed: {
    ...mapState(["query", "companies"])
  },
  methods: {
    ...mapActions(["setQuery"]),
    onAgeSelect(e) {
      this.setQuery({ ...this.query, minAge: e.minAge, maxAge: e.maxAge });
    },
    onAgeOrderSelect(order) {
      this.setQuery({ ...this.query, ageOrder: order !== NONE ? order : null });
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
