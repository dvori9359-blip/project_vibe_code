import { action, computed, makeObservable, observable } from 'mobx';

export interface Chapter {
  id: number;
  number: number;
  isRead: boolean;
  isReading: boolean;
}

export class TehillimStore {
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
      acceptChapter: action,
      markComplete: action,
      markCompleteByNumber: action,
      clearSelection: action,
    });
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

  acceptChapter() {
    if (this.selectedChapter === null) return;
    
    this.chapters.push({
      id: Date.now(),
      number: this.selectedChapter,
      isRead: false,
      isReading: true,
    });
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
