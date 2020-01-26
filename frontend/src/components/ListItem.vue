<template>
  <v-list-item :to="{ name: 'user-details', params: { userId: item.id } }">
    <v-list-item-content>
      <v-list-item-title
        v-html="`${item.firstName} ${item.lastName}`"
      ></v-list-item-title>
      <v-list-item-subtitle class="d-flex flex-row justify-space-between">
        <span class="list-item__email"
          ><b>Email:</b><span>{{ item.email }}</span></span
        >
        <span class="flex-grow-1"
          ><b>Company: </b><span>{{ item.company }}</span></span
        >
        <span
          ><b> Age: </b><span>{{ item.age }}</span></span
        >
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  props: {
    item: Object
  }
};
</script>
<style scoped>
.list-item__email {
  width: 350px;
}
</style>
