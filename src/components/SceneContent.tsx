
import React from 'react';
import { Scene } from '@/types/scenario';
import { Card, CardContent } from '@/components/ui/card';

interface SceneContentProps {
  scene: Scene;
}

export const SceneContent: React.FC<SceneContentProps> = ({ scene }) => {
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
      <Card className="max-w-4xl mx-auto shadow-md border-0 bg-blue-50/50">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Speaker Context */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500">
              <p className="text-slate-700 italic text-base leading-relaxed whitespace-pre-line">
                {scene.context}
              </p>
            </div>
            
            {/* Question */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-slate-800 mb-3">
                {scene.question}
              </h2>
              <p className="text-slate-600 text-sm">
                Select your strategic approach below:
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
