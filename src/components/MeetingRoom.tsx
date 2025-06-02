import React, { useState } from 'react';
import { Scene } from '@/types/scenario';
import { CommitteePanel } from '@/components/CommitteePanel';
import { SceneContent } from '@/components/SceneContent';
import { ProgressBar } from '@/components/ProgressBar';
import { StrategyCards } from '@/components/StrategyCards';
import { FeedbackModal } from '@/components/FeedbackModal';
import { updatedScenarioData } from '@/data/updatedScenarios';

interface MeetingRoomProps {
  scene: Scene;
  sceneIndex: number;
  totalScenes: number; // Keep this prop for clarity, though ProgressBar might recalculate
  playerChoices: Record<number | string, string>;
  onChoiceSelect: (choice: string) => void;
  onRestart: () => void;
}

export const MeetingRoom: React.FC<MeetingRoomProps> = ({
  scene,
  sceneIndex,
  // totalScenes, // Not directly used if ProgressBar calculates its own total
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

  const handleRetry = () => {
    setShowFeedback(false);
    setSelectedChoice('');
    setSubmittedChoice('');
  };

  const handleAdvanceToScene2 = () => {
    onChoiceSelect('advance-to-scene-2');
  };

  const selectedOptionData = scene.options?.find(opt => opt.id === submittedChoice);
  const isActuallyLastScene = scene.id === updatedScenarioData.scenes[updatedScenarioData.scenes.length - 1].id;

  const currentProgress = sceneIndex + 1;
  const totalProgressScenes = updatedScenarioData.scenes.length;

  // Assuming CommitteePanel is approx 5rem (80px) + 1px border
  // Assuming ProgressBar is approx 2rem (32px) + 1px border
  const committeePanelHeight = 'calc(5rem + 1px)';
  const progressBarHeight = 'calc(2rem + 1px)';
  const totalFixedHeaderHeight = `calc(${committeePanelHeight} + ${progressBarHeight})`; // This will be calc(7rem + 2px)

  // New desired padding top for main content to increase space below ProgressBar
  const mainContentPaddingTop = `calc(${totalFixedHeaderHeight} + 2rem)`; // e.g., calc(7rem + 2px + 2rem) = calc(9rem + 2px)

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="relative min-h-screen">
        
        <div className="fixed top-0 left-0 right-0 z-50">
          <CommitteePanel characters={updatedScenarioData.characters} />
        </div>
        
        <div className={`fixed left-0 right-0 z-40`} style={{ top: committeePanelHeight }}>
          <ProgressBar current={currentProgress} total={totalProgressScenes} />
        </div>
        
        <div className={`relative z-10 pb-6 px-4`} style={{ paddingTop: mainContentPaddingTop }}>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl mb-8">
              <SceneContent 
                scene={scene} 
                onAdvanceToScene={scene.id === 1 ? handleAdvanceToScene2 : undefined}
              />
            </div>
            
            {scene.options && scene.options.length > 0 && (
              <div className="relative z-10">
                <StrategyCards
                  options={scene.options}
                  selectedOption={selectedChoice}
                  onOptionSelect={handleCardSelect}
                  onSubmit={handleSubmitChoice}
                  canSubmit={!!selectedChoice}
                />
              </div>
            )}
          </div>
        </div>
        
        {showFeedback && selectedOptionData && (
          <FeedbackModal
            option={selectedOptionData}
            scene={scene}
            isLastScene={isActuallyLastScene}
            onClose={handleFeedbackClose}
            onRestart={onRestart}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );
};
