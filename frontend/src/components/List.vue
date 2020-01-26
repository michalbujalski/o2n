<template>
  <ul>
    <v-list>
      <template v-for="(item, index) in items">
        <v-divider :key="index" v-show="index > 0"> </v-divider>
        <list-item :key="item.id" :item="item" />
      </template>
    </v-list>
  </ul>
</template>
<script>
import ListItem from "./ListItem.vue";
export default {
  props: ["items"],
  components: { ListItem },
  methods: {
    click() {}
  }
};
</script>
