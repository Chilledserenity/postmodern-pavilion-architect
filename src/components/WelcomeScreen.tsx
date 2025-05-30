
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-slate-800 mb-4">
              ArchHTC237 Postmodern Pavilion Design Challenge
            </CardTitle>
            <CardDescription className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              An immersive architectural design experience for university students studying postmodernism
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">Your Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Present your postmodern pavilion design to a review committee at Wynyard Point, Auckland. 
                    Navigate complex theoretical challenges while creating an inclusive, culturally sensitive space.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-700 mb-2">Learning Objectives</h4>
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
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-700 mb-2">The Committee</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-slate-700">Dr. Sarah Chen</p>
                      <p className="text-xs text-slate-500">Design Critic</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-slate-700">James Mitchell</p>
                      <p className="text-xs text-slate-500">Community Rep</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-slate-700">Maria Santos</p>
                      <p className="text-xs text-slate-500">Cultural Advisor</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-slate-700">Dr. Raj Patel</p>
                      <p className="text-xs text-slate-500">Sustainability</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-slate-700 mb-2">Assessment</h4>
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
            </div>
            
            <div className="text-center pt-6">
              <Button 
                onClick={onStart}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
