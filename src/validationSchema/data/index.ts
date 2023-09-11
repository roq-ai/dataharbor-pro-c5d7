import * as yup from 'yup';

export const dataValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
