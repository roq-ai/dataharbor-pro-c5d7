import * as yup from 'yup';

export const integrationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
