
import React, { useState } from 'react';
import { MeetingRoom } from '@/components/MeetingRoom';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { scenarioData } from '@/data/scenarios'; // Your scenario data

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  // This state now holds the *index* of the current scene in the scenes array
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  // This state will store the choices made by the player, using the scene's ID as the key
  const [playerChoices, setPlayerChoices] = useState<Record<number | string, string>>({});

  const handleStartGame = () => {
    setCurrentSceneIndex(0); // Always start from the first scene (index 0)
    setPlayerChoices({});    // Clear any previous choices
    setGameStarted(true);
  };

  const handleSceneComplete = (selectedOptionId: string) => {
    // Special handling for advancing from scene 1 to scene 2
    if (selectedOptionId === 'advance-to-scene-2') {
      setCurrentSceneIndex(1); // Go directly to scene 2 (index 1)
      return;
    }

    // Get the current scene's data using the currentSceneIndex
    const currentSceneObject = scenarioData.scenes[currentSceneIndex];
    // Find the specific option the player chose within that scene
    const selectedOption = currentSceneObject.options.find(opt => opt.id === selectedOptionId);

    if (!selectedOption) {
      console.error(`Error: Could not find option with ID "${selectedOptionId}" in scene "${currentSceneObject.id}".`);
      return;
    }

    // Record the player's choice, using the scene's actual ID (e.g., 2, 3, "6b0") as the key
    setPlayerChoices(prev => ({
      ...prev,
      [currentSceneObject.id]: selectedOptionId
    }));

    // Get the ID of the next scene from the chosen option
    const nextSceneId = selectedOption.nextScene;

    if (nextSceneId === "" || nextSceneId === undefined) {
      return;
    }

    // Find the array index of the next scene based on its ID from scenarioData.ts
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

  // If the game hasn't started, show the welcome screen
  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStartGame} />;
  }

  // A safety check to make sure currentSceneIndex is valid before trying to render a scene
  if (currentSceneIndex >= scenarioData.scenes.length || currentSceneIndex < 0) {
      console.error("Error: currentSceneIndex is out of bounds:", currentSceneIndex);
      return <WelcomeScreen onStart={handleStartGame} />;
  }

  // If the game has started and currentSceneIndex is valid, show the MeetingRoom with the current scene
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <MeetingRoom
        scene={scenarioData.scenes[currentSceneIndex]}
        sceneIndex={currentSceneIndex}
        totalScenes={scenarioData.scenes.length}
        playerChoices={playerChoices}
        onChoiceSelect={handleSceneComplete}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default Index;
