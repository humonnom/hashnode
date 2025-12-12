const ArticleTitle = ({ title }: { title?: string }) => {
	return (
		<h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-white">
			{title}
		</h1>
	);
};

export default ArticleTitle;
