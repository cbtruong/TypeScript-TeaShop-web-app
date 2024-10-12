type Blog = {
  id: string;
  comment_id: string; 
  user_id: string;  
  title: string;  
  description: string;  
  content: string;  
  blog_status: string;  
  create_date: Date;
  end_date: Date;
  view_total: number;
  comment_total: number;
  like_total: number;
};

type Like = {
  blog_id: string;
  user_id: string;
}

type Comment = {
  user_id: string;
  product_id: string;
  blog_id: string;
  content: string;
  create_date: Date;
}

export { type Blog, type Like, type Comment };


