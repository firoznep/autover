export const formatedDateByY = (d) => {
  const fd = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  return fd;
};

const formatedDate = (d) => {
  const fd = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  return fd;
};

export default formatedDate;
