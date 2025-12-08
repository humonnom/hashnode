import resumeData from "../data/resume.json"
import { ResumeHeader } from "../components/resume/resume-header"
import { SectionTitle } from "../components/resume/section-title"
import { EmploymentCard } from "../components/resume/employment-card"
import { EducationCard } from "../components/resume/education-card"
import { SkillsSection } from "../components/resume/skills-section"

export default function ResumePage() {
	return (
		<main className="min-h-screen bg-background">
			<div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
				<ResumeHeader personal={resumeData.personal} links={resumeData.links} />

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

				<section>
					<SectionTitle>Interest</SectionTitle>
					<div className="space-y-2">
						{resumeData.interests.map((interest, index) => (
							<div key={index} className="flex items-start gap-3">
								<span className="text-primary mt-1">•</span>
								<p className="text-muted-foreground">{interest}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	)
}
