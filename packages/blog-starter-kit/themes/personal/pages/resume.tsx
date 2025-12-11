import ResumePage from '../components/resume/resume-page';
import common from '../data/resume-common.json';
import data from '../data/resume-instructor.json';

export default function Page() {
	const { hongik, ecole42 } = common.education;
	return (
		<ResumePage
			type={'instructor'}
			data={{
				...common,
				...data,
				personal: {
					...common.personal,
					...data.personal,
				},
				education: [
					ecole42,
					{
						...hongik,
						degree: hongik.degree + '/ 미술교과 교직 이수',
					},
				],
			}}
		/>
	);
}
