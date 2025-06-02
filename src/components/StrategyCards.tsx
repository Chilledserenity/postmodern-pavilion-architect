
import React, { useState } from 'react';
import { StrategyOption } from '@/types/scenario';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
  const [expandedOption, setExpandedOption] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const getOptionLabel = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  const toggleExpanded = (optionId: string) => {
    setExpandedOption(expandedOption === optionId ? null : optionId);
  };

  return (
    <div className="space-y-6">
      <ScrollArea className="h-[65vh] w-full rounded-md">
        <div className="grid grid-cols-1 gap-4 p-4">
          {options.map((option, index) => {
            const isSelected = selectedOption === option.id;
            const isExpanded = expandedOption === option.id;
            const optionLabel = getOptionLabel(index);
            
            return (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg ${
                  isSelected
                    ? 'ring-4 ring-blue-500 shadow-xl bg-blue-50/50'
                    : 'hover:shadow-md bg-white/90'
                } backdrop-blur-sm border-0`}
                onClick={() => onOptionSelect(option.id)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        isSelected ? 'bg-blue-500' : 'bg-slate-400'
                      }`}>
                        {isSelected ? '✓' : optionLabel}
                      </div>
                      <span className="text-base leading-tight">{option.title}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpanded(option.id);
                      }}
                      className="p-1 h-8 w-8"
                    >
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed ml-10">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                
                {isExpanded && (
                  <CardContent className="pt-0 pb-4">
                    <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500 ml-10">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-slate-700 leading-relaxed whitespace-pre-line text-sm">
                          {option.approach}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </ScrollArea>
      
      {/* Submit Button */}
      <div className="text-center sticky bottom-0 bg-gradient-to-t from-slate-50 to-transparent pt-4">
        <Button
          onClick={onSubmit}
          disabled={!canSubmit}
          size="lg"
          className={`px-10 py-3 text-base font-semibold transition-all duration-300 ${
            canSubmit
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'bg-slate-300 text-slate-500 cursor-not-allowed'
          }`}
        >
          Present Your Strategy
        </Button>
        {canSubmit && (
          <p className="text-sm text-slate-600 mt-2">
            Option {getOptionLabel(options.findIndex(opt => opt.id === selectedOption))} selected
          </p>
        )}
      </div>
    </div>
  );
};
