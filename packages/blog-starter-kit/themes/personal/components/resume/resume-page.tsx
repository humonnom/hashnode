import { Button } from '../button';
import { EducationCard } from './education-card';
import { EmploymentCard } from './employment-card';
import { ProjectCard } from './project-card';
import { ResumeHeader } from './resume-header';
import { SectionDivider } from './section-divider';
import { SectionTitle } from './section-title';
import { SkillsSection } from './skills-section';
import { ResumeData } from './types';

export default function ResumePage({
	data,
	type,
}: {
	data: ResumeData;
	type: 'instructor' | 'engineer';
}) {
	const handlePrint = () => {
		window.print();
	};

	return (
		<main className="bg-background text-foreground [&_*]:border-border [&_*]:outline-ring/50 min-h-screen">
			<div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
				<div className="mb-8 flex items-start justify-between">
					<ResumeHeader personal={data.personal} links={data.links} />
					<Button
						label="PDF로 출력"
						type="outline"
						onClick={handlePrint}
						className="hidden md:block print:hidden"
					/>
				</div>

				<section className="mb-12">
					<SectionTitle>Employment</SectionTitle>
					{type === 'engineer' ? (
						<div>
							{data.employmentEngineer.map((job, index) => (
								<EmploymentCard key={job.id} job={job} index={index} />
							))}
							<SectionDivider label="Instructor" />
							{data?.employment.map((job, index) => (
								<EmploymentCard key={job.id} job={job} index={index} />
							))}
						</div>
					) : (
						<div>
							{data.employment.map((job, index) => (
								<EmploymentCard key={job.id} job={job} index={index} />
							))}
							<SectionDivider label="Engineering" />
							{data?.employmentEngineer.map((job, index) => (
								<EmploymentCard key={job.id} job={job} index={index} />
							))}
						</div>
					)}
				</section>

				<section className="mb-12">
					<SectionTitle>Education</SectionTitle>
					<div>
						{data.education.map((edu, index) => (
							<EducationCard key={index} edu={edu} index={index} />
						))}
					</div>
				</section>

				<section className="mb-12">
					<SectionTitle>Technical Skills</SectionTitle>
					<SkillsSection skills={data.skills} />
				</section>

				<section className="mb-12">
					<SectionTitle>Language</SectionTitle>
					{data.languages.map((lang, index) => (
						<div key={index} className="bg-card border-border rounded-lg border p-5">
							<p className="text-base font-medium">
								{lang.language}{' '}
								<span className="text-muted-foreground">
									{lang.languageKo} - {lang.level}
								</span>
							</p>
							<p className="text-muted-foreground mt-1 text-sm">{lang.certification}</p>
						</div>
					))}
				</section>

				<section className="mb-12">
					<SectionTitle>Projects</SectionTitle>
					<div>
						{data.projects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
