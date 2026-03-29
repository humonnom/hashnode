import ResumePage from '../components/resume/resume-page';
import type { ResumeData } from '../components/resume/types';
import common from '../data/resume-common.json';

const data: ResumeData = {
	personal: {
		...common.personal,
		title: 'SDR Intern Candidate',
		intro:
			'안녕하세요. 기술 제품을 이해하는 SDR 인턴 지원자 박주은입니다.',
		description:
			'프론트엔드 개발자와 프리랜서 강사로 일하며, 상대가 실제로 무엇을 어려워하는지 파악하고 그에 맞춰 설명하는 역량을 쌓았습니다.\n\n개발자로 일하며 기술 관련 CS를 직접 처리했고, 반복적으로 들어오는 고객 질문을 줄이기 위한 제품 개선을 경험했습니다. 채널톡을 실제 업무에서 사용하며 고객 문의가 제품 개선으로 이어지는 경험을 했고, 이를 계기로 기술 이해도를 바탕으로 고객 문제와 비즈니스를 더 가까이에서 다루는 역할에 관심을 갖게 되었습니다.\n\n장기적으로는 사업과 비즈니스에 가까운 역할을 하고 싶습니다. 혼자 개념을 익히기보다 현업에서 부딪히며 배우는 방식을 선호하기 때문에, 고객 문제를 더 선명하게 발견하고 적절한 질문과 후속 액션으로 비즈니스 기회를 만드는 SDR 역할로 성장하고 싶습니다. 서울 기반 근무를 목표로 준비 중이며, 2026년 4월 26일부터 서울 거주 예정입니다.',
	},
	links: common.links,
	employment: [
		{
			id: 'codeit',
			company: '코드잇',
			companyEn: 'Codeit',
			position: 'Lead Instructor | 주강사',
			type: '프리랜서',
			period: '2024.06 - Present',
			responsibilities: [
				{
					category: '질문 기반 커뮤니케이션과 운영 개선',
					items: [
						'수강생의 이해도와 목표를 먼저 파악한 뒤 설명 방식과 우선순위를 조정',
						'누적 80명 이상의 수강생과 소통하며 반복 질문 패턴을 정리하고 전달 방식을 개선',
						'매주 수강생 점수와 설문 의견을 확인하며 강의 구조를 데이터 기반으로 수정',
						'집중도 향상을 위해 화면 구성과 전달 방식을 바꾸는 등 학습 경험 개선 실험 진행',
					],
				},
				{
					category: '멘토링과 포지셔닝 경험',
					items: [
						'인프런에서 신입 개발자 대상 이력서 멘토링을 진행하며, 질문을 통해 상대의 실제 고민을 먼저 파악',
						'상위 노출 멘토의 포지셔닝 방식을 분석해 소개 문구와 가격 전략을 조정하고 신청 전환 개선',
						'공통 고민은 템플릿화하고 개인별 상황에 맞춰 일부만 조정하는 방식으로 대응 효율 향상',
					],
				},
			],
			stack: ['Discovery Questioning', 'Structured Communication', 'Presentation', 'Follow-up'],
		},
	],
	employmentEngineer: [
		{
			id: 'artue',
			company: '주식회사 아비투스어소시에이트',
			companyEn: 'Habitus Associate',
			website: 'https://artue.io/',
			position: 'Frontend Developer | 프론트엔드 개발자',
			type: '정규직',
			period: '2023.10 - 2024.05',
			responsibilities: [
				{
					category: '고객 문제를 제품 개선으로 연결한 경험',
					items: [
						'채널톡을 활용해 기술 관련 CS를 직접 처리하며 반복 문의 유형을 파악',
						'로그인 수단을 기억하지 못하는 문의가 많다는 점을 발견하고, 최근 로그인 정보와 가입 수단 확인 기능을 추가',
						'고객 문의를 단순 응대로 끝내지 않고 제품 개선으로 연결해 관련 CS 감소에 기여',
						'PM, 디자이너, 개발자, QA와 협업하며 문제를 정의하고 실행 가능한 작업으로 정리',
					],
				},
				{
					category: '기술 제품 이해와 협업 경험',
					items: [
						'스토어, 어드민, 앱 제품을 운영하며 사용자 흐름과 제품 구조를 빠르게 이해',
						'다국어 지원과 트래킹 작업을 통해 사용자 행동과 맥락을 데이터로 해석하는 경험 축적',
					],
				},
			],
			stack: ['Channel Talk', 'Product Understanding', 'Cross-functional Collaboration', 'Analytics'],
		},
		{
			id: 'luaeb',
			company: '뉴스탠다드에프앤씨',
			companyEn: 'New Standard F&C',
			website: 'https://portfolio-2023-three-sable.vercel.app/projects/1',
			position: 'Software Engineer | 소프트웨어 엔지니어',
			type: '정규직',
			period: '2022.07 - 2023.08',
			responsibilities: [
				{
					category: '사용자 중심 문제 해결과 협업 경험',
					items: [
						'소형 커머스몰과 어드민을 운영하며 사용자 요구사항을 빠른 주기로 반영',
						'채팅룸, Sentry, Amplitude 등 다양한 채널의 피드백을 확인하며 실사용자 관점으로 개선 업무 수행',
						'브랜드, 운영팀과 협업하며 요구사항을 정리하고 실행 가능한 작업으로 구체화',
					],
				},
				{
					category: '전환 가능 역량',
					items: [
						'여러 정보 소스를 바탕으로 고객 상황을 해석하는 리서치 역량',
						'복잡한 내용을 간결한 액션 아이템으로 정리하는 문서화 역량',
					],
				},
			],
			stack: ['Research', 'Documentation', 'Stakeholder Communication'],
		},
	],
	education: [common.education.ecole42, common.education.hongik],
	skills: {
		primary: [
			'Problem Identification',
			'Prospect Research',
			'Discovery Questioning',
			'Structured Communication',
		],
		additional: [
			'Customer Empathy',
			'Follow-up Communication',
			'Cross-functional Collaboration',
			'Product Understanding',
			'Presentation',
			'Research Notes',
			'SaaS Product Understanding',
		],
	},
	languages: [...common.languages],
	projects: [
		{
			id: 'seoro-startup-program',
			company: '2022 문화예술 사회적경제 서로(SEORO):시작 지원사업',
			companyEn: 'SEORO Arts & Social Economy Startup Support Program',
			position: 'Side Project | Team Leader & Presenter',
			period: '2022',
			responsibilities: [
				{
					category: '사이드 프로젝트 기반 창업 프로그램 선정',
					items: [
						'팀 리더와 발표자로 참여해 프로젝트 방향을 정리하고 발표 자료를 준비',
						'프로젝트의 문제의식과 실행 방향을 팀원들과 함께 구체화하고 지원 프로그램 선발을 위한 발표 진행',
						'기술 구현뿐 아니라 팀 내 역할 조율과 외부 대상 커뮤니케이션을 함께 경험',
					],
				},
			],
			stack: ['Team Leadership', 'Presentation', 'Project Planning'],
		},
		{
			id: 'channel-talk-prospect-research',
			company: '채널톡 타깃 계정 리서치',
			companyEn: 'Channel Talk Prospect Research',
			position: 'Personal SDR Preparation Project',
			period: '2026.03 - Present',
			responsibilities: [
				{
					category: '채널톡 도입 가능성 기반 타깃 계정 리서치',
					items: [
						'채널톡을 사용하지 않는 국내 자사몰과 브랜드를 탐색하고, 도입 가능성이 높아 보이는 회사를 리스트업',
						'고객 문의 채널, 운영 구조, 반복 문의 가능성을 기준으로 채널톡 도입 가설을 정리',
						'warm intro 가능 여부를 확인하기 위해 조직 정보, 공개된 접점, 네트워크 단서를 함께 조사',
						'Airtable을 활용해 계정별 특징, 우선순위, pain hypothesis, 접근 포인트를 구조화해 관리',
						'관찰 사실과 가설을 분리해 정리하며 세일즈 관점의 리서치 메모 작성 연습 진행',
					],
				},
			],
			stack: [
				'Airtable',
				'Account Research',
				'ICP Hypothesis',
				'Warm Intro Mapping',
				'Lead Prioritization',
			],
		},
	],
};

export default function Page() {
	return <ResumePage type="sdr" data={data} />;
}
