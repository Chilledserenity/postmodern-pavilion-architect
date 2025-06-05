// src/components/StrategyCards.tsx
import React, { useState } from 'react';
import { StrategyOption } from '@/types/scenario';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

  const getOptionLabel = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  const toggleExpanded = (optionId: string) => {
    setExpandedOption(expandedOption === optionId ? null : optionId);
  };

  // Helper to get the first logical line of text
  const getFirstLine = (text: string | undefined): string => {
    if (!text) return "";
    return text.split('\n')[0];
  };

  return (
    <div className="space-y-6">
      <ScrollArea className="h-[65vh] w-full rounded-md">
        <div className="grid grid-cols-1 gap-4 p-4">
          {options.map((option, index) => {
            const isSelected = selectedOption === option.id;
            const isExpanded = expandedOption === option.id;
            const optionLabel = getOptionLabel(index);
            const firstLineOfDescription = getFirstLine(option.description);
            
            return (
              <Card
                key={option.id}
                className={`transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg ${
                  isSelected
                    ? 'ring-4 ring-blue-500 shadow-xl bg-blue-50/50'
                    : 'hover:shadow-md bg-white/90'
                } backdrop-blur-sm border-0`}
              >
                {/* Entire Card Header area is clickable for selection */}
                <div onClick={() => onOptionSelect(option.id)} className="cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3 mr-2 min-w-0"> {/* Title and label */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${
                          isSelected ? 'bg-blue-500' : 'bg-slate-400'
                        }`}>
                          {isSelected ? '✓' : optionLabel}
                        </div>
                        <span className="text-base leading-tight truncate">{option.title}</span>
                      </div>
                      <Button // Expand/collapse button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation(); 
                          toggleExpanded(option.id);
                        }}
                        className="p-1 h-8 w-8 shrink-0"
                        aria-expanded={isExpanded}
                        aria-controls={`approach-${option.id}`}
                      >
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        <span className="sr-only">{isExpanded ? "Collapse" : "Expand"} details</span>
                      </Button>
                    </CardTitle>
                    
                    {/* Container for Image and Collapsed Description */}
                    <div className="flex items-start gap-x-4 pt-2 ml-10">
                      {/* Image Display */}
                      {option.optionImage && (
                        <img 
                          src={option.optionImage} 
                          alt={`${option.title} illustration`} // Good alt text
                          className="w-16 h-16 object-cover rounded-md shrink-0 mt-1 sm:w-20 sm:h-20 border border-slate-200"
                          onError={(e) => {
                            console.error(`IMAGE LOAD ERROR: Path "${option.optionImage}" for option "${option.title}"`);
                            (e.target as HTMLImageElement).style.display = 'none'; 
                          }}
                        />
                      )}
                      
                      {/* Text Content - Show TRUNCATED description ONLY when collapsed */}
                      {!isExpanded && option.description && (
                        <CardDescription 
                          className="text-slate-600 text-sm leading-relaxed flex-grow min-w-0 block whitespace-nowrap overflow-hidden text-ellipsis" // CRITICAL: Truncation classes
                          title={option.description} // Tooltip shows full original description (or first paragraph)
                        >
                          {firstLineOfDescription} {/* Displays only the first logical line */}
                        </CardDescription>
                      )}
                    </div>
                  </CardHeader>
                </div> {/* End of clickable selection area */}
                
                {/* Expanded Content - Shows full approach text */}
                {isExpanded && (
                  <CardContent className="pt-0 pb-4" id={`approach-${option.id}`}>
                    <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500 ml-10">
                      {/* Image is NOT duplicated here */}
                      <div className="prose prose-sm max-w-none">
                        <p className="text-slate-700 leading-relaxed whitespace-pre-line text-sm mb-0">
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
      <div className="text-center sticky bottom-0 bg-gradient-to-t from-slate-50/95 via-slate-50/95 to-transparent pt-4 pb-4">
        <Button /* ... submit button props ... */ >
          Present Your Strategy
        </Button>
        {canSubmit && ( /* ... selected option label ... */ )}
      </div>
    </div>
  );
};
