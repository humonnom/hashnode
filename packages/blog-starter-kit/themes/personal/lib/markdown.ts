import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export interface LocalPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  content: string;
  isLocal: true;
}

export function getLocalPosts(): LocalPost[] {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const markdownFiles = fileNames.filter((fileName) =>
    fileName.endsWith('.md')
  );

  const posts = markdownFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anonymous',
      excerpt: data.excerpt || '',
      content,
      isLocal: true as const,
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLocalPostBySlug(slug: string): LocalPost | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    author: data.author || 'Anonymous',
    excerpt: data.excerpt || '',
    content,
    isLocal: true,
  };
}
