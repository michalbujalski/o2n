import ListItem from "@/components/ListItem";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(VueRouter);

describe("ListItem component", () => {
  let vuetify;
  let router;

  beforeEach(() => {
    vuetify = new Vuetify();
    router = new VueRouter();
  });
  it("renders correctly", () => {
    const wrapper = mount(ListItem, {
      localVue,
      vuetify,
      router,
      propsData: {
        item: {
          id: "id123!@#",
          firstName: "Firstname",
          lastName: "Lastname",
          company: "some company",
          email: "test@test.com",
          age: 33,
          address: "address 12/1",
          balance: 2000
        }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
