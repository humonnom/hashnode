import ResumePage from '../components/resume/resume-page';
import data from '../data/resume.json';

export default function Page() {
	return <ResumePage type={'instructor'} data={data} />;
}
