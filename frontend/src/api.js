export const fetchAllUsers = async () => {
  const response = await fetch("http://localhost:8000/users");
  const data = await response.json();
  return data;
};

export const fetchUserDetails = async userId => {
  const response = await fetch(`http://localhost:8000/users/${userId}`);
  const data = await response.json();
  return data;
};

export const fetchFilteredUsers = async params => {
  const response = await fetch(`http://localhost:8000/users${params}`);
  const data = await response.json();
  return data;
};

export const parseParams = query => {
  let urlParams = [];
  if (query.minAge) {
    urlParams = [...urlParams, `age_gte=${query.minAge}`];
  }
  if (query.maxAge) {
    urlParams = [...urlParams, `age_lte=${query.maxAge}`];
  }
  if (query.selectedCompanies) {
    query.selectedCompanies.forEach(company => {
      urlParams = [...urlParams, `company=${company}`];
    });
  }
  if (query.sortBy) {
    urlParams = [...urlParams, `_sort=${query.sortBy}&_order=asc`];
  }
  return urlParams;
};

export const hasValidQuery = query => {
  return query.minAge || query.maxAge || query.selectedCompanies.length > 0;
};

export const parseUrl = params =>
  params.reduce(
    (prev, current, idx) => {
      return `${prev}${idx !== 0 ? "&" : ""}${current}`;
    },
    params.length > 0 ? "?" : ""
  );
