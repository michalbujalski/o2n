<template>
  <ul>
    <v-list>
      <template v-for="(item, index) in items">
        <v-divider :key="index" v-show="index > 0"> </v-divider>
        <v-list-item
          :key="item.id"
          :to="{ name: 'user-details', params: { userId: item.id } }"
        >
          <v-list-item-content>
            <v-list-item-title
              v-html="`${item.firstName} ${item.lastName}`"
            ></v-list-item-title>
            <v-list-item-subtitle class="d-flex flex-row justify-space-between">
              <span class="email"
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
    </v-list>
  </ul>
</template>
<script>
export default {
  props: ["items"],
  methods: {
    click() {}
  }
};
</script>
<style scoped>
.list-item__email {
  width: 300px;
}
</style>
