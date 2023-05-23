const likes = (names) => {
  if (names.length === 1) {
    return names[0] + " likes this";
  } 

  if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  } 

  return 'no one likes this';
};

module.exports = {
  likes,
};
