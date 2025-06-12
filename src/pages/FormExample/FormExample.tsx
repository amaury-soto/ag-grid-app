import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PageContainer, PageTitle, PageContent } from '../styles/common.styles';
import { 
  Form, 
  FormGroup, 
  Input, 
  Label, 
  ErrorMessage,
  SubmitButton 
} from './FormExample.styles';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  age: yup.number()
    .typeError('Age must be a number')
    .positive('Age must be positive')
    .integer('Age must be an integer')
    .min(18, 'Must be at least 18')
    .required('Age is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
}).required();

const FormExample = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      reset();
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <PageContainer>
      <PageTitle>Form Example with React Hook Form</PageTitle>
      <PageContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>First Name</Label>
            <Input {...register('firstName')} />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Last Name</Label>
            <Input {...register('lastName')} />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input {...register('email')} type="email" />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Age</Label>
            <Input {...register('age')} type="number" />
            {errors.age && (
              <ErrorMessage>{errors.age.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input {...register('password')} type="password" />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Confirm Password</Label>
            <Input {...register('confirmPassword')} type="password" />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </SubmitButton>
        </Form>
      </PageContent>
    </PageContainer>
  );
};

export default FormExample;