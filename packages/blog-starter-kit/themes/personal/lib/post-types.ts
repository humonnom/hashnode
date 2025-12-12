import { PostFragment } from '../generated/graphql';
import { LocalPost } from './markdown';

// Unified post type that can represent both API and local posts
export type UnifiedPost = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  author: {
    name: string;
  };
  commentCount?: number;
  isLocal: boolean;
};

export function apiPostToUnified(post: PostFragment): UnifiedPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    publishedAt: post.publishedAt,
    author: {
      name: post.author.name,
    },
    commentCount: post.comments?.totalDocuments,
    isLocal: false,
  };
}

export function localPostToUnified(post: LocalPost): UnifiedPost {
  return {
    id: `local-${post.slug}`,
    slug: post.slug,
    title: post.title,
    publishedAt: post.date,
    author: {
      name: post.author,
    },
    isLocal: true,
  };
}

export function mergeAndSortPosts(
  apiPosts: PostFragment[],
  localPosts: LocalPost[]
): UnifiedPost[] {
  const unifiedApiPosts = apiPosts.map(apiPostToUnified);
  const unifiedLocalPosts = localPosts.map(localPostToUnified);

  const allPosts = [...unifiedApiPosts, ...unifiedLocalPosts];

  // Sort by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}
