export const getUnique = rawData => {
  const data = [];
  rawData.forEach(item => {
    if (data.indexOf(item) === -1) {
      data.push(item);
    }
  });
  return data;
};

export const parseCompanies = users => {
  return getUnique(users.map(item => item.company));
};

export const parseUsers = data =>
  data.map(item => ({
    id: item.id,
    age: item.age,
    company: item.company,
    email: item.email,
    firstName: item.name.first,
    lastName: item.name.last
  }));

export const toggleItem = (arr, item) => {
  if (arr.indexOf(item) > -1) {
    return arr.filter(i => i !== item);
  }
  return arr.push(item);
};
