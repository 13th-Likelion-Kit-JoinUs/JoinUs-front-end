export type PositionData = {
	positionName: string;
	description: string;
	abilities: string[];
	tools: string[];
	knowledge: string[];
	skills: string[];
};

export const resultDummyData: PositionData[] = [
	{
		positionName: '기획',
		description: '아기사자들, 나만 따라와~',
		abilities: [
			'프로젝트 기획, 개발, 마케팅 등 여러 업무를 총괄한다.',
			'프로젝트의 비전과 전략을 설계한다.',
			'디자이너, 개발자 등 다양한 직군과 원활히 소통한다.',
		],

		tools: ['Notion', 'Jira'],
		knowledge: ['데이터 분석', '개발 및 디자인 관련 지식'],
		skills: ['문서 작성', '프로젝트 관리'],
	},
	{
		positionName: '백엔드',
		description: '우리 논리적으로 생각해볼까?',
		abilities: [
			'서버와 데이터베이스를 관리하고 사용자에게 필요한 정보를 제공한다.',
			'빠르고 정확한 분석과 효율을 추구하는 사고방식으로 개발의 본질에 집중한다.',
			'확장 가능한 구조를 설계하는 감각을 지닌다.',
		],
		tools: ['C/C++', 'Python', 'Java'],
		knowledge: ['통신 개념', '데이터베이스', '운영체제'],
		skills: ['Django', 'Spring', 'Node.js', 'Flask'],
	},
	{
		positionName: '프론트엔드',
		description: '순발력과 대응은 나에게 맡겨!',
		abilities: [
			'사용자가 직접 상호작용할 수 있는 웹사이트나 앱의 사용자 인터페이스를 개발한다.',
			'빠른 변화에 잘 적응하고 새로운 기술을 배우는데 거리낌이 없다.',
			'사용자가 쉽게 사용할 수 있는 UI를 설계한다.',
		],
		tools: ['HTML', 'CSS', 'JavaScript'],
		knowledge: ['브라우저 동작 원리', '웹 접근성'],
		skills: ['React', 'Vue.js', 'TypeScript'],
	},
	{
		positionName: '디자인',
		description: '내가 예쁘게 만들어줄게~',
		abilities: [
			'사용자의 니즈를 파악하고 사용자 중심의 디자인을 구현한다.',
			'현재 트렌드와 기술을 분석하여 효과적인 디자인을 추구한다.',
			'색, 타이포그래피, 아이콘 등의 시각 기법을 이용해 레이아웃을 제작한다.',
		],
		tools: ['Figma'],
		knowledge: ['반응형 디자인', '타이포그래피 원칙'],
		skills: ['UX 디자인', '디자인 원칙', '프로토타이핑'],
	},
];
