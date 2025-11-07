# Design Guidelines: Developer Data Scraping & SQL Tool

## Design Approach
**System Selected:** Hybrid approach inspired by Linear's clean developer experience + GitHub's functional patterns + Postman's workflow clarity

**Core Principles:**
- Developer-first: Code-friendly, keyboard-navigable, minimal distractions
- Data clarity: Information hierarchy prioritizes readability and scannability
- Workflow efficiency: Multi-step processes feel seamless and logical

## Typography System

**Font Families:**
- Interface: Inter (400, 500, 600 weights)
- Code/Data: JetBrains Mono (400, 500 weights)

**Type Scale:**
- Headings: text-2xl (page titles), text-lg (section headers)
- Body: text-sm (primary interface text)
- Code/Data: text-xs (monospace for SQL, JSON, tables)
- Labels: text-xs uppercase tracking-wide (form labels, metadata)

## Layout System

**Spacing Units:** Use Tailwind units 2, 4, 6, 8, 12, 16
- Component padding: p-4 to p-6
- Section spacing: space-y-6 to space-y-8
- Tight groupings: gap-2
- Related elements: gap-4

**Container Strategy:**
- Full-width app layout (no max-width constraints)
- Left sidebar: w-64 fixed navigation
- Main content area: flex-1 with p-8
- Right panel (when needed): w-96 for preview/details

## Component Library

### Navigation
- Fixed left sidebar with icon + label navigation items
- Grouped sections: Scrape, Query Builder, Data Explorer, Settings
- Active state: subtle left border indicator

### Data Input Panel
- URL input with large textarea (h-24)
- Scraping options in collapsible sections
- Action buttons: Primary "Scrape Data", Secondary "Advanced Options"

### SQL Query Editor
- Full-width code editor with line numbers
- Toolbar above: Run Query, Format SQL, Save, Export buttons (h-10)
- Status bar below showing query execution time, rows affected

### Results Table
- Sticky header row with sortable columns
- Alternating row treatment for readability
- Monospace font for data cells
- Fixed height container (h-96) with internal scroll
- Row selection with checkboxes in first column

### Cards for Scraped Sources
- Compact cards showing: URL, timestamp, row count, status badge
- Grid layout: grid-cols-2 xl:grid-cols-3 gap-4
- Click to load data into query editor

### Action Buttons
- Primary buttons: px-4 py-2 rounded-md font-medium
- Icon buttons: p-2 rounded hover states
- Button groups with connected borders (rounded-l, rounded-r pattern)

### Modals & Overlays
- Export modal: centered, max-w-lg with format selection radio buttons
- Confirmation dialogs: max-w-sm with clear action buttons
- Backdrop: backdrop-blur-sm

## Animations
**Minimal approach - only for feedback:**
- Loading spinners during scraping/query execution
- Fade-in for query results (duration-200)
- No scroll animations, parallax, or decorative motion

## Images
**No hero image.** This is a utility tool where screen real estate is precious. The interface launches directly into the workspace.

**Icon Usage:**
Use Heroicons (outline style) for:
- Navigation icons (GlobeAltIcon, CodeBracketIcon, TableCellsIcon)
- Action buttons (PlayIcon, ArrowDownTrayIcon, Cog6ToothIcon)
- Status indicators (CheckCircleIcon, ExclamationCircleIcon)

## Layout Patterns

### Main Dashboard View
Three-panel layout:
- Left sidebar (w-64): Navigation + recent scrapes list
- Center workspace (flex-1): Primary work area (scraper or query editor)
- Right panel (w-96, collapsible): Data preview or schema inspector

### Scraper Interface
- Top section: URL input + scraping controls
- Middle section: Real-time scraping log/console
- Bottom section: Preview of scraped data in table

### Query Builder Interface  
- Top: Natural language input textarea (h-32) with "Translate to SQL" button
- Middle: Generated SQL editor with syntax highlighting
- Bottom: Split view - Results table (60%) + Query history sidebar (40%)

### Data Explorer
- Filterable table with search, column filters in sticky header
- Pagination controls at bottom
- Bulk actions toolbar appears when rows selected

## Key UX Patterns
- Autosave query drafts to localStorage
- Keyboard shortcuts prominently displayed (⌘K command palette)
- Toast notifications (top-right) for success/error feedback
- Empty states with clear call-to-action (not just "No data")
- Inline validation for SQL syntax as user types