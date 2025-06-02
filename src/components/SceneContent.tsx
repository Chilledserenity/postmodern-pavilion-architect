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
