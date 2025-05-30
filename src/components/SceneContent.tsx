
import React from 'react';
import { Scene } from '@/types/scenario';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SceneContentProps {
  scene: Scene;
  onAdvanceToScene?: () => void;
}

export const SceneContent: React.FC<SceneContentProps> = ({ scene, onAdvanceToScene }) => {
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
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Context</h2>
            
            {/* Speaker Context */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="text-slate-700 italic text-base leading-relaxed whitespace-pre-line">
                {scene.context}
              </p>
            </div>

            {/* Continue Button for Scene 1 */}
            {scene.id === 1 && onAdvanceToScene && (
              <div className="text-center">
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
          
          {/* Question - Always visible */}
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
