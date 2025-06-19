import styled from 'styled-components';

export const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const PostCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  h3 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
    font-size: 1.2rem;
  }

  p {
    color: #34495e;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

export const PostAuthor = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #3498db;
  font-size: 1.1rem;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background: #fee;
  border-radius: 8px;
  margin: 1rem;

  h3 {
    color: #e74c3c;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }
`;

export const RefreshButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;