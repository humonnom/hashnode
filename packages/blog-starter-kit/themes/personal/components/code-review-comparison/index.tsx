'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface DiffLine {
	content: string;
	type: 'added' | 'removed' | 'unchanged';
}

interface CodeReviewComparisonProps {
	before: string;
	after: string;
	language?: string;
	title?: string;
	descriptions?: string[];
	highlightChanges?: boolean;
}

function processCodeDiff(
	before: string,
	after: string,
): { beforeLines: DiffLine[]; afterLines: DiffLine[] } {
	const beforeLines = before.split('\n');
	const afterLines = after.split('\n');

	const processedBefore: DiffLine[] = beforeLines.map((line) => {
		const isInAfter = afterLines.includes(line);
		return {
			content: line,
			type: isInAfter ? 'unchanged' : 'removed',
		};
	});

	const processedAfter: DiffLine[] = afterLines.map((line) => {
		const isInBefore = beforeLines.includes(line);
		return {
			content: line,
			type: isInBefore ? 'unchanged' : 'added',
		};
	});

	return { beforeLines: processedBefore, afterLines: processedAfter };
}

export function CodeReviewComparison({
	before,
	after,
	language = 'typescript',
	title,
	descriptions,
	highlightChanges = true,
}: CodeReviewComparisonProps) {
	const [view, setView] = useState<'both' | 'after'>('both');
	const [copied, setCopied] = useState(false);
	const [highlightedBefore, setHighlightedBefore] = useState<string>('');
	const [highlightedAfter, setHighlightedAfter] = useState<string>('');
	const [isLoading, setIsLoading] = useState(true);

	const diff = highlightChanges ? processCodeDiff(before, after) : null;

	useEffect(() => {
		const highlightCode = async () => {
			setIsLoading(true);
			try {
				const [beforeHtml, afterHtml] = await Promise.all([
					codeToHtml(before, {
						lang: language,
						theme: 'gruvbox-dark-hard',
					}),
					codeToHtml(after, {
						lang: language,
						theme: 'gruvbox-dark-hard',
					}),
				]);
				setHighlightedBefore(beforeHtml);
				setHighlightedAfter(afterHtml);
			} catch (error) {
				console.error('Failed to highlight code:', error);
				// Fallback to plain text
				setHighlightedBefore(`<pre><code>${before}</code></pre>`);
				setHighlightedAfter(`<pre><code>${after}</code></pre>`);
			}
			setIsLoading(false);
		};

		highlightCode();
	}, [before, after, language]);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(after);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const renderHighlightedCode = (html: string, diffLines: DiffLine[] | null) => {
		if (!diffLines) {
			return (
				<div
					dangerouslySetInnerHTML={{ __html: html }}
					className="[&>pre]:!m-0 [&>pre]:!bg-transparent [&>pre]:!p-0"
				/>
			);
		}

		// Extract code lines from shiki HTML
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = html;
		const codeElement = tempDiv.querySelector('code');
		const lines = codeElement?.innerHTML.split('\n') || [];

		return (
			<code>
				{diffLines.map((line, i) => {
					const highlightedLine = lines[i] || '';
					const lineClass =
						line.type === 'removed'
							? 'bg-red-500/20 -mx-4 px-4 border-l-4 border-red-500 block'
							: line.type === 'added'
							? 'bg-green-500/20 -mx-4 px-4 border-l-4 border-green-500 block'
							: 'block';

					return (
						<div
							key={i}
							className={lineClass}
							dangerouslySetInnerHTML={{ __html: highlightedLine }}
						/>
					);
				})}
			</code>
		);
	};

	if (isLoading) {
		return (
			<div className="w-full space-y-4">
				{title && (
					<div className="space-y-2">
						<h3 className="text-balance text-xl font-semibold">{title}</h3>
						{descriptions?.length && (
							<p className="text-muted-foreground text-pretty whitespace-pre-line text-sm">
								{descriptions.join('\n')}
							</p>
						)}
					</div>
				)}
				<div className="flex items-center justify-center p-12">
					<div className="size-8 border-primary animate-spin rounded-full border-4 border-t-transparent" />
				</div>
			</div>
		);
	}

	return (
		<div className="w-full space-y-4">
			{title && (
				<div className="space-y-2">
					<h3 className="text-balance text-xl font-semibold">{title}</h3>
					{descriptions?.length && (
						<p className="text-muted-foreground text-pretty whitespace-pre-line text-sm">
							{descriptions.join('\n')}
						</p>
					)}
				</div>
			)}

			<div className="flex items-center gap-2">
				<Button
					variant={view === 'both' ? 'default' : 'outline'}
					size="sm"
					onClick={() => setView('both')}
				>
					Before & After
				</Button>
				<Button
					variant={view === 'after' ? 'default' : 'outline'}
					size="sm"
					onClick={() => setView('after')}
				>
					After Only
				</Button>
			</div>

			<div className="relative">
				<AnimatePresence mode="wait">
					{view === 'both' && (
						<motion.div
							className="absolute left-1/2 top-1/2 z-20 -ml-[1.1rem] hidden md:block"
							initial={{ scale: 0, rotate: -180 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
						>
							<div className="bg-primary text-primary-foreground flex items-center justify-center rounded-full p-1 shadow-lg">
								<ArrowRight size={30} />
							</div>
						</motion.div>
					)}
					{view === 'both' ? (
						<motion.div
							key="both"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="grid gap-4 md:grid-cols-2"
						>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1, duration: 0.4 }}
							>
								<Card className="relative overflow-hidden">
									<div className="bg-muted/50 sticky top-0 z-10 flex items-center justify-between border-b px-4 py-2 backdrop-blur">
										<span className="text-muted-foreground text-sm font-medium">Before</span>
										<span className="bg-destructive/10 text-destructive rounded-full px-2 py-0.5 text-xs font-medium">
											Old
										</span>
									</div>
									<div className="relative">
										<pre className="overflow-x-auto !bg-[#0d1117] p-4 text-sm">
											{renderHighlightedCode(highlightedBefore, diff ? diff.beforeLines : null)}
										</pre>
									</div>
								</Card>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2, duration: 0.4 }}
								className="relative"
							>
								<Card className="border-primary/20 relative overflow-hidden border-2">
									<div className="bg-primary/5 sticky top-0 z-10 flex items-center justify-between border-b px-4 py-2 backdrop-blur">
										<span className="text-foreground text-sm font-medium">After</span>
										<div className="flex items-center gap-2">
											<span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
												Improved
											</span>
											<Button variant="ghost" size="icon" className="size-7" onClick={handleCopy}>
												{copied ? (
													<Check className="size-4 text-primary" />
												) : (
													<Copy className="size-4" />
												)}
											</Button>
										</div>
									</div>
									<div className="relative">
										<pre className="overflow-x-auto !bg-[#0d1117] p-4 text-sm">
											{renderHighlightedCode(highlightedAfter, diff ? diff.afterLines : null)}
										</pre>
									</div>
								</Card>
							</motion.div>
						</motion.div>
					) : (
						<motion.div
							key="after"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<Card className="border-primary/20 relative overflow-hidden border-2">
								<div className="bg-primary/5 sticky top-0 z-10 flex items-center justify-between border-b px-4 py-2 backdrop-blur">
									<span className="text-foreground text-sm font-medium">After</span>
									<div className="flex items-center gap-2">
										<span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
											Improved
										</span>
										<Button variant="ghost" size="icon" className="size-7" onClick={handleCopy}>
											{copied ? (
												<Check className="size-4 text-primary" />
											) : (
												<Copy className="size-4" />
											)}
										</Button>
									</div>
								</div>
								<div className="relative">
									<pre className="overflow-x-auto !bg-[#0d1117] p-4 text-sm">
										{renderHighlightedCode(highlightedAfter, diff ? diff.afterLines : null)}
									</pre>
								</div>
							</Card>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
