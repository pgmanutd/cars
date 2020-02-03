const replaceAllUtils = (
  value: string,
  mappedObject: { [key: string]: string } = {},
) => {
  const keys = Object.keys(mappedObject);

  if (!keys.length) {
    return value;
  }

  const regex = new RegExp(keys.join('|'), 'gi');

  return value.replace(regex, matched => {
    return mappedObject[matched];
  });
};

export default replaceAllUtils;
