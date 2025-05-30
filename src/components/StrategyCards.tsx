
import React from 'react';
import { StrategyOption } from '@/types/scenario';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface StrategyCardsProps {
  options: StrategyOption[];
  selectedOption: string;
  onOptionSelect: (optionId: string) => void;
  onSubmit: () => void;
  canSubmit: boolean;
}

export const StrategyCards: React.FC<StrategyCardsProps> = ({
  options,
  selectedOption,
  onOptionSelect,
  onSubmit,
  canSubmit
}) => {
  return (
    <div className="space-y-8">
      {/* Strategy Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {options.map((option) => (
          <Card
            key={option.id}
            className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
              selectedOption === option.id
                ? 'ring-4 ring-blue-500 shadow-xl bg-blue-50/50'
                : 'hover:shadow-lg bg-white/90'
            } backdrop-blur-sm border-0`}
            onClick={() => onOptionSelect(option.id)}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-slate-800 flex items-center justify-between">
                {option.title}
                {selectedOption === option.id && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                {option.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-700 font-medium mb-2">Approach:</p>
                <p className="text-sm text-slate-600">{option.approach}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Submit Button */}
      <div className="text-center">
        <Button
          onClick={onSubmit}
          disabled={!canSubmit}
          size="lg"
          className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
            canSubmit
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'bg-slate-300 text-slate-500 cursor-not-allowed'
          }`}
        >
          Present Your Strategy
        </Button>
      </div>
    </div>
  );
};
