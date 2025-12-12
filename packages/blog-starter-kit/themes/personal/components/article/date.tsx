import { DateFormatter } from '@/components/date-formatter';

const ArticleDate = ({
	publishedAt,
	readTimeInMinutes,
}: {
	publishedAt: string;
	readTimeInMinutes: number;
}) => {
	return (
		<div className="flex gap-2 tracking-tight text-neutral-600 dark:text-neutral-400">
			<DateFormatter dateString={publishedAt} />
			{'•'}
			<span>{readTimeInMinutes} min read</span>
		</div>
	);
};

export default ArticleDate;
