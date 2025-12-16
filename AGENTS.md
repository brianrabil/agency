# Agency Development Guidelines

## Commands
- **Development**: `pnpm dev` (with Turbopack)
- **Build**: `pnpm build`
- **Lint/Format**: `pnpm check` (Biome check), `pnpm check:write` (auto-fix)
- **Start**: `pnpm start`

## Code Style
- **Formatter**: Biome with tabs for indentation, double quotes for strings
- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/lib/utils`)
- **Components**: Use React.forwardRef for UI components, TypeScript interfaces for props
- **Styling**: Tailwind CSS with cn() utility for class merging, CVA for component variants
- **File Structure**: App Router structure, components in `/components`, utilities in `/lib`
- **TypeScript**: Strict mode enabled, proper typing for all props and functions
- **UI Library**: Radix UI primitives with custom styling, class-variance-authority for variants