const upperCaseFirstL = (word = "test") => {
  if (word == null) {
    return;
  }

  let sen = word.split(" ");

  if (sen.length === 1) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }

  sen = sen
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");

  return sen;
};

export default upperCaseFirstL;
