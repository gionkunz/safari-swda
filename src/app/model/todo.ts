export interface TodoItem {
  nr: string;
  title: string;
  description: string;
  done: boolean;
}

export interface TodoMap {
  [k: string]: TodoItem;
}
