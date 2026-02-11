export interface StatCardData {
  title: string;
  value: number | string;
  icon: string;
  color: string;
}

export interface Chapter {
  id: number;
  number: number;
  hebrewNumber: string;
  name: string;
  verses: string[];
  isRead: boolean;
  isReading: boolean;
}

export interface ReadingStatus {
  chapterNumber: number;
  status: 'available' | 'reading' | 'completed';
  timestamp?: number;
}
