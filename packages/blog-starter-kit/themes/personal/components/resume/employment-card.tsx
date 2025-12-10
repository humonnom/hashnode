import { BaseCard } from "./base-card"
import { Employment } from "./types"

export function EmploymentCard({ job, index }: { job: Employment; index: number }) {
  const links = job.website ? [{ href: job.website }] : []

  const positionElement = (
    <>
      {job.position}
      {job.type && <span className="text-sm text-muted-foreground ml-2">({job.type})</span>}
    </>
  )

  return (
    <BaseCard
      index={index}
      company={job.company}
      companyEn={job.companyEn}
      period={job.period}
      position={positionElement}
      links={links}
      responsibilities={job.responsibilities}
      stack={job.stack}
    />
  )
}
