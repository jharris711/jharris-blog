export interface Blog {
  id: number;
  user_id: string;
  title: string;
  description: string;
  content: string;
  created_at: Date | string;
  tags: number[];
  image_url: string;
}
