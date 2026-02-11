import { action, computed, makeObservable, observable } from 'mobx';
import type { Chapter } from '../types';
import tehillimData from '../data/tehillim.json';

// Helper function to convert number to Hebrew
const getHebrewNumber = (num: number): string => {
  const ones = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  const hundreds = ['', 'ק', 'ר', 'ש', 'ת'];

  if (num === 15) return 'טו';
  if (num === 16) return 'טז';

  if (num < 10) return ones[num];
  if (num < 20) return tens[1] + ones[num - 10];
  if (num < 100) {
    const tensDigit = Math.floor(num / 10);
    const onesDigit = num % 10;
    return tens[tensDigit] + ones[onesDigit];
  }
  if (num < 200) {
    const remainder = num - 100;
    return hundreds[1] + getHebrewNumber(remainder);
  }
  return '';
};

// Generate full chapter data for all 150 chapters
const generateChapters = (): Chapter[] => {
  const fullChapters: Chapter[] = [];
  
  // Load chapters with full data from JSON
  const chaptersWithData = new Map(tehillimData.map(ch => [ch.number, ch]));
  
  // Generate all 150 chapters
  for (let i = 1; i <= 150; i++) {
    const fullData = chaptersWithData.get(i);
    fullChapters.push({
      id: i,
      number: i,
      hebrewNumber: getHebrewNumber(i),
      name: fullData?.name || `פרק ${getHebrewNumber(i)}`,
      verses: fullData?.verses || [`תוכן פרק ${i} - טרם נטען`],
      isRead: false,
      isReading: false,
    });
  }
  
  return fullChapters;
};

export class TehillimStore {
  allChapters: Chapter[] = generateChapters();
  chapters: Chapter[] = [];
  selectedChapter: number | null = null;
  
  constructor() {
    makeObservable(this, {
      chapters: observable,
      selectedChapter: observable,
      totalChapters: computed,
      readChapters: computed,
      readingChapters: computed,
      remainingChapters: computed,
      completedBooks: computed,
      drawRandomChapter: action,
      selectChapter: action,
      acceptChapter: action,
      markComplete: action,
      markCompleteByNumber: action,
      clearSelection: action,
    });
  }

  getChapter(chapterNumber: number): Chapter | undefined {
    return this.allChapters.find(ch => ch.number === chapterNumber);
  }

  get totalChapters() {
    return 150;
  }

  get readChapters() {
    return this.chapters.filter(ch => ch.isRead).length;
  }

  get readingChapters() {
    return this.chapters.filter(ch => ch.isReading && !ch.isRead).length;
  }

  get remainingChapters() {
    return this.totalChapters - this.readChapters;
  }

  get completedBooks() {
    return 0;
  }

  drawRandomChapter() {
    this.selectedChapter = Math.floor(Math.random() * 150) + 1;
  }

  selectChapter(chapterNumber: number) {
    this.selectedChapter = chapterNumber;
  }

  acceptChapter() {
    if (this.selectedChapter === null) return;
    
    const fullChapter = this.allChapters.find(ch => ch.number === this.selectedChapter);
    if (fullChapter) {
      this.chapters.push({
        ...fullChapter,
        id: Date.now(),
        isRead: false,
        isReading: true,
      });
    }
    this.selectedChapter = null;
  }

  markComplete(chapterId: number) {
    const chapter = this.chapters.find(ch => ch.id === chapterId);
    if (chapter) {
      chapter.isRead = true;
      chapter.isReading = false;
    }
  }

  markCompleteByNumber(chapterNumber: number) {
    const chapter = this.chapters.find(ch => ch.number === chapterNumber && ch.isReading);
    if (chapter) {
      chapter.isRead = true;
      chapter.isReading = false;
    }
  }

  clearSelection() {
    this.selectedChapter = null;
  }
}

export const tehillimStore = new TehillimStore();
