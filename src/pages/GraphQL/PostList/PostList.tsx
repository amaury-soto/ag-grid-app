import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries";

import {
  PostContainer,
  PostCard,
  LoadingSpinner,
  ErrorMessage,
  PostInfo,
  PostAuthor,
  PostSection,
  RefreshButton,
} from "./PostList.styles";
import {
  PageContainer,
  PageTitle,
  PageContent,
} from "../../styles/common.styles";
import { IPost } from "../types";
import PostForm from "../PostForm/PostForm";

const PostList = () => {
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 10,
        },
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);
  const handleRefresh = () => {
    refetch();
  };

  if (loading && !data) {
    return (
      <PageContainer>
        <LoadingSpinner>Loading posts...</LoadingSpinner>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorMessage>
          <h3>Error loading posts</h3>
          <p>{error.message}</p>
          <RefreshButton onClick={handleRefresh}>Try Again</RefreshButton>
        </ErrorMessage>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <PageTitle>Posts</PageTitle>
      <PageContent>
        <PostSection>
          <PostForm onSuccess={handleRefresh} />

          <PostContainer>
            {console.log("Posts data:", data)} {/* Veamos qué llega aquí */}
            {data?.posts?.data?.map((post: IPost) => (
              <PostCard key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <PostInfo>
                  <PostAuthor>✍️ {post.user?.name || "Anonymous"}</PostAuthor>
                </PostInfo>
              </PostCard>
            ))}
          </PostContainer>

          {loading && <LoadingSpinner>Updating...</LoadingSpinner>}
        </PostSection>
      </PageContent>
    </PageContainer>
  );
};

export default PostList;
