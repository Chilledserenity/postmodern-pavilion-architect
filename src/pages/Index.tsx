
import React, { useState } from 'react';
import { MeetingRoom } from '@/components/MeetingRoom';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { scenarioData } from '@/data/scenarios';

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [playerChoices, setPlayerChoices] = useState<Record<number | string, string>>({});

  // Calculate total scenes from scenario data
  const totalScenes = scenarioData.scenes.length;

  const handleStartGame = () => {
    setCurrentSceneIndex(0);
    setPlayerChoices({});
    setGameStarted(true);
  };

  const handleSceneComplete = (selectedOptionId: string) => {
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

    const nextSceneId = selectedOption.nextScene;

    if (nextSceneId === "" || nextSceneId === undefined) {
      return;
    }

    const newSceneArrayIndex = scenarioData.scenes.findIndex(s => String(s.id) === String(nextSceneId));

    if (newSceneArrayIndex !== -1) {
      setCurrentSceneIndex(newSceneArrayIndex);
    } else {
      console.error(`Error: Next scene with ID "${nextSceneId}" was not found in your scenarios data.`);
      if (currentSceneIndex < scenarioData.scenes.length - 1) {
        setCurrentSceneIndex(prev => prev + 1);
      } else {
        console.error("Could not determine the next scene and already at the end of the scenario array.");
      }
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
