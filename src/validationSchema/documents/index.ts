import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
