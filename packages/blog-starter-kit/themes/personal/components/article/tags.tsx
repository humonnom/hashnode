import Link from 'next/link';

const ArticleTags = ({
	tags = [],
}: {
	tags?: {
		id: string;
		slug: string;
	}[];
}) => {
	return (
		<>
			{tags.length > 0 && (
				<div className="mx-auto w-full text-slate-600 dark:text-neutral-300 md:max-w-screen-md">
					<ul className="flex flex-row flex-wrap items-center gap-2">
						{tags.map((tag) => (
							<li key={tag.id}>
								<Link
									href={`/tag/${tag.slug}`}
									className="block rounded-full border px-2 py-1 font-medium hover:bg-slate-50 dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4"
								>
									#{tag.slug}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};
export default ArticleTags;
