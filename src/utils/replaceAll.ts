export type ReplaceAllMappedObject = { [key: string]: string };

const replaceAll = (
  value: string,
  mappedObject: ReplaceAllMappedObject = {},
) => {
  const keys = Object.keys(mappedObject);

  if (!keys.length) {
    return value;
  }

  const regex = new RegExp(keys.join('|'), 'gi');

  return value.replace(regex, (matched) => {
    return mappedObject[matched];
  });
};

export default replaceAll;
