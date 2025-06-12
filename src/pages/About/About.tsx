import { PageContainer, PageTitle, PageContent } from '../styles/common.styles';

const About = () => {
  return (
    <PageContainer data-testid="page-container">
      <PageTitle data-testid="page-title">About</PageTitle>
      <PageContent data-testid="page-content">
        <p data-testid="description">
          This is a practice project for learning React technologies
        </p>
      </PageContent>
    </PageContainer>
  );
};

export default About;