export default function ResumeJA() {
	return (
		<main className="bg-background text-foreground min-h-screen">
			<div className="mx-auto max-w-6xl px-4 py-12">
				<div className="mb-8">
					<h1 className="mb-2 text-3xl font-bold">일본어 이력서</h1>
					<p className="text-muted-foreground">자유 형식 - 2025년 6월 기준</p>
				</div>

				<div className="bg-card border-border rounded-lg border p-4 shadow-sm">
					<div className="mb-4 flex items-center justify-between">
						<p className="text-muted-foreground text-sm">
							PDF가 표시되지 않는 경우{' '}
							<a href="/resume-ja-2025-06.pdf" download className="text-primary hover:underline">
								여기를 클릭하여 다운로드
							</a>
						</p>
					</div>

					<div className="relative w-full" style={{ height: 'calc(100vh - 250px)' }}>
						<iframe
							src="/resume-ja-2025-06.pdf"
							className="h-full w-full rounded border-0"
							title="Japanese Resume PDF"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
