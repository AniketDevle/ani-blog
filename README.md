# Aniket's Blog

A modern, responsive blog website built with Next.js, TypeScript, and Tailwind CSS. This blog features a clean design, markdown support, and excellent performance.

## Features

- ✨ **Modern Design**: Clean, responsive design with dark mode support
- 📝 **Markdown Support**: Write blog posts in Markdown with frontmatter
- 🚀 **Fast Performance**: Built with Next.js for optimal performance
- 📱 **Mobile Responsive**: Looks great on all devices
- 🎨 **Tailwind CSS**: Beautiful styling with utility-first CSS
- 🔍 **SEO Optimized**: Proper meta tags and structured data
- 📊 **Tag System**: Organize posts with tags and filtering
- 📧 **Contact Form**: Interactive contact form for reader engagement
- 🌙 **Dark Mode**: Automatic dark mode support

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ani-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ani-blog/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── blog/              # Blog pages
│   │   │   └── [id]/          # Individual blog post pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer component
│   │   └── PostCard.tsx       # Blog post card component
│   ├── content/               # Blog content
│   │   └── posts/             # Markdown blog posts
│   └── lib/                   # Utility functions
│       └── posts.ts           # Blog post utilities
├── public/                    # Static assets
└── package.json
```

## Writing Blog Posts

### Creating a New Post

1. Create a new `.md` file in `src/content/posts/`
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
author: "Your Name"
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Content

Write your blog post content here using Markdown...
```

### Frontmatter Fields

- `title`: The title of your blog post
- `date`: Publication date (YYYY-MM-DD format)
- `excerpt`: A brief description for previews
- `author`: Your name or pen name
- `tags`: Array of tags for categorization

### Markdown Features

The blog supports standard Markdown syntax:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Code**: `` `inline code` ``
- **Code blocks**: ``` ``` ```
- **Lists**: `- item` or `1. item`
- **Blockquotes**: `> quote`

## Customization

### Changing the Brand

1. Update the site title in `src/app/layout.tsx`
2. Modify the header logo/text in `src/components/Header.tsx`
3. Update the footer content in `src/components/Footer.tsx`

### Styling

The blog uses Tailwind CSS for styling. You can:

1. Modify colors in `src/app/globals.css`
2. Update component styles in individual component files
3. Add custom CSS classes as needed

### Adding Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Import and use the `Header` and `Footer` components

### Social Media Links

Update the social media links in:
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The blog can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [remark](https://github.com/remarkjs/remark) - Markdown processing
- [date-fns](https://date-fns.org/) - Date formatting
- [Heroicons](https://heroicons.com/) - Icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me through the blog's contact form
- Reach out on social media

---

Happy blogging! 🚀
