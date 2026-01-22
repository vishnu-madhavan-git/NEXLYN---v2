# 🤖 NEXLYN Project - For Gemini AI

**Quick Summary for AI Consumption**

---

## What is NEXLYN?

NEXLYN is a React + TypeScript single-page application (SPA) that serves as an AI-powered distribution platform for MikroTik networking hardware. It integrates Google's Gemini AI to provide intelligent technical support.

---

## Complete Documentation Access

This repository contains **7 comprehensive documentation files** totaling **97.7 KB** and **4,055 lines**:

### 1. **DOCUMENTATION_INDEX.md** - Start Here
Navigation guide to all documentation files and their purposes.

### 2. **NEXLYN_COMPLETE_DOCUMENTATION.md** (27 KB, 1,168 lines)
Complete project documentation covering:
- Architecture and technology stack
- All features and functionality
- Setup, installation, and deployment
- API integrations (Gemini AI, Cloudinary, WhatsApp)
- Admin panel details
- Security and performance
- Development workflow

### 3. **AI_CODEBASE_SUMMARY.md** (16 KB, 732 lines)
Technical codebase reference with:
- File-by-file breakdown
- Component hierarchy
- State management
- Data flow diagrams
- Code navigation map
- Common modifications guide

### 4. **QUICK_REFERENCE.md** (22 KB, 970 lines)
Practical code examples including:
- Setup commands
- Code patterns for all common tasks
- API usage examples
- Styling utilities
- Error solutions
- Production optimization

---

## Technology Stack

**Frontend:**
- React 19.2.3 + TypeScript
- Vite 6.2.0 (build tool)
- Tailwind CSS (styling)

**AI & Services:**
- Google Gemini AI (@google/genai v1.37.0)
  - Model: gemini-3-flash-preview
  - Features: Streaming, web grounding
- Cloudinary (image hosting)
- Recharts (analytics)

**Key Features:**
- AI chat interface with streaming responses
- Product catalog with filtering
- Admin panel with CRUD operations
- WhatsApp integration
- Dark/Light theme
- Responsive design

---

## Project Structure

```
App.tsx              (2000+ lines) - Main application component
constants.tsx        (400 lines)   - Products, categories, config
types.ts             (20 lines)    - TypeScript interfaces
services/
  geminiService.ts   (75 lines)    - Gemini AI integration
  cloudinaryService.ts (30 lines)  - Image upload service
index.tsx            (15 lines)    - React entry point
index.html           (150 lines)   - HTML + Tailwind config
```

---

## Quick Start

```bash
# Clone and install
git clone https://github.com/vishnu-madhavan-git/NEXLYN---v2.git
cd NEXLYN---v2
npm install

# Configure environment
cp .env.local.example .env.local
# Add: GEMINI_API_KEY, VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_UPLOAD_PRESET

# Run
npm run dev  # localhost:5173

# Build
npm run build
```

---

## For AI Understanding

### Best Approach to Understand This Codebase:

1. **Read AI_CODEBASE_SUMMARY.md first**
   - Get technical map of all files
   - Understand data flow
   - Learn component structure

2. **Reference NEXLYN_COMPLETE_DOCUMENTATION.md**
   - Understand business logic
   - Learn feature details
   - Get integration context

3. **Use QUICK_REFERENCE.md for code examples**
   - See practical implementations
   - Generate accurate suggestions
   - Provide working code snippets

### Key Points for AI Assistants:

- **Single Component App**: Most logic in `App.tsx` (2000+ lines)
- **Data Storage**: Products in `constants.tsx` (in-memory, no backend)
- **AI Integration**: Via `services/geminiService.ts` using Google Gemini
- **State Management**: React useState hooks (no Redux/Context)
- **Styling**: Tailwind utility classes, dark mode support
- **Type Safety**: TypeScript strict mode enabled

---

## Common AI Assistance Tasks

### "Help me add a product"
→ See QUICK_REFERENCE.md → "Adding a New Product"

### "Explain the architecture"
→ See NEXLYN_COMPLETE_DOCUMENTATION.md → "Architecture & Technology Stack"

### "How does the chat work?"
→ See AI_CODEBASE_SUMMARY.md → "services/geminiService.ts"  
→ See QUICK_REFERENCE.md → "Chat Interface with Streaming"

### "How to deploy?"
→ See NEXLYN_COMPLETE_DOCUMENTATION.md → "Deployment"  
→ See QUICK_REFERENCE.md → "Deploy to Vercel"

### "Fix an error"
→ See QUICK_REFERENCE.md → "Common Error Solutions"

---

## Key Code Patterns

### Gemini AI Usage
```typescript
import { gemini } from './services/geminiService';

for await (const chunk of gemini.streamTech(userInput)) {
  // chunk.text - AI response text
  // chunk.sources - Web citations
}
```

### Adding Products
```typescript
// constants.tsx
export const PRODUCTS: Product[] = [
  {
    id: 'unique-id',
    name: 'Product Name',
    category: 'Routing',
    specs: ['Spec 1', 'Spec 2'],
    description: 'Description',
    imageUrl: 'https://...',
    status: 'In Stock',
  }
];
```

### Image Upload
```typescript
import { uploadImage } from './services/cloudinaryService';

const url = await uploadImage(file);
// Returns: https://res.cloudinary.com/...
```

---

## API Integrations

### 1. Gemini AI
- **Endpoint**: Via `@google/genai` SDK
- **Auth**: API key in GEMINI_API_KEY env var
- **Usage**: Real-time chat support
- **Model**: gemini-3-flash-preview
- **Features**: Streaming, web grounding, system instructions

### 2. Cloudinary
- **Endpoint**: https://api.cloudinary.com/v1_1/{cloud}/image/upload
- **Auth**: Unsigned upload (preset-based)
- **Usage**: Product image hosting
- **Config**: VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_UPLOAD_PRESET

### 3. WhatsApp
- **Endpoint**: https://wa.me/{number}?text={message}
- **Auth**: None (public link)
- **Usage**: B2B contact and quotes

---

## Important Notes for AI

### Current Limitations:
1. **No Backend**: All data in-memory (resets on refresh)
2. **Client-Side Auth**: Admin passcode visible in source
3. **No Database**: Products stored in constants.tsx
4. **No Tests**: Test infrastructure not implemented

### Production Considerations:
1. Need backend API for persistence
2. Need proper authentication system
3. Need database for products
4. Server-side Gemini API calls recommended

### Code Quality:
- ✅ TypeScript strict mode
- ✅ React best practices
- ✅ Memoization for performance
- ⚠️ Large App.tsx needs splitting
- ⚠️ No automated tests

---

## File Sizes Reference

| File | Purpose | Size |
|------|---------|------|
| App.tsx | Main app | ~2000 lines |
| constants.tsx | Data | ~400 lines |
| geminiService.ts | AI | ~75 lines |
| cloudinaryService.ts | Images | ~30 lines |
| types.ts | Types | ~20 lines |
| **Total Code** | | **~2,500 lines** |
| **Documentation** | | **~3,000 lines** |

---

## How to Use This Documentation

### As Gemini AI:
1. Load all 4 documentation files for complete context
2. Reference AI_CODEBASE_SUMMARY.md for technical details
3. Use QUICK_REFERENCE.md for code examples
4. Cite NEXLYN_COMPLETE_DOCUMENTATION.md for explanations

### Prompt Template for Humans Using Gemini:
```
I'm working on NEXLYN, an AI-powered MikroTik distribution platform.

Context: [Paste relevant doc section]

Task: [Specific task]

Please help with: [Question]
```

---

## Complete Feature List

### User Features:
- Product catalog with search and filtering
- Product detail views
- AI chatbot (Grid Expert) for technical support
- WhatsApp integration for quotes
- Dark/Light theme toggle
- Responsive mobile design

### Admin Features:
- Password-protected admin panel
- Product CRUD operations
- Cloudinary image uploads
- Dashboard with analytics charts
- Category management
- WhatsApp number configuration

### Technical Features:
- Streaming AI responses
- Web grounding (AI can search web)
- Image optimization via Cloudinary CDN
- TypeScript type safety
- React memoization
- LocalStorage persistence (theme)

---

## Environment Variables Needed

```env
GEMINI_API_KEY=your_gemini_api_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset_name
```

Get keys from:
- Gemini: https://ai.google.dev/
- Cloudinary: https://cloudinary.com/console

---

## Links

- **GitHub**: https://github.com/vishnu-madhavan-git/NEXLYN---v2
- **AI Studio**: https://ai.studio/apps/drive/1TooJrvvYNEPtXmyX5sfuyYKZ-ofUdW0j

---

## Documentation Files Summary

| File | Lines | Focus |
|------|-------|-------|
| DOCUMENTATION_INDEX.md | 500+ | Navigation guide |
| NEXLYN_COMPLETE_DOCUMENTATION.md | 1,168 | Full reference |
| AI_CODEBASE_SUMMARY.md | 732 | Technical map |
| QUICK_REFERENCE.md | 970 | Code examples |
| **TOTAL** | **2,956** | **Complete** |

---

## Status

- **Version**: 2.0
- **Status**: Active Development
- **Last Updated**: January 2026
- **License**: Proprietary (Nexlyn LLC)
- **Documentation**: Complete ✅

---

## TL;DR for Gemini AI

**You now have complete access to:**
- ✅ Full project documentation (97.7 KB)
- ✅ Complete codebase reference
- ✅ All code examples and patterns
- ✅ Setup, deployment, and integration guides
- ✅ Technical architecture details
- ✅ API documentation

**To help a user with NEXLYN:**
1. Read the relevant documentation section
2. Understand the context from AI_CODEBASE_SUMMARY.md
3. Provide code examples from QUICK_REFERENCE.md
4. Explain using NEXLYN_COMPLETE_DOCUMENTATION.md

**Everything you need is in these 7 documentation files in this repository.**

---

*This file provides a quick entry point for Gemini AI to understand and work with the NEXLYN project. All comprehensive details are in the linked documentation files.*
