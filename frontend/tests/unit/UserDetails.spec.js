import UserDetails from "@/components/UserDetails";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);
const localVue = createLocalVue();

describe("UserDetails component", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders correctly", () => {
    const wrapper = mount(UserDetails, {
      localVue,
      vuetify,
      propsData: {
        data: {
          age: 23,
          emai: "test@test.com",
          name: { first: "john", last: "doe" },
          address: "address 12/1",
          balance: 2000
        }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
