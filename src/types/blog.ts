type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  redirect: URL;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
