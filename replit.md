# CapCut Pro APK Download Website

## Overview
This is a React-based website for downloading CapCut Pro APK with premium features unlocked. The site provides information about the app, installation guides, and download links.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite with SWC for fast compilation

## Tech Stack
- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19
- Tailwind CSS 3.4.17
- shadcn/ui components
- React Router DOM 6.30.1
- TanStack React Query 5.83.0

## Development Setup
- **Port**: 5000 (configured for Replit)
- **Host**: 0.0.0.0 (allows proxy access)
- **Workflow**: `npm run dev` starts the development server

## Pages Structure
- `/` - Homepage with hero section and app info
- `/capcut-pro` - CapCut Pro specific information
- `/features` - App features overview
- `/blog` - Blog section
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/dmca` - DMCA policy
- `/disclaimer` - Disclaimer
- `/contact` - Contact information
- `/faq` - Frequently asked questions
- `/installation-guide` - Installation instructions
- `/troubleshooting` - Troubleshooting guide

## Deployment
- **Target**: Autoscale (stateless frontend)
- **Build**: `npm run build`
- **Start**: `npm run preview`

## Recent Changes
- Configured Vite server for Replit environment (port 5000, host 0.0.0.0)
- Set up workflow for frontend development
- Configured deployment settings for production
- Fixed Navigation component import error (added missing Home icon import)
- Created complete navigation with all requested pages:
  - CapCut Mod APK page
  - Download page  
  - Support page
- Updated Navigation component to use React Router Links
- Added all missing routes to App.tsx
- Downloaded CapCutPro.zip (2.6MB) from GitHub releases to public/downloads/
- Updated all download links to use local file (dist/downloads/CapCutPro.zip)
- Configured Vite config for GitHub Pages deployment at CAPCUTVIP.github.io
- Added allowedHosts: true for Replit proxy compatibility
- Successfully tested build process and verified all pages working
- Configured deployment settings: autoscale target with npm build/preview

## User Preferences
None specified yet.