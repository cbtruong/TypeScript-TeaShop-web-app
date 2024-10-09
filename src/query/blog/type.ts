type Blog = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  total_view: number;
  total_comment: number;
  total_like: number;
  blog_image: Array<string>;
  create_at: string;
  elapsed_time: number;
};

export { type Blog };
