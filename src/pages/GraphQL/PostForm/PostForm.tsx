import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST, GET_POSTS } from '../queries';
import { IPostInput } from '../types';
import {
  FormContainer,
  Form,
  FormGroup,
  Input,
  TextArea,
  Label,
  SubmitButton,
  ErrorMessage,
  SuccessMessage
} from './PostForm.styles';

interface PostFormProps {
  onSuccess?: () => void;
}

const PostForm = ({ onSuccess }: PostFormProps) => {
  const [formData, setFormData] = useState<IPostInput>({
    title: '',
    body: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    onCompleted: () => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      if (onSuccess) onSuccess();
    },
    refetchQueries: [
      {
        query: GET_POSTS,
        variables: {
          options: {
            paginate: {
              page: 1,
              limit: 10
            }
          }
        }
      }
    ]
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setShowSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost({
        variables: {
          input: {
            ...formData
          }
        }
      });

      // Limpiar el formulario
      setFormData({
        title: '',
        body: ''
      });

    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <FormContainer>
      <h2>Create New Post</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title"
            disabled={loading}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="body">Content</Label>
          <TextArea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Write your post content"
            disabled={loading}
            required
            rows={4}
          />
        </FormGroup>

        {error && (
          <ErrorMessage>
            Error creating post: {error.message}
          </ErrorMessage>
        )}

        {showSuccess && (
          <SuccessMessage>
            Post created successfully!
          </SuccessMessage>
        )}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default PostForm;