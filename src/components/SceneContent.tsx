
import React, { useState } from 'react';
import { Scene } from '@/types/scenario';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SceneContentProps {
  scene: Scene;
}

export const SceneContent: React.FC<SceneContentProps> = ({ scene }) => {
  const [isContextOpen, setIsContextOpen] = useState(true);

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
      
      {/* Collapsible Context Card */}
      <Card className="max-w-4xl mx-auto shadow-md border-0 bg-blue-50/50">
        <CardContent className="p-6">
          <Collapsible open={isContextOpen} onOpenChange={setIsContextOpen}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Context</h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  {isContextOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="space-y-4">
              {/* Speaker Context */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500">
                <p className="text-slate-700 italic text-base leading-relaxed whitespace-pre-line">
                  {scene.context}
                </p>
              </div>
              
              {/* Question */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {scene.question}
                </h3>
                <p className="text-slate-600 text-sm">
                  Select your strategic approach below:
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
};
