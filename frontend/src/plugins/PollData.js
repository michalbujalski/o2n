import { hasValidQuery } from "../api";

export default {
  // eslint-disable-next-line no-unused-labels
  install: (Vue, { store }) => {
    setInterval(() => {
      if (hasValidQuery(store.state.query)) {
        store.dispatch("fetchFiltered", store.state.query);
      } else {
        store.dispatch("fetchAll");
      }
    }, 5000);
  }
};
