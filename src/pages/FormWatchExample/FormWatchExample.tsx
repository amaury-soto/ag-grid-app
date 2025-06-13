// src/pages/FormWatchExample/FormWatchExample.tsx
import { useForm, useWatch, SubmitHandler, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PageContainer, PageTitle, PageContent } from '../styles/common.styles';
import { 
  Form, 
  FormGroup, 
  Input, 
  Label, 
  ErrorMessage,
  SubmitButton,
  Summary 
} from '../FormExample/FormExample.styles';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

const FormWatcher = ({ control }: { control: Control<IFormInputs> }) => {
  const firstName = useWatch({
    control,
    name: 'firstName',
    defaultValue: ''
  });
  const lastName = useWatch({
    control,
    name: 'lastName',
    defaultValue: ''
  });
  const email = useWatch({
    control,
    name: 'email',
    defaultValue: ''
  });
  const age = useWatch({
    control,
    name: 'age'
  });
  const password = useWatch({
    control,
    name: 'password',
    defaultValue: ''
  });

  const getPasswordStrength = (pass: string) => {
    if (!pass) return 'Not set';
    if (pass.length >= 8 && /[0-9]/.test(pass) && /[a-z]/.test(pass) && /[A-Z]/.test(pass)) {
      return 'Strong';
    }
    if (pass.length >= 6) {
      return 'Medium';
    }
    return 'Weak';
  };

  const isValidEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  };

  return (
    <Summary>
      <h3>Form Summary (Real-time)</h3>
      <p>Full Name: <strong>{firstName} {lastName}</strong></p>
      <p>Email: {email ? (
        isValidEmail(email) ? 
          <span style={{ color: 'green' }}>{email}</span> : 
          <span style={{ color: 'red' }}>{email} (Invalid)</span>
      ) : 'Not set'}</p>
      {age && <p>Age: {age >= 18 ? 
        <span style={{ color: 'green' }}>{age}</span> : 
        <span style={{ color: 'red' }}>{age} (Must be 18+)</span>
      }</p>}
      <p>Password Strength: {
        <span style={{ 
          color: password ? 
            getPasswordStrength(password) === 'Strong' ? 'green' : 
            getPasswordStrength(password) === 'Medium' ? 'orange' : 
            'red' 
          : 'inherit'
        }}>
          {getPasswordStrength(password)}
        </span>
      }</p>
    </Summary>
  );
};

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

const FormWatchExample = () => {
  const { 
    register, 
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: undefined,
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      reset();
      alert('Form submitted successfully!!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <PageContainer>
      <PageTitle>Form Example with useWatch</PageTitle>
      <PageContent>
        <FormWatcher control={control} />
        
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

export default FormWatchExample;