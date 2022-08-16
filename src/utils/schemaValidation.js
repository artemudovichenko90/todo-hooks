import * as Yup from 'yup';

export const SCHEMA_TASK = Yup.object({
  body: Yup.string().trim().required('Can\'t empty')
});
