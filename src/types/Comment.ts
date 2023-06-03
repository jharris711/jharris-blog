export interface Comment {
  id?: string;
  created_at?: Date | string;
  content: string;
  blog_id: number;
  user_id: string | null | undefined;
  username: string | null | undefined;
}
