import { useRouter } from 'next/router';
import ResumePage from '../components/resume/resume-page';
import data from '../data/resume.json';

export default function Page() {
	const router = useRouter();

	return <ResumePage type={'instructor'} data={data} />;
}
