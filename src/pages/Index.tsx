
import React, { useState } from 'react';
import { MeetingRoom } from '@/components/MeetingRoom';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { scenarioData } from '@/data/scenarios';

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [playerChoices, setPlayerChoices] = useState<Record<number | string, string>>({});

  // Calculate total scenes from scenario data (count scenes that have actual questions/options)
  const totalScenes = scenarioData.scenes.filter(scene => scene.options && scene.options.length > 0).length;

  const handleStartGame = () => {
    setCurrentSceneIndex(0);
    setPlayerChoices({});
    setGameStarted(true);
  };

  const handleSceneComplete = (selectedOptionId: string) => {
    console.log('Scene complete with option:', selectedOptionId);
    
    if (selectedOptionId === 'advance-to-scene-2') {
      setCurrentSceneIndex(1);
      return;
    }

    const currentSceneObject = scenarioData.scenes[currentSceneIndex];
    const selectedOption = currentSceneObject.options.find(opt => opt.id === selectedOptionId);

    if (!selectedOption) {
      console.error(`Error: Could not find option with ID "${selectedOptionId}" in scene "${currentSceneObject.id}".`);
      return;
    }

    setPlayerChoices(prev => ({
      ...prev,
      [currentSceneObject.id]: selectedOptionId
    }));

    // Check if there's a specific nextScene defined
    const nextSceneId = selectedOption.nextScene;
    console.log('Next scene ID from option:', nextSceneId);

    if (nextSceneId && nextSceneId !== "" && nextSceneId !== undefined) {
      // Find the scene with the matching ID
      const newSceneArrayIndex = scenarioData.scenes.findIndex(s => String(s.id) === String(nextSceneId));
      console.log('Found scene at index:', newSceneArrayIndex);
      
      if (newSceneArrayIndex !== -1) {
        setCurrentSceneIndex(newSceneArrayIndex);
        return;
      } else {
        console.error(`Error: Next scene with ID "${nextSceneId}" was not found in scenarios data.`);
      }
    }

    // If no specific nextScene, advance to next scene in sequence
    if (currentSceneIndex < scenarioData.scenes.length - 1) {
      setCurrentSceneIndex(prev => prev + 1);
    } else {
      console.log("Reached end of scenarios");
      // Could add end-of-game logic here if needed
    }
  };

  const handleRestart = () => {
    setGameStarted(false);
  };

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStartGame} />;
  }

  if (currentSceneIndex >= scenarioData.scenes.length || currentSceneIndex < 0) {
      console.error("Error: currentSceneIndex is out of bounds:", currentSceneIndex);
      return <WelcomeScreen onStart={handleStartGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <MeetingRoom
        scene={scenarioData.scenes[currentSceneIndex]}
        sceneIndex={currentSceneIndex}
        totalScenes={totalScenes}
        playerChoices={playerChoices}
        onChoiceSelect={handleSceneComplete}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default Index;
