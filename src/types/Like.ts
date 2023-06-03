export interface Like {
  id?: number;
  created_at?: Date | string;
  user_id: string;
  active: boolean;
  blog_id: number;
}
