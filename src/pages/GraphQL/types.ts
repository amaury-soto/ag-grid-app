export interface IPost {
  id: string;
  title: string;
  body: string;
  user: {
    name: string;
  };
}

export interface IPostInput {
  title: string;
  body: string;
}