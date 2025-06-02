import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { updatedScenarioData } from '@/data/updatedScenarios'; // Import the data

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const { characters } = updatedScenarioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full"> {/* Increased max-width for horizontal layout */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6"> {/* Adjusted padding */}
            <CardTitle className="text-4xl font-bold text-slate-800 mb-3">
              ArchHTC237 Postmodern Pavilion Design Challenge
            </CardTitle>
            <CardDescription className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              An immersive architectural design experience for university students studying postmodernism
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-10"> {/* Adjusted spacing */}
            {/* Committee Section - Horizontal Layout */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Meet The Committee</h3>
              <div className="flex flex-wrap justify-around gap-6 md:gap-8">
                {characters.map((character) => (
                  <div key={character.id} className="text-center flex flex-col items-center w-32 md:w-40"> {/* Added width for better wrapping */}
                    <img 
                      src={character.avatar} 
                      alt={character.name} 
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto mb-3 shadow-lg border-2 border-white"
                    />
                    <p className="text-sm font-semibold text-slate-800">{character.name}</p>
                    <p className="text-xs text-slate-500">{character.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission, Learning Objectives, and Assessment Section */}
            <div className="grid md:grid-cols-3 gap-8 pt-6"> {/* Changed to 3 columns for other info */}
              <div className="space-y-4 md:col-span-1">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Your Mission</h4>
                <p className="text-slate-600 leading-relaxed">
                  Present your postmodern pavilion design to a review committee at Wynyard Point, Auckland. 
                  Navigate complex theoretical challenges while creating an inclusive, culturally sensitive space.
                </p>
              </div>
              
              <div className="space-y-4 md:col-span-1">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Learning Objectives</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Apply postmodern semiotic theory to architectural communication
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Demonstrate multivalent strategies for inclusive design
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Synthesize time-binding principles with contextual sensitivity
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg md:col-span-1 border border-slate-200">
                <h4 className="text-xl font-semibold text-slate-700 mb-2">Assessment</h4>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Low-stakes assessment:</strong> 4 marks total
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• 2 marks for completion</li>
                  <li>• 2 marks for thoughtful reflection</li>
                  <li>• Detailed feedback for all choices</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <Button 
                onClick={onStart}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Enter the Design Studio
              </Button>
              <p className="text-sm text-slate-500 mt-3">
                Estimated time: 8-16 minutes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
