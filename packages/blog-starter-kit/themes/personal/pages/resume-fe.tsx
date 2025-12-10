import ResumePage from '../components/resume/resume-page';
import data from '../data/resume-dev.json';

export default function Page() {
	return <ResumePage type={'engineer'} data={data} />;
}
