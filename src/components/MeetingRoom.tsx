
import React, { useState } from 'react';
import { Scene } from '@/types/scenario';
import { CommitteePanel } from '@/components/CommitteePanel';
import { SceneContent } from '@/components/SceneContent';
import { ProgressBar } from '@/components/ProgressBar';
import { StrategyCards } from '@/components/StrategyCards';
import { FeedbackModal } from '@/components/FeedbackModal';
import { scenarioData } from '@/data/scenarios';

interface MeetingRoomProps {
  scene: Scene;
  sceneIndex: number;
  totalScenes: number;
  playerChoices: Record<number, string>;
  onChoiceSelect: (choice: string) => void;
  onRestart: () => void;
}

export const MeetingRoom: React.FC<MeetingRoomProps> = ({
  scene,
  sceneIndex,
  totalScenes,
  playerChoices,
  onChoiceSelect,
  onRestart
}) => {
  const [selectedChoice, setSelectedChoice] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [submittedChoice, setSubmittedChoice] = useState<string>('');

  const handleCardSelect = (optionId: string) => {
    setSelectedChoice(optionId);
  };

  const handleSubmitChoice = () => {
    if (selectedChoice) {
      setSubmittedChoice(selectedChoice);
      setShowFeedback(true);
    }
  };

  const handleFeedbackClose = () => {
    setShowFeedback(false);
    onChoiceSelect(submittedChoice);
    setSelectedChoice('');
    setSubmittedChoice('');
  };

  const selectedOption = scene.options.find(opt => opt.id === submittedChoice);
  const isLastScene = sceneIndex === totalScenes - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Meeting Room Background */}
      <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        
        {/* Progress Bar */}
        <ProgressBar current={sceneIndex + 1} total={totalScenes} />
        
        {/* Committee Panel */}
        <CommitteePanel characters={scenarioData.characters} />
        
        {/* Main Content Area */}
        <div className="relative z-10 pt-32 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Scene Content */}
            <SceneContent scene={scene} />
            
            {/* Strategy Cards */}
            <div className="mt-12">
              <StrategyCards
                options={scene.options}
                selectedOption={selectedChoice}
                onOptionSelect={handleCardSelect}
                onSubmit={handleSubmitChoice}
                canSubmit={!!selectedChoice}
              />
            </div>
          </div>
        </div>
        
        {/* Feedback Modal */}
        {showFeedback && selectedOption && (
          <FeedbackModal
            option={selectedOption}
            scene={scene}
            isLastScene={isLastScene}
            onClose={handleFeedbackClose}
            onRestart={onRestart}
          />
        )}
      </div>
    </div>
  );
};
