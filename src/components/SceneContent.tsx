
import React from 'react';
import { Scene } from '@/types/scenario';
import { Card, CardContent } from '@/components/ui/card';

interface SceneContentProps {
  scene: Scene;
}

export const SceneContent: React.FC<SceneContentProps> = ({ scene }) => {
  return (
    <div className="space-y-6">
      {/* Scene Title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
          {scene.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {scene.description}
        </p>
      </div>
      
      {/* Context Card */}
      <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Speaker Context */}
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "{scene.context}"
              </p>
            </div>
            
            {/* Question */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                {scene.question}
              </h2>
              <p className="text-slate-600">
                Select your strategic approach below:
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
