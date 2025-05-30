
import React, { useState } from 'react';
import { Scene } from '@/types/scenario';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SceneContentProps {
  scene: Scene;
  onAdvanceToScene?: () => void;
}

export const SceneContent: React.FC<SceneContentProps> = ({ scene, onAdvanceToScene }) => {
  const [isContextCollapsed, setIsContextCollapsed] = useState(false);
  const isScene1 = scene.id === 1;

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
              {/* Only show collapse button for scene 1 */}
              {isScene1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsContextCollapsed(!isContextCollapsed)}
                  className="flex items-center gap-2"
                >
                  {isContextCollapsed ? (
                    <>
                      <span className="text-sm">Show Context</span>
                      <ChevronDown size={16} />
                    </>
                  ) : (
                    <>
                      <span className="text-sm">Hide Context</span>
                      <ChevronUp size={16} />
                    </>
                  )}
                </Button>
              )}
            </div>
            
            {/* Context text - collapsible only for scene 1 */}
            {(!isScene1 || !isContextCollapsed) && (
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 mb-6">
                <p className="text-slate-700 italic text-base leading-relaxed whitespace-pre-line">
                  {scene.context}
                </p>
              </div>
            )}

            {/* Continue Button for Scene 1 - Only show if not collapsed */}
            {scene.id === 1 && onAdvanceToScene && !isContextCollapsed && (
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
