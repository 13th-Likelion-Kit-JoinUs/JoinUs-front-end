type Question = {
	id: number;
	question: string;
	step: number;
	choices: Choice[];
};

type Choice = {
	id: number;
	choiceText: string;
	scorePlanning: number;
	scoreDesign: number;
	scoreFront: number;
	scoreBack: number;
};

export const questionDummyData: Question[] = [
	{
		id: 1,
		question:
			'사자 무리가 새로운 사냥터를 찾아 나섭니다. 당신은 어떤 역할을 맡고 싶나요?',
		step: 1,
		choices: [
			{
				id: 1,
				choiceText: '사냥터의 위험 요소를 분석하며 안전한 길을 찾는다.',
				scorePlanning: 1,
				scoreDesign: 0,
				scoreFront: 1,
				scoreBack: 3,
			},
			{
				id: 2,
				choiceText: '새로운 장소를 직접 탐색하며 사냥에 적합한 환경을 찾는다.',
				scorePlanning: 0,
				scoreDesign: 1,
				scoreFront: 3,
				scoreBack: 1,
			},
		],
	},
	{
		id: 2,
		question:
			'무리가 영역 표시를 준비합니다. 당신은 어떻게 영역을 꾸미겠습니까?',
		step: 2,
		choices: [
			{
				id: 3,
				choiceText:
					'영역을 가장 보기 좋고 강렬하게 꾸며 다른 무리에게 깊은 인상을 준다.',
				scorePlanning: 1,
				scoreDesign: 3,
				scoreFront: 1,
				scoreBack: 0,
			},
			{
				id: 4,
				choiceText: '영역의 구조와 안전성을 중점적으로 설계한다.',
				scorePlanning: 0,
				scoreDesign: 1,
				scoreFront: 1,
				scoreBack: 3,
			},
		],
	},
	{
		id: 3,
		question:
			'사냥 중 예상치 못한 문제가 발생했습니다. 당신은 어떤 방식으로 대처하겠습니까?',
		step: 3,
		choices: [
			{
				id: 5,
				choiceText: '침착하게 원인을 분석하고 무리에게 해결책을 제안한다.',
				scorePlanning: 1,
				scoreDesign: 0,
				scoreFront: 1,
				scoreBack: 3,
			},
			{
				id: 6,
				choiceText: '빠르게 행동하여 문제를 해결하고 사냥을 이어간다.',
				scorePlanning: 1,
				scoreDesign: 1,
				scoreFront: 3,
				scoreBack: 0,
			},
		],
	},
	{
		id: 4,
		question:
			'무리 내에서 의견 충돌이 발생했습니다. 당신은 어떻게 조율하겠습니까?',
		step: 4,
		choices: [
			{
				id: 7,
				choiceText: '모두의 의견을 정리하고 설득력 있는 대안을 제시한다.',
				scorePlanning: 3,
				scoreDesign: 1,
				scoreFront: 0,
				scoreBack: 1,
			},
			{
				id: 8,
				choiceText: '시각적으로 이해하기 쉬운 자료를 만들어 설득한다.',
				scorePlanning: 0,
				scoreDesign: 3,
				scoreFront: 1,
				scoreBack: 1,
			},
		],
	},
	{
		id: 5,
		question:
			'새로운 기술을 배울 기회가 생겼습니다. 당신은 어떻게 접근하겠습니까?',
		step: 5,
		choices: [
			{
				id: 9,
				choiceText: '기술의 안정성과 효율성을 철저히 검토한다.',
				scorePlanning: 1,
				scoreDesign: 1,
				scoreFront: 0,
				scoreBack: 3,
			},
			{
				id: 10,
				choiceText: '새로운 기술을 바로 테스트하고 효과를 확인한다.',
				scorePlanning: 0,
				scoreDesign: 1,
				scoreFront: 3,
				scoreBack: 1,
			},
		],
	},
	{
		id: 6,
		question:
			'무리가 새로운 먹이를 발견했습니다. 당신은 어떤 역할을 맡고 싶나요?',
		step: 6,
		choices: [
			{
				id: 11,
				choiceText:
					'먹이를 나누는 기준을 정리하고 무리가 효율적으로 배분하도록 돕는다.',
				scorePlanning: 3,
				scoreDesign: 0,
				scoreFront: 1,
				scoreBack: 1,
			},
			{
				id: 12,
				choiceText: '먹이를 보기 좋게 정리하고 무리의 사기를 높인다.',
				scorePlanning: 1,
				scoreDesign: 3,
				scoreFront: 1,
				scoreBack: 0,
			},
		],
	},
	{
		id: 7,
		question: '폭풍 속에서 무리가 흩어졌습니다. 당신은 어떻게 대응하겠습니까?',
		step: 7,
		choices: [
			{
				id: 13,
				choiceText: '침착하게 무리의 위치를 파악하고 안전한 장소로 유도한다.',
				scorePlanning: 3,
				scoreDesign: 0,
				scoreFront: 1,
				scoreBack: 1,
			},
			{
				id: 14,
				choiceText: '빠르게 움직이며 흩어진 무리원들을 하나로 모은다.',
				scorePlanning: 1,
				scoreDesign: 1,
				scoreFront: 3,
				scoreBack: 0,
			},
		],
	},
	{
		id: 8,
		question:
			'사자들이 축제를 준비하고 있습니다. 당신은 어떤 부분에 기여하고 싶나요?',
		step: 8,
		choices: [
			{
				id: 15,
				choiceText: '축제의 분위기를 꾸미고 무리원들이 즐길 수 있도록 한다.',
				scorePlanning: 0,
				scoreDesign: 3,
				scoreFront: 1,
				scoreBack: 1,
			},
			{
				id: 16,
				choiceText: '축제의 흐름과 역할 분담을 체계적으로 정리한다.',
				scorePlanning: 3,
				scoreDesign: 1,
				scoreFront: 0,
				scoreBack: 1,
			},
		],
	},
	{
		id: 9,
		question:
			'새로운 사냥터에서 적과 마주쳤습니다. 당신은 어떻게 행동할 것 같나요?',
		step: 9,
		choices: [
			{
				id: 17,
				choiceText: '적의 행동을 관찰하고 우리 무리의 방어 계획을 세운다.',
				scorePlanning: 1,
				scoreDesign: 0,
				scoreFront: 1,
				scoreBack: 3,
			},
			{
				id: 18,
				choiceText: '무리와 협력하여 적에게 강력한 메시지를 전달한다.',
				scorePlanning: 3,
				scoreDesign: 1,
				scoreFront: 1,
				scoreBack: 0,
			},
		],
	},
	{
		id: 10,
		question:
			'당신은 사냥터에서 사냥의 동선을 정리해야 합니다. 어떻게 준비하겠습니까?',
		step: 10,
		choices: [
			{
				id: 19,
				choiceText:
					'사냥터의 환경과 동선을 시각적으로 정리해 모두가 쉽게 이해할 수 있도록 만든다.',
				scorePlanning: 1,
				scoreDesign: 3,
				scoreFront: 1,
				scoreBack: 0,
			},
			{
				id: 20,
				choiceText: '사냥 전략과 효율성을 분석하여 무리에게 전달한다.',
				scorePlanning: 1,
				scoreDesign: 0,
				scoreFront: 0,
				scoreBack: 3,
			},
		],
	},
];
