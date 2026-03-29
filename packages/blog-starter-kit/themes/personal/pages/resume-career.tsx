import { Mail, Phone } from 'lucide-react';
import { Button } from '../components/button';
import type { Employment } from '../components/resume/types';
import common from '../data/resume-common.json';
import engineer from '../data/resume-engineer.json';

const employmentHistory: Employment[] = engineer.employmentEngineer;
const otherWorkHistory: Employment[] = [
	{
		id: 'anthracite-barista',
		company: '앤트러사이트 연희점',
		companyEn: 'Anthracite Coffee Yeonhui',
		position: 'Barista | 바리스타',
		type: '아르바이트',
		period: '2018 - 2019',
		responsibilities: [
			{
				category: '고객 응대 및 매장 운영',
				items: [
					'음료 제조와 고객 응대를 수행하며 매장 운영을 지원',
					'현장 상황에 맞춰 고객 문의 응대와 주문 흐름을 처리',
					'바쁜 시간대에 팀원들과 역할을 나누어 매장 운영에 참여',
				],
			},
		],
		stack: ['Customer Service', 'Store Operations'],
	},
];
const careerAccent = '#5F7183';
const careerAccentBg = 'color-mix(in srgb, #5F7183 12%, transparent)';
const careerAccentBorder = 'color-mix(in srgb, #5F7183 24%, var(--border))';
const careerAccentStrong = 'color-mix(in srgb, #5F7183 72%, transparent)';

function SummaryTable() {
	return (
		<div
			className="bg-card rounded-lg border overflow-hidden"
			style={{ borderColor: careerAccentBorder }}
		>
			<table className="w-full border-collapse text-sm md:text-base">
				<tbody>
					<tr className="[&>*]:border-border [&>*]:border-b [&>*]:border-r last:[&>*]:border-r-0">
						<th
							className="w-1/4 px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							문서명
						</th>
						<td className="px-4 py-3">경력기술서</td>
						<th
							className="w-1/4 px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							이름
						</th>
						<td className="px-4 py-3">박주은</td>
					</tr>
					<tr className="[&>*]:border-border [&>*]:border-r last:[&>*]:border-r-0">
						<th
							className="px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							주요 경력 분야
						</th>
						<td className="px-4 py-3">서비스 운영, 프론트엔드 개발</td>
						<th
							className="px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							현재 정리 범위
						</th>
						<td className="px-4 py-3">정규직 근무 경력 2건</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function CareerTable({ job }: { job: Employment }) {
	const majorWorkItems = job.responsibilities
		.map((responsibility) => {
			if (responsibility.items.length === 0) {
				return responsibility.category;
			}

			return `${responsibility.category}\n${responsibility.items
				.map((item) => `- ${item.startsWith('-') ? item.slice(1).trim() : item}`)
				.join('\n')}`;
		})
		.join('\n\n');

	return (
		<section
			className="bg-card rounded-lg border overflow-hidden"
			style={{ borderColor: careerAccentBorder }}
		>
			<div
				className="h-1 w-full"
				style={{ backgroundColor: careerAccentStrong }}
			/>
			<table className="w-full border-collapse text-sm md:text-base">
				<tbody>
					<tr className="[&>*]:border-border [&>*]:border-b [&>*]:border-r last:[&>*]:border-r-0">
						<th
							className="w-[22%] px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							근무처
						</th>
						<td className="px-4 py-3">
							<div className="font-semibold" style={{ color: careerAccent }}>
								{job.company}
							</div>
							<div className="text-muted-foreground text-sm">{job.companyEn}</div>
						</td>
						<th
							className="w-[18%] px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							근무기간
						</th>
						<td className="px-4 py-3">{job.period}</td>
					</tr>
					<tr className="[&>*]:border-border [&>*]:border-b [&>*]:border-r last:[&>*]:border-r-0">
						<th
							className="px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							담당업무/직책
						</th>
						<td className="px-4 py-3">{job.position}</td>
						<th
							className="px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							고용형태
						</th>
						<td className="px-4 py-3">{job.type || '-'}</td>
					</tr>
					<tr className="[&>*]:border-border [&>*]:border-b [&>*]:border-r last:[&>*]:border-r-0">
						<th
							className="px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							주요 서비스/업무
						</th>
						<td className="px-4 py-3">
							{job.responsibilities
								.map((responsibility) => responsibility.category)
								.filter(Boolean)
								.slice(0, 3)
								.join(', ')}
						</td>
						<th
							className="px-4 py-3 text-left font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							기술/도구
						</th>
						<td className="px-4 py-3">{job.stack?.join(', ') || '-'}</td>
					</tr>
					<tr className="[&>*]:border-border [&>*]:border-r last:[&>*]:border-r-0">
						<th
							className="px-4 py-4 text-left align-top font-medium"
							style={{ backgroundColor: careerAccentBg }}
						>
							주요업무 및
							<br />
							업무내용
						</th>
						<td className="px-4 py-4 whitespace-pre-line leading-relaxed" colSpan={3}>
							{majorWorkItems}
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

export default function Page() {
	const handlePrint = () => {
		window.print();
	};

	return (
		<main className="bg-background text-foreground [&_*]:border-border [&_*]:outline-ring/50 min-h-screen">
			<div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
				<div className="mb-8 flex items-start justify-between gap-4">
					<div className="flex-1">
						<header className="mb-8">
							<div className="mb-6 text-center">
								<p className="text-muted-foreground mb-3 text-sm font-medium uppercase tracking-[0.28em]">
									Career Record
								</p>
								<h1 className="text-4xl font-bold md:text-5xl">경력기술서</h1>
								<div
									className="mx-auto mt-4 h-1 w-20 rounded-full"
									style={{ backgroundColor: careerAccentStrong }}
								/>
								<p className="text-muted-foreground mt-3 text-sm md:text-base">
									직무별 경험과 주요 업무를 정리한 문서입니다.
								</p>
							</div>

							<div
								className="bg-card rounded-lg border overflow-hidden"
								style={{ borderColor: careerAccentBorder }}
							>
								<table className="w-full border-collapse text-sm md:text-base">
									<tbody>
										<tr className="[&>*]:border-border [&>*]:border-b [&>*]:border-r last:[&>*]:border-r-0">
											<th
												className="w-[18%] px-4 py-3 text-left font-medium"
												style={{ backgroundColor: careerAccentBg }}
											>
												이름
											</th>
											<td className="px-4 py-3">
												{common.personal.name} ({common.personal.nameKo})
											</td>
											<th
												className="w-[18%] px-4 py-3 text-left font-medium"
												style={{ backgroundColor: careerAccentBg }}
											>
												연락처
											</th>
											<td className="px-4 py-3">
												<div className="flex flex-col gap-1">
													<span className="flex items-center gap-2">
														<Mail className="h-4 w-4" />
														{common.personal.email}
													</span>
													<span className="flex items-center gap-2">
														<Phone className="h-4 w-4" />
														{common.personal.phone}
													</span>
												</div>
											</td>
										</tr>
										<tr className="[&>*]:border-border [&>*]:border-r last:[&>*]:border-r-0">
											<th
												className="px-4 py-3 text-left font-medium"
												style={{ backgroundColor: careerAccentBg }}
											>
												문서 개요
											</th>
											<td className="px-4 py-3 leading-relaxed" colSpan={3}>
												현재는 정규직으로 근무했던 두 회사의 경력을 먼저 정리했습니다.
												이후 다른 직무 경험도 같은 형식으로 확장할 예정입니다.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</header>

						<div className="mb-8">
							<SummaryTable />
						</div>

						<div className="space-y-8">
							{employmentHistory.map((job) => (
								<CareerTable key={job.id} job={job} />
							))}
						</div>

						<section className="mt-12">
							<div className="mb-4">
								<h2 className="text-2xl font-bold" style={{ color: careerAccent }}>
									기타 경력
								</h2>
							</div>
							<div className="space-y-8">
								{otherWorkHistory.map((job) => (
									<CareerTable key={job.id} job={job} />
								))}
							</div>
						</section>
					</div>

					<Button
						label="PDF 출력"
						type="outline"
						onClick={handlePrint}
						className="hidden border-red-500 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-400 dark:text-red-300 dark:hover:bg-red-950/30 print:hidden md:inline-flex md:w-20 md:whitespace-normal md:px-3 md:py-2 md:text-xs md:leading-tight"
					/>
				</div>
			</div>
		</main>
	);
}
