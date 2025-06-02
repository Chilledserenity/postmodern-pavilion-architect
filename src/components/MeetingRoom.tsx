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
  totalScenes: number; // This was totalScenesWithQuestions, ensure it's used as intended
  playerChoices: Record<number | string, string>; // Updated type to match Index.tsx
  onChoiceSelect: (choice: string) => void;
  onRestart: () => void;
}

export const MeetingRoom: React.FC<MeetingRoomProps> = ({
  scene,
  sceneIndex,
  totalScenes, // Assuming this is total number of scenes for progress bar
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

  const selectedOptionData = scene.options?.find(opt => opt.id === submittedChoice); // Ensure options exist
  const isActuallyLastScene = scene.id === updatedScenarioData.scenes[updatedScenarioData.scenes.length - 1].id;


  // Calculate progress based on the current scene's position in the array
  const currentProgress = sceneIndex + 1;
  const totalProgressScenes = updatedScenarioData.scenes.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Meeting Room Background */}
      <div className="relative min-h-screen bg-slate-50"> {/* Removed outer gradient for simplicity, can be added back */}
        {/* UPDATED: New background image, old one removed */}
        <div className="absolute inset-0 bg-[url('/backgrounds/wynyard_meeting_room_bg.jpg')] bg-cover bg-center opacity-15"></div> {/* Adjusted opacity, can be changed */}
        
        {/* Committee Panel - Fixed at top */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <CommitteePanel characters={updatedScenarioData.characters} />
        </div>
        
        {/* Progress Bar - Adjusted top to be flush with CommitteePanel */}
        {/* Assuming CommitteePanel is approx 80px high (py-4 + h-12 avatar + border) */}
        <div className="fixed top-[80px] left-0 right-0 z-40"> {/* ADJUSTED */}
          <ProgressBar current={currentProgress} total={totalProgressScenes} />
        </div>
        
        {/* Main Content Area - Adjusted top padding */}
        {/* Padding top = CommitteePanel height (80px) + ProgressBar height (approx 32px for py-3 + h-2) = 112px */}
        <div className="relative z-10 pt-[112px] pb-6 px-4"> {/* ADJUSTED */}
          <div className="max-w-5xl mx-auto">
            {/* Scene Content */}
            <div className="bg-white/85 backdrop-blur-md rounded-lg shadow-xl mb-8"> {/* Slightly increased blur/opacity for text on bg */}
              <SceneContent 
                scene={scene} 
                onAdvanceToScene={scene.id === 1 ? handleAdvanceToScene2 : undefined}
              />
            </div>
            
            {/* Strategy Cards - Only show if scene has options */}
            {scene.options && scene.options.length > 0 && (
              <div className="relative z-10"> {/* Ensure strategy cards are above the page background if it has low opacity */}
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
        
        {/* Feedback Modal */}
        {showFeedback && selectedOptionData && (
          <FeedbackModal
            option={selectedOptionData}
            scene={scene}
            isLastScene={isActuallyLastScene} // Use the correctly calculated last scene flag
            onClose={handleFeedbackClose}
            onRestart={onRestart}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );
};
