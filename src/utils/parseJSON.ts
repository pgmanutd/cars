const parseJSON = <T>(stringifiedJSON: string | null, fallbackValue: T) => {
  try {
    if (!stringifiedJSON) {
      return fallbackValue;
    }

    return JSON.parse(stringifiedJSON);
  } catch (e) {
    return fallbackValue;
  }
};

export default parseJSON;
