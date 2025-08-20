# Videos Folder

This is where you can store all your project videos for playback.

## How to add videos:
1. Drop your video files directly into this folder
2. Reference them in your project data like this:
   ```typescript
   demoUrl: "/src/assets/videos/your-project-video.mp4"
   ```

## Supported formats:
- .mp4 (recommended)
- .webm
- .mov
- .avi

## Tips:
- Use descriptive filenames that match your project names
- Keep videos optimized for web (under 50MB recommended)
- Use lowercase and hyphens for filenames (e.g., "stepper-motor-organ.mp4")
- Videos will play in a modal when users click the "View Project" button

## Example usage in projects.ts:
```typescript
{
  title: "My Project",
  demoUrl: "/src/assets/videos/my-project-demo.mp4",
  // ... other project properties
}
```
