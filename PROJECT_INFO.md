# תחייליס ביחד - Tehillim Together

A modern Hebrew RTL (Right-to-Left) web application for managing and tracking Tehillim (Psalms) chapter reading.

## 🎯 Features

- **Chapter Management**: Select random or specific Tehillim chapters
- **Progress Tracking**: Monitor completed books, reading chapters, and remaining chapters
- **Interactive Stats**: Visual dashboard with 4 key metrics
- **RTL Support**: Full Hebrew interface with right-to-left layout
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, card-based design with smooth animations

## 📊 Dashboard Components

### Stats Cards
1. **Books Completed** (ספרים שהושלמו) - Track completed Tehillim books
2. **Remaining to Limit** (נשאו להגביל) - Chapters remaining (out of 150)
3. **Chapters Read** (פרקים שנקראו) - Progress indicator (0/150)
4. **Chapters Reading** (פרקים בקריאה) - Currently active chapters

### Action Section
- **Random Chapter** (הגבילו פרק) - Select a random Tehillim chapter
- **Choose Specific** (בחרו פרק מסוים) - Select a specific chapter number

### Chapter List
- View all selected chapters
- Mark chapters as read/unread with a single click
- Visual indicators for completion status

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The application will be available at `http://localhost:5173` (or another port if 5173 is in use)

## 🛠️ Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with gradients and animations

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # App header with title and icon
│   ├── StatCard.tsx         # Reusable stat card component
│   ├── ActionSection.tsx    # Main action buttons section
│   ├── EmptyState.tsx       # Empty state placeholder
│   └── ChapterList.tsx      # List of selected chapters
├── types.ts                 # TypeScript interfaces
├── App.tsx                  # Main application component
├── App.css                  # Application styles
└── main.tsx                 # Application entry point
```

## 🎨 Design System

### Colors
- **Primary**: Orange (#f59e0b) - Main actions and highlights
- **Background**: Beige gradient (#f5f1eb to #ede8e1)
- **Cards**: White with subtle shadows
- **Text**: Stone gray (#1c1917, #78716c)

### Icons
- Purple: Trophy (completed books)
- Orange: Sparkles (remaining chapters)
- Green: Check circle (read chapters)
- Blue: Book (reading chapters)

## 🔄 State Management

The application uses React's built-in `useState` hooks to manage:
- Chapter list with read/reading status
- Completed books counter
- Dynamic statistics calculation

## 🌐 RTL Support

The application is fully optimized for Hebrew RTL layout:
- Direction: RTL applied at app level
- Text alignment: Right-aligned
- Flexbox and Grid: Properly configured for RTL
- Icon positions: Mirrored for RTL context

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 768px - Stacked layout, full-width buttons
- **Tablet/Desktop**: ≥ 768px - Grid layout with multiple columns

## 🔮 Future Enhancements

- [ ] Chapter selection modal/dialog
- [ ] Local storage persistence
- [ ] User authentication
- [ ] Multiple user support
- [ ] Prayer time integration
- [ ] Audio chapter recitation
- [ ] Social sharing features
- [ ] Dark mode support

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the Jewish community
