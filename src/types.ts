export interface StatCardData {
  title: string;
  value: number | string;
  icon: string;
  color: string;
}

export interface Chapter {
  id: number;
  number: number;
  isRead: boolean;
  isReading: boolean;
}
