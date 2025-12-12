import { UnifiedPost } from '../lib/post-types';
import { MinimalPostPreview } from './minimal-post-preview';

type Props = {
	posts: UnifiedPost[];
	context: 'home' | 'series' | 'tag';
};

export const MinimalPosts = ({ posts }: Props) => {
	return (
		<section className="flex w-full flex-col items-stretch gap-10 lg:max-w-lg">
			{posts.map((post) => (
				<MinimalPostPreview
					key={post.id}
					title={post.title}
					date={post.publishedAt}
					author={{
						name: post.author.name,
					}}
					slug={post.slug}
					commentCount={post.commentCount}
					isLocal={post.isLocal}
				/>
			))}
		</section>
	);
};
