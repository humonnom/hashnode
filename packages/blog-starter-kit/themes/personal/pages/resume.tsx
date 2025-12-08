import resumeData from "../data/resume.json"
import { ResumeHeader } from "../components/resume/resume-header"
import { SectionTitle } from "../components/resume/section-title"
import { EmploymentCard } from "../components/resume/employment-card"
import { ProjectCard } from "../components/resume/project-card"
import { EducationCard } from "../components/resume/education-card"
import { SkillsSection } from "../components/resume/skills-section"
import { Button } from "../components/button"

export default function ResumePage() {
	const handlePrint = () => {
		window.print()
	}

	return (
		<main className="min-h-screen bg-background text-foreground [&_*]:border-border [&_*]:outline-ring/50">
			<div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
				<div className="flex justify-between items-start mb-8">
					<ResumeHeader personal={resumeData.personal} links={resumeData.links} />
					<Button
						label="PDF로 출력"
						type="outline"
						onClick={handlePrint}
						className="print:hidden"
					/>
				</div>

				<section className="mb-12">
					<SectionTitle>Employment</SectionTitle>
					<div>
						{resumeData.employment.map((job, index) => (
							<EmploymentCard key={job.id} job={job} index={index} />
						))}
					</div>
				</section>

				<section className="mb-12">
					<SectionTitle>Education</SectionTitle>
					<div>
						{resumeData.education.map((edu, index) => (
							<EducationCard key={index} edu={edu} index={index} />
						))}
					</div>
				</section>

				<section className="mb-12">
					<SectionTitle>Technical Skills</SectionTitle>
					<SkillsSection skills={resumeData.skills} />
				</section>

				<section className="mb-12">
					<SectionTitle>Language</SectionTitle>
					{resumeData.languages.map((lang, index) => (
						<div key={index} className="p-5 rounded-lg bg-card border border-border">
							<p className="text-base font-medium">
								{lang.language}{" "}
								<span className="text-muted-foreground">
                  {lang.languageKo} - {lang.level}
                </span>
							</p>
							<p className="text-sm text-muted-foreground mt-1">{lang.certification}</p>
						</div>
					))}
				</section>

				<section className="mb-12">
					<SectionTitle>Projects</SectionTitle>
					<div>
						{resumeData.projects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</section>
			</div>
		</main>
	)
}
