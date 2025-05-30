
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

// src/pages/Index.tsx
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
    // Get the current scene's data using the currentSceneIndex
    const currentSceneObject = scenarioData.scenes[currentSceneIndex];
    // Find the specific option the player chose within that scene
    const selectedOption = currentSceneObject.options.find(opt => opt.id === selectedOptionId);

    if (!selectedOption) {
      console.error(`Error: Could not find option with ID "<span class="math-inline">\{selectedOptionId\}" in scene "</span>{currentSceneObject.id}".`);
      // It's good to log this error. You might decide to keep the student on the current scene
      // or show an error message if this happens, though it shouldn't if your data is consistent.
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
      // This usually means it's the end of a particular path or the final reflection scene.
      // The "FeedbackModal" component already handles the "Restart" button for the very last scene of the game,
      // so we don't need to change the scene here if this is the end.
      return;
    }

    // Find the array index of the next scene based on its ID from scenarioData.ts
    // We convert both to strings to ensure consistent comparison (e.g., if IDs are numbers or stringy numbers like "6b0")
    const newSceneArrayIndex = scenarioData.scenes.findIndex(s => String(s.id) === String(nextSceneId));

    if (newSceneArrayIndex !== -1) {
      // If the next scene is found, update the current scene index to move to it
      setCurrentSceneIndex(newSceneArrayIndex);
    } else {
      // This case should ideally not happen if your scenarioData.ts is correct.
      console.error(`Error: Next scene with ID "${nextSceneId}" was not found in your scenarios data.`);
      // As a fallback, you could try to go to the next scene in the array order, if one exists.
      if (currentSceneIndex < scenarioData.scenes.length - 1) {
        setCurrentSceneIndex(prev => prev + 1);
      } else {
        // If already at the end and nextSceneId was invalid, something is wrong.
        console.error("Could not determine the next scene and already at the end of the scenario array.");
        // You might want to restart the game or show an error message here.
      }
    }
  };

  const handleRestart = () => {
    setGameStarted(false); // This will show the WelcomeScreen again
    // currentSceneIndex and playerChoices will be reset when handleStartGame is called the next time the game starts.
  };

  // If the game hasn't started, show the welcome screen
  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStartGame} />;
  }

  // A safety check to make sure currentSceneIndex is valid before trying to render a scene
  if (currentSceneIndex >= scenarioData.scenes.length || currentSceneIndex < 0) {
      console.error("Error: currentSceneIndex is out of bounds:", currentSceneIndex);
      // Fallback to a safe state, like showing the WelcomeScreen, to prevent a crash
      return <WelcomeScreen onStart={handleStartGame} />;
  }

  // If the game has started and currentSceneIndex is valid, show the MeetingRoom with the current scene
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <MeetingRoom
        scene={scenarioData.scenes[currentSceneIndex]} // Pass the data for the current scene
        sceneIndex={currentSceneIndex}                 // Pass the current scene's index in the array
        totalScenes={scenarioData.scenes.length}       // Total number of scenes
        playerChoices={playerChoices}                  // The choices made so far
        onChoiceSelect={handleSceneComplete}           // Function to call when a choice is made and feedback is closed
        onRestart={handleRestart}                      // Function to call to restart the game
      />
    </div>
  );
};

export default Index;
