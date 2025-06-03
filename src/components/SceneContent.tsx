
import React from 'react';
import { Scene } from '@/types/scenario';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SceneContentProps {
  scene: Scene;
  onAdvanceToScene?: () => void;
}

export const SceneContent: React.FC<SceneContentProps> = ({ 
  scene, 
  onAdvanceToScene 
}) => {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
          {scene.title}
        </CardTitle>
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
          {scene.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Speaker Section */}
        <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200/50">
          <div className="flex items-start space-x-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-slate-900 font-medium text-lg leading-relaxed">
                <span className="font-semibold text-blue-700">{scene.speaker}:</span>{' '}
                <span className="italic">"{scene.speakerText}"</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Only show advance button for scene 1 */}
        {scene.id === 1 && onAdvanceToScene && (
          <div className="text-center">
            <Button
              onClick={onAdvanceToScene}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Begin the Review
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
