// src/types/scenario.ts
export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  personality: string;
  avatar: string;
}

export interface StrategyOption {
  id: string;
  title: string;
  description: string; // This will be the text used for the truncated first line
  approach: string;    // This is the full detail shown on expand
  isCorrect: boolean;
  feedback: string;
  optionImage?: string; // << NEW FIELD for the image path (optional)
  lectureReference?: string;
  nextScene?: string | number;
}

export interface Scene {
  id: number | string;
  title: string;
  description: string;
  context: string;
  question: string;
  options: StrategyOption[];
  correctFeedback: string;
  incorrectFeedback: string;
}

export interface ScenarioData {
  title: string;
  description: string;
  characters: Character[];
  scenes: Scene[];
}
