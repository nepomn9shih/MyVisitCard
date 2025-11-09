/** Удаляет поля объекта без значения */
export const omitUndefinedFields = (obj: {[key: string]: any}) => {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
};