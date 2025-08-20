# PDFs Folder

This is where you can store all your project PDFs for download.

## How to add PDFs:
1. Drop your PDF files directly into this folder
2. Reference them in your project data like this:
   ```typescript
   demoUrl: "/src/assets/pdfs/your-project.pdf"
   ```

## Supported formats:
- .pdf

## Tips:
- Use descriptive filenames that match your project names
- Keep PDFs optimized for web (under 10MB recommended)
- Use lowercase and hyphens for filenames (e.g., "risc-v-processor-pipeline.pdf")
- The filename will be used as the download name when users click the button

## Example usage in projects.ts:
```typescript
{
  title: "My Project",
  demoUrl: "/src/assets/pdfs/my-project.pdf",
  // ... other project properties
}
```
