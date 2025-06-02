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
Key changes in MeetingRoom.tsx:

The ProgressBar is now fixed at top-[80px] (you might need to fine-tune this value based on the exact rendered height of your CommitteePanel).
The main content area (div with relative z-10) now has pt-[112px] (again, fine-tune this based on the combined height of CommitteePanel and ProgressBar).
The placeholder background URL bg-[url('/api/placeholder/1920/1080')] has been replaced with bg-[url('/backgrounds/wynyard_meeting_room_bg.jpg')]. I've set opacity-15 here, but you can adjust this to your preference (e.g., opacity-10, opacity-20).
The bg-white/95 backdrop-blur-sm on the SceneContent container was changed to bg-white/85 backdrop-blur-md for potentially better readability if the background image is detailed. Adjust as needed.
Corrected playerChoices type and ensured selectedOptionData checks for scene.options.
Clarified totalScenes usage for ProgressBar to use updatedScenarioData.scenes.length.
Updated isLastScene to isActuallyLastScene for clarity in the FeedbackModal prop.
B. SceneContent.tsx Modifications:
(Addressing: remove "Hide Context" button for Scene 1)

TypeScript

// src/components/SceneContent.tsx

import React from 'react'; // Removed useState as isContextCollapsed is no longer needed
import { Scene } from '@/types/scenario';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Removed ChevronDown, ChevronUp as they are no longer needed

interface SceneContentProps {
  scene: Scene;
  onAdvanceToScene?: () => void;
}

export const SceneContent: React.FC<SceneContentProps> = ({ scene, onAdvanceToScene }) => {
  // const [isContextCollapsed, setIsContextCollapsed] = useState(false); // REMOVED
  // const isScene1 = scene.id === 1; // No longer needed for collapse logic directly here

  return (
    <div className="p-6">
      {/* Scene Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          {scene.title}
        </h1>
        <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed">
          {scene.description}
        </p>
      </div>
      
      {/* Context Card */}
      <Card className="max-w-4xl mx-auto shadow-md border-0 bg-blue-50/50 mb-6">
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Context</h2>
              {/* "Hide Context" button REMOVED */}
            </div>
            
            {/* Context text - always visible if scene.context exists */}
            {scene.context && (
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 mb-6">
                <p className="text-slate-700 italic text-base leading-relaxed whitespace-pre-line">
                  {scene.context}
                </p>
              </div>
            )}

            {/* Continue Button for Scene 1 - Only show if context is present and it's Scene 1 */}
            {scene.id === 1 && onAdvanceToScene && scene.context && (
              <div className="text-center mb-6">
                <Button 
                  onClick={onAdvanceToScene}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue to Strategy Selection
                </Button>
              </div>
            )}
          </div>
          
          {/* Question - Always visible for scenes with questions */}
          {scene.question && (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {scene.question}
              </h3>
              <p className="text-slate-600 text-sm">
                Select your strategic approach below:
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
