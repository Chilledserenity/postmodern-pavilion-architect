// src/data/scenarios.ts
// This file will now re-export the data from updatedScenarios.ts
// under its original export name "scenarioData".

import { ScenarioData } from '@/types/scenario'; // Assuming ScenarioData type is still relevant for this export
import { updatedScenarioData as newScenarioData } from './updatedScenarios';

// The original scenarios.ts exported a const named scenarioData.
// We are now making scenarioData point to the content of updatedScenarioData.
export const scenarioData: ScenarioData = newScenarioData;

// You can delete all the old scenario objects that were previously in this file.
// The lines above are all you need.
