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
  // totalScenes prop is not directly used here for ProgressBar, as ProgressBar calculates from updatedScenarioData.scenes.length
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

  return (
    <div className="min-h-screen bg-slate-100"> {/* Simplified main page background */}
      <div className="relative min-h-screen">
        {/* REMOVED: Full page background overlay div is gone */}
        
        <div className="fixed top-0 left-0 right-0 z-50">
          <CommitteePanel characters={updatedScenarioData.characters} />
        </div>
        
        {/* ProgressBar position adjusted: assumes CommitteePanel is 5rem + 1px (border) tall */}
        <div className="fixed top-[calc(5rem+1px)] left-0 right-0 z-40"> {/* ADJUSTED for zero gap */}
          <ProgressBar current={currentProgress} total={totalProgressScenes} />
        </div>
        
        {/* Main Content Area padding adjusted: CommitteePanel (5rem+1px) + ProgressBar (2rem+1px) = 7rem+2px */}
        <div className="relative z-10 pt-[calc(7rem+2px)] pb-6 px-4"> {/* ADJUSTED for zero gap */}
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
