const formatedDate = (d) => {
  const fd = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  return fd;
};

export default formatedDate;
