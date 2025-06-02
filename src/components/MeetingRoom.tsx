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
  totalScenes: number;
  playerChoices: Record<number | string, string>;
  onChoiceSelect: (choice: string) => void;
  onRestart: () => void;
}

export const MeetingRoom: React.FC<MeetingRoomProps> = ({
  scene,
  sceneIndex,
  // totalScenes, // Prop not directly used if ProgressBar internally calculates
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

  // Refined height calculations:
  // CommitteePanel: py-3 (1.5rem) + h-12 avatar (3rem) + 1px border = 4.5rem + 1px
  const committeePanelHeight = 'calc(4.5rem + 1px)';
  // ProgressBar: py-3 (1.5rem) + h-2 progress (0.5rem) + 1px border = 2rem + 1px
  const progressBarHeight = 'calc(2rem + 1px)';
  // Total height of fixed elements
  const totalFixedHeaderHeight = `calc(${committeePanelHeight} + ${progressBarHeight})`; // Should be calc(6.5rem + 2px)

  // Desired gap below ProgressBar (e.g., 2rem) + totalFixedHeaderHeight
  const mainContentPaddingTop = `calc(${totalFixedHeaderHeight} + 2rem)`; // Results in calc(8.5rem + 2px)

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="relative min-h-screen">
        
        <div className="fixed top-0 left-0 right-0 z-50">
          <CommitteePanel characters={updatedScenarioData.characters} />
        </div>
        
        {/* ProgressBar position precisely calculated */}
        <div className={`fixed left-0 right-0 z-40`} style={{ top: committeePanelHeight }}>
          <ProgressBar current={currentProgress} total={totalProgressScenes} />
        </div>
        
        {/* Main Content Area padding precisely calculated */}
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
