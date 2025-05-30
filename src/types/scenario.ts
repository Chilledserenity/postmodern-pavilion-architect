
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
  description: string;
  approach: string;
  isCorrect: boolean;
  feedback: string;
  lectureReference?: string;
  nextScene?: string;
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
