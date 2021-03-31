export interface CreatorSchema {
  firstname: string;
  lastname: string;
  avatarUrl: string;
  profileUrl: string;
}

export interface TodoSchema {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  creator: CreatorSchema;
  createdAt: string;
}
