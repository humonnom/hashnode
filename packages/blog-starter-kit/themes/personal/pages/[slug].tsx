import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Container } from '../components/container';
import { AppProvider } from '../components/contexts/appContext';
import { Footer } from '../components/footer';
import { Layout } from '../components/layout';
import { MarkdownToHtml } from '../components/markdown-to-html';
import { PersonalHeader } from '../components/personal-theme-header';
import { PostContent } from '../components/post-content';
import {
	PageByPublicationDocument,
	PostFullFragment,
	PublicationFragment,
	SinglePostByPublicationDocument,
	SlugPostsByPublicationDocument,
	StaticPageFragment,
} from '../generated/graphql';

type PostProps = {
	type: 'post';
	post: PostFullFragment;
	publication: PublicationFragment;
};

type PageProps = {
	type: 'page';
	page: StaticPageFragment;
	publication: PublicationFragment;
};

type Props = PostProps | PageProps;


const Page = ({ page }: PageProps) => {
	const title = page.title;
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<MarkdownToHtml contentMarkdown={page.content.markdown} />
		</>
	);
};

export default function PostOrPage(props: Props) {
	const maybePost = props.type === 'post' ? props.post : null;
	const maybePage = props.type === 'page' ? props.page : null;
	const publication = props.publication;

	return (
		<AppProvider publication={publication} post={maybePost} page={maybePage}>
			<Layout>
				<Container className="mx-auto flex max-w-3xl flex-col items-stretch gap-10 px-5 py-10">
					<PersonalHeader />
					<article className="flex flex-col items-start gap-10 pb-10">
						{props.type === 'post' && <PostContent post={props.post} publication={props.publication} />}
						{props.type === 'page' && <Page {...props} />}
					</article>
					<Footer />
				</Container>
			</Layout>
		</AppProvider>
	);
}

type Params = {
	slug: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	if (!params) {
		throw new Error('No params');
	}

	const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
	const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
	const slug = params.slug;

	const postData = await request(endpoint, SinglePostByPublicationDocument, { host, slug });

	if (postData.publication?.post) {
		return {
			props: {
				type: 'post',
				post: postData.publication.post,
				publication: postData.publication,
			},
			revalidate: 1,
		};
	}

	const pageData = await request(endpoint, PageByPublicationDocument, { host, slug });

	if (pageData.publication?.staticPage) {
		return {
			props: {
				type: 'page',
				page: pageData.publication.staticPage,
				publication: pageData.publication,
			},
			revalidate: 1,
		};
	}

	return {
		notFound: true,
		revalidate: 1,
	};
};

export async function getStaticPaths() {
	const data = await request(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		SlugPostsByPublicationDocument,
		{
			first: 10,
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	const postSlugs = (data.publication?.posts.edges ?? []).map((edge) => edge.node.slug);

	return {
		paths: postSlugs.map((slug) => {
			return {
				params: {
					slug: slug,
				},
			};
		}),
		fallback: 'blocking',
	};
}
