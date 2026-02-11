// Component Architecture Documentation

/**
 * COMPONENT HIERARCHY
 * 
 * App (Main Container)
 * ├── Header
 * │   └── Logo + Title + Subtitle
 * ├── Container
 * │   ├── Stats Grid
 * │   │   ├── StatCard (Books Completed)
 * │   │   ├── StatCard (Remaining to Limit)
 * │   │   ├── StatCard (Chapters Read)
 * │   │   └── StatCard (Chapters Reading)
 * │   ├── ActionSection
 * │   │   ├── Title with Icon
 * │   │   ├── Description
 * │   │   └── Action Buttons
 * │   │       ├── Select Chapter Button
 * │   │       └── Random Chapter Button
 * │   └── Content Area
 * │       ├── EmptyState (when no chapters)
 * │       └── ChapterList (when chapters exist)
 * └── Watermark
 */

/**
 * STATE MANAGEMENT
 * 
 * Main State:
 * - chapters: Chapter[] - Array of selected chapters
 * - completedBooks: number - Count of completed books (static for now)
 * 
 * Derived State (computed):
 * - totalChapters: 150 (constant)
 * - readChapters: Filtered count of read chapters
 * - readingChapters: Filtered count of currently reading chapters
 * - remainingChapters: totalChapters - readChapters
 */

/**
 * USER FLOWS
 * 
 * 1. Random Chapter Selection
 *    - User clicks "הגבילו פרק" button
 *    - System generates random number (1-150)
 *    - New chapter added to state with isReading: true
 *    - UI updates to show chapter in ChapterList
 *    - Stats update automatically
 * 
 * 2. Mark Chapter as Read
 *    - User clicks on a chapter in ChapterList
 *    - Chapter's isRead state toggles
 *    - Visual indicator changes (circle → checkmark)
 *    - Stats update to reflect new read count
 * 
 * 3. Specific Chapter Selection (Future)
 *    - User clicks "בחרו פרק מסוים" button
 *    - Modal/dialog opens with chapter selector
 *    - User selects specific chapter number
 *    - Chapter added to state
 */

/**
 * COMPONENT PROPS
 */

interface StatCardProps {
  title: string;           // Hebrew title
  value: number | string;  // Numeric or formatted string value
  iconType: 'trophy' | 'sparkles' | 'check' | 'book';
  color: 'purple' | 'orange' | 'green' | 'blue';
}

interface ActionSectionProps {
  onRandomChapter: () => void;  // Handler for random chapter selection
  onSelectChapter: () => void;  // Handler for specific chapter selection
}

interface ChapterListProps {
  chapters: Chapter[];                    // Array of chapters to display
  onChapterClick?: (chapter: Chapter) => void;  // Optional click handler
}

/**
 * DATA TYPES
 */

interface Chapter {
  id: number;         // Unique identifier (timestamp)
  number: number;     // Chapter number (1-150)
  isRead: boolean;    // Whether chapter has been read
  isReading: boolean; // Whether chapter is currently active
}

/**
 * STYLING APPROACH
 * 
 * - RTL-first design (direction: rtl)
 * - CSS custom properties could be added for theming
 * - Component-scoped styles via className
 * - Responsive breakpoints at 768px
 * - Color system based on Tailwind-inspired palette
 * - Smooth transitions and hover effects
 */

/**
 * DESIGN TOKENS
 */

const colors = {
  primary: '#f59e0b',      // Orange
  background: '#f5f1eb',   // Beige
  card: '#ffffff',         // White
  text: {
    primary: '#1c1917',    // Stone 900
    secondary: '#78716c',  // Stone 500
  },
  stats: {
    purple: '#9333ea',
    orange: '#f59e0b',
    green: '#10b981',
    blue: '#3b82f6',
  }
};

const spacing = {
  card: '1.5rem',
  container: '1rem',
  gap: '1.25rem',
};

const borderRadius = {
  card: '16px',
  button: '12px',
  icon: '12px',
};
