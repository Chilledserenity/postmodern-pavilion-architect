
import React from 'react';
import { StrategyOption, Scene } from '@/types/scenario';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { scenarioData } from '@/data/scenarios';

interface FeedbackModalProps {
  option: StrategyOption;
  scene: Scene;
  isLastScene: boolean;
  onClose: () => void;
  onRestart: () => void;
  onRetry: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  option,
  scene,
  isLastScene,
  onClose,
  onRestart,
  onRetry
}) => {
  // Determine if this is actually the final scene (scene 7 or last scene with options)
  const isActuallyLastScene = scene.id === 7 || scene.id === scenarioData.scenes[scenarioData.scenes.length - 1].id;
  
  const handleContinue = () => {
    if (isActuallyLastScene) {
      onRestart();
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">
            Committee Feedback
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Choice Summary */}
          <Card className={`border-2 ${option.isCorrect ? 'border-green-500 bg-green-50' : 'border-orange-500 bg-orange-50'}`}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Your Choice: {option.title}
              </h3>
              <p className="text-slate-700 mb-4">{option.description}</p>
              <div className={`p-4 rounded-lg ${option.isCorrect ? 'bg-green-100' : 'bg-orange-100'}`}>
                <p className={`font-semibold ${option.isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                  {option.isCorrect ? '✓ Excellent Strategy!' : '⚠ Consider This Approach'}
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Detailed Feedback */}
          <div className="space-y-4">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Committee Response:</h4>
              <p className="text-slate-700 mb-4 leading-relaxed">{option.feedback}</p>
              
              {option.lectureReference && (
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800 text-sm italic">{option.lectureReference}</p>
                </div>
              )}
            </div>
            
            {!option.isCorrect && (
              <div className="bg-slate-100 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Recommended Approach:</h4>
                <p className="text-slate-700 leading-relaxed">
                  {scene.incorrectFeedback}
                </p>
              </div>
            )}
          </div>
          
          {/* Progress and Next Steps */}
          <div className="text-center space-y-4">
            {isActuallyLastScene ? (
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Challenge Complete!</h3>
                  <p className="text-green-700">
                    You've successfully navigated the postmodern pavilion design challenge. 
                    Your understanding of complex architectural theory has been demonstrated through practical application.
                  </p>
                </div>
                <Button
                  onClick={onRestart}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Start New Challenge
                </Button>
              </div>
            ) : (
              <div className="flex gap-4 justify-center">
                {!option.isCorrect ? (
                  <Button
                    onClick={onRetry}
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
                  >
                    Try Again
                  </Button>
                ) : (
                  <Button
                    onClick={handleContinue}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
                  >
                    Continue to Next Challenge
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
