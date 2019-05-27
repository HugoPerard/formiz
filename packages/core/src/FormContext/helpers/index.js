export const getField = (fieldName, fields) => (fields || []).find(x => x.name === fieldName);

export const getFormValues = fields => (fields || [])
  .filter(field => field.isActive)
  .reduce((obj, field) => ({
    ...obj,
    [field.name]: field.value,
  }), {});

export const getFieldErrors = (fieldName, fields) => {
  const field = getField(fieldName, fields);

  if (!field || !field.validations) {
    return [];
  }

  return field.validations
    .map(x => (x.rule && !x.rule(field.value, getFormValues(fields)) ? x.message : '___FIELD_IS_VALID___'))
    .filter(x => x !== '___FIELD_IS_VALID___');
};
