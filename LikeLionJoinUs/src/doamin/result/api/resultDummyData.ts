export type PositionData = {
  positionName: string;
  description: string;
  abilities: string[];
  keywords: string[];
  tools: string[];
  knowledge: string[];
  skills: string[];
};

export const resultDummyData: PositionData = {
  positionName: "기획",
  description: "'아기사자들 나만 따라와' 당신은 기획형 아기사자",
  abilities: [
    "프로젝트 기획, 개발, 마케팅 등 여러 업무를 총괄한다.",
    "프로젝트의 비전과 전략을 설계한다.",
    "디자이너, 개발자 등 다양한 직군과 원활히 소통한다.",
  ],
  keywords: [
    "계획왕",
    "모든 상황에 대안 준비",
    "현실적인 낙관주의자",
    "팀 분위기 메이커",
  ],
  tools: ["Figma"],
  knowledge: ["데이터 분석", "개발 및 디자인 관련 지식"],
  skills: ["문서 작성", "프로젝트 관리"],
};
