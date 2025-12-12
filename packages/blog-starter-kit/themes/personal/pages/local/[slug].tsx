import { GetStaticPaths, GetStaticProps } from 'next';
import { AppProvider } from '../../components/contexts/appContext';
import { Container } from '../../components/container';
import { Footer } from '../../components/footer';
import { Layout } from '../../components/layout';
import { PersonalHeader } from '../../components/personal-theme-header';
import { PostContent } from '../../components/post-content';
import { getLocalPostBySlug, getLocalPosts, LocalPost } from '../../lib/markdown';
import request from 'graphql-request';
import {
	PublicationByHostDocument,
	PublicationByHostQuery,
	PublicationByHostQueryVariables,
	PublicationFragment,
} from '../../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
	post: LocalPost;
	publication: PublicationFragment;
};

export default function LocalPostPage({ post, publication }: Props) {
	// Convert LocalPost to the format expected by PostContent
	const postForContent = {
		title: post.title,
		publishedAt: post.date,
		content: { markdown: post.content },
	};

	return (
		<AppProvider publication={publication}>
			<Layout>
				<Container className="mx-auto flex max-w-3xl flex-col items-stretch gap-10 px-5 py-10">
					<PersonalHeader />
					<article className="flex flex-col items-start gap-10 pb-10">
						<PostContent post={postForContent} publication={publication} isLocal={true} />
					</article>
					<Footer />
				</Container>
			</Layout>
		</AppProvider>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getLocalPosts();
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const slug = params?.slug as string;
	const post = getLocalPostBySlug(slug);

	if (!post) {
		return {
			notFound: true,
		};
	}

	// Get publication data
	const data = await request<PublicationByHostQuery, PublicationByHostQueryVariables>(
		GQL_ENDPOINT,
		PublicationByHostDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	const publication = data.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post,
			publication,
		},
		revalidate: 1,
	};
};
