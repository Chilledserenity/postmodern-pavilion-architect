
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
  const isTablet = useMediaQuery('(max-width: 1024px)');
  
  const getOptionLabel = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  const toggleExpanded = (optionId: string) => {
    setExpandedOption(expandedOption === optionId ? null : optionId);
  };

  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1';
    if (isTablet) return 'grid-cols-1';
    return 'grid-cols-1'; // Single column for better readability of long content
  };

  const getFirstTwoSentences = (text: string) => {
    const sentences = text.split('.').filter(s => s.trim().length > 0);
    if (sentences.length <= 2) return text;
    return sentences.slice(0, 2).join('.') + '.';
  };

  const getRemainingText = (text: string) => {
    const sentences = text.split('.').filter(s => s.trim().length > 0);
    if (sentences.length <= 2) return '';
    return sentences.slice(2).join('.').trim() + (sentences.length > 2 ? '.' : '');
  };

  return (
    <div className="space-y-8">
      <ScrollArea className="h-[70vh] w-full rounded-md">
        <div className={`grid ${getGridCols()} gap-6 p-4`}>
          {options.map((option, index) => {
            const isSelected = selectedOption === option.id;
            const isExpanded = expandedOption === option.id;
            const optionLabel = getOptionLabel(index);
            const firstTwoSentences = getFirstTwoSentences(option.approach);
            const remainingText = getRemainingText(option.approach);
            const hasMoreText = remainingText.length > 0;
            
            return (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                  isSelected
                    ? 'ring-4 ring-blue-500 shadow-xl bg-blue-50/50'
                    : 'hover:shadow-lg bg-white/90'
                } backdrop-blur-sm border-0`}
                onClick={() => onOptionSelect(option.id)}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        isSelected ? 'bg-blue-500' : 'bg-slate-400'
                      }`}>
                        {isSelected ? '✓' : optionLabel}
                      </div>
                      <span className="text-lg">{option.title}</span>
                    </div>
                    {hasMoreText && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(option.id);
                        }}
                        className="p-2"
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </Button>
                    )}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {firstTwoSentences}
                  </CardDescription>
                </CardHeader>
                
                {isExpanded && hasMoreText && (
                  <CardContent className="pt-0">
                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                          {remainingText}
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
      <div className="text-center sticky bottom-0 bg-gradient-to-t from-slate-50 to-transparent pt-6">
        <Button
          onClick={onSubmit}
          disabled={!canSubmit}
          size="lg"
          className={`px-12 py-4 text-lg font-semibold transition-all duration-300 ${
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
