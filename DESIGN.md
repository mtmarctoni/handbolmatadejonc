---
name: Club Handbol Mata de Jonc
description: Official website for a handball club in Palma, Mallorca - energetic, community-focused, proud of tradition
colors:
  primary: "#009c4d"
  primary-dark: "#007a3d"
  secondary: "#231f20"
  accent: "#e9f4ed"
  dark: "#1a1a1a"
  light: "#fafafa"
  muted: "#6b7280"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.95
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.light}"
    textColor: "{colors.dark}"
    rounded: "{rounded.xl}"
    padding: "32px"
  card-dark:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "32px"
  input:
    backgroundColor: "{colors.light}"
    textColor: "{colors.dark}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
---

# Design System: Club Handbol Mata de Jonc

## 1. Overview

**Creative North Star: "The Club House"**

This is a sports club website that feels like walking into the club house itself—warm, proud, and welcoming. The design communicates energy and determination without shouting, balancing 30 years of tradition with a modern digital presence. The primary green (#009c4d) carries the club's identity like a jersey color—it's vibrant, confident, and unmistakably "them."

The system explicitly rejects generic sports templates with stock photos and corporate feel, overly modern tech-startup aesthetics, and too formal or institutional presentations. This should feel like a real local club, not a franchise.

**Key Characteristics:**
- Vibrant green as the dominant brand color
- Dark sections for contrast and drama
- Clean typography with sporty energy
- Real photos and community imagery
- Action-oriented CTAs that drive connection

## 2. Colors

The palette is anchored by a vibrant sports green that carries the club's identity, paired with deep neutrals for contrast and a light accent for breathing room.

### Primary
- **Vibrant Sports Green** (#009c4d): The club's jersey color. Used for CTAs, links, accents, and brand moments. Carries energy and pride.
- **Deep Forest Green** (#007a3d): Hover states and darker accents. Adds depth without introducing new hues.

### Secondary
- **Midnight Charcoal** (#231f20): The club's secondary color. Used for dark sections, footer, and heavy text.

### Neutral
- **Soft Black** (#1a1a1a): Primary text color. High contrast on light backgrounds.
- **Clean White** (#fafafa): Body background and light sections.
- **Muted Gray** (#6b7280): Secondary text, labels, and subtle UI elements.
- **Mint Wash** (#e9f4ed): Accent backgrounds and subtle tints. Lighter than primary for breathing room.

### Named Rules
**The Jersey Color Rule.** The primary green is used on ≤15% of any given screen. Its rarity makes it powerful—when it appears, it means something: a CTA, a link, a brand moment. Don't flood surfaces with it.

## 3. Typography

**Display Font:** Outfit (with system fallbacks)
**Body Font:** DM Sans (with system fallbacks)
**Label/Mono Font:** Space Mono (with monospace fallbacks)

**Character:** Outfit brings geometric confidence to headlines—bold, clean, sporty. DM Sans provides warm readability for body text. Space Mono adds technical precision for labels and accents.

### Hierarchy
- **Display** (700, clamp(2.5rem, 7vw, 5rem), 0.95): Hero headlines and major section titles. The club's voice at its loudest.
- **Headline** (700, 2.5rem–3rem, 1.1): Section headings. Clear and confident.
- **Title** (600, 1.25rem, 1.3): Card titles and subsection headers.
- **Body** (400, 1rem, 1.6): Primary reading text. Max line length 65–75ch for readability.
- **Label** (700, 0.75rem, 0.1em, uppercase): Section eyebrows, navigation items, and accent text. Space Mono's monospace precision.

### Named Rules
**The Three-Font Rule.** Outfit for headlines (energy), DM Sans for body (warmth), Space Mono for labels (precision). Never use Outfit for body text or Space Mono for headlines.

## 4. Elevation

The system uses lifted elements with consistent shadow vocabulary. Cards and containers float above the background with subtle shadows that deepen on hover, creating a sense of physical presence—like objects in a real club house.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 4px 24px rgba(0,0,0,0.08)`): Default card shadow. Creates gentle lift.
- **Elevated** (`box-shadow: 0 8px 32px rgba(0,0,0,0.12)`): Hover state and featured cards. More pronounced lift.
- **Dramatic** (`box-shadow: 0 12px 48px rgba(0,0,0,0.16)`): Hero elements and primary CTAs. Maximum presence.

### Named Rules
**The Hover Lift Rule.** Shadows deepen on hover to create physical feedback. Cards rise, CTAs lift, elements respond to interaction like real objects.

## 5. Components

### Buttons
- **Shape:** Gently rounded (16px radius)
- **Primary:** Vibrant green background (#009c4d), white text, 16px 32px padding. The club's jersey color in action.
- **Hover / Focus:** Deep forest green (#007a3d), subtle lift with elevated shadow. Smooth 200ms transition.
- **Secondary / Ghost:** Transparent background with white/10% overlay, white text. For less prominent actions.

### Cards
- **Corner Style:** Extra-large radius (24px)
- **Background:** Clean white (#fafafa) for light sections, rgba(255,255,255,0.05) for dark sections
- **Shadow Strategy:** Ambient by default, elevated on hover
- **Border:** None—shadows create depth
- **Internal Padding:** 32px (2xl)

### Inputs
- **Style:** Clean white background, subtle border, 12px radius
- **Focus:** Primary green border with subtle glow
- **Error / Disabled:** Red border for errors, gray for disabled

### Navigation
- **Style:** Sticky header with backdrop blur. Logo left, nav links center, CTA right.
- **Typography:** Space Mono for nav items (uppercase, tracked)
- **Default/Hover/Active:** White text, green on hover, solid green for active
- **Mobile:** Hamburger menu with full-screen overlay

## 6. Do's and Don'ts

### Do:
- **Do** use the primary green (#009c4d) for CTAs, links, and brand moments—sparingly but confidently
- **Do** use dark sections (Midnight Charcoal #231f20) for contrast and drama
- **Do** use real photos of the club, players, and community
- **Do** keep body text at 65–75ch for readability
- **Do** use Space Mono for labels and accent text to add technical precision
- **Do** create hover states with elevated shadows for physical feedback

### Don't:
- **Don't** flood surfaces with the primary green—its rarity makes it powerful
- **Don't** use gradient text (`background-clip: text`)—it's decorative, not meaningful
- **Don't** use bounce or elastic easing—real objects decelerate smoothly
- **Don't** put tiny uppercase tracked eyebrows above every section—it's AI scaffolding
- **Don't** use generic sports templates or corporate feel—it should feel like a real local club
- **Don't** use overly modern tech-startup aesthetics
- **Don't** use too formal or institutional presentations
