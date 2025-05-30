
import React, { useState } from 'react';
import { MeetingRoom } from '@/components/MeetingRoom';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ScenarioData } from '@/types/scenario';
import { scenarioData } from '@/data/scenarios';

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [playerChoices, setPlayerChoices] = useState<Record<number, string>>({});

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleSceneComplete = (choice: string) => {
    setPlayerChoices(prev => ({
      ...prev,
      [currentScene]: choice
    }));
    
    if (currentScene < scenarioData.scenes.length - 1) {
      setCurrentScene(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setGameStarted(false);
    setCurrentScene(0);
    setPlayerChoices({});
  };

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStartGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <MeetingRoom
        scene={scenarioData.scenes[currentScene]}
        sceneIndex={currentScene}
        totalScenes={scenarioData.scenes.length}
        playerChoices={playerChoices}
        onChoiceSelect={handleSceneComplete}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default Index;
