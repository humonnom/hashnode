import ResumePage from '../components/resume/resume-page';
import common from '../data/resume-common.json';
import data from '../data/resume-engineer.json';

export default function Page() {
	const { ecole42 } = common.education;
	return (
		<ResumePage
			type={'engineer'}
			data={{
				...common,
				...data,
				personal: {
					...common.personal,
					...data.personal,
				},
				education: [ecole42],
			}}
		/>
	);
}
