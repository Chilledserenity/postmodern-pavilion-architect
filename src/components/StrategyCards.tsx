
import React, { useState } from 'react';
import { StrategyOption } from '@/types/scenario';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Added CardDescription back
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

// Helper function to get the first line and add ellipsis if needed
const truncateDescription = (text: string): string => {
  if (!text) return "";
  const lines = text.split('\n');
  const firstLine = lines[0];

  // Add ellipsis if there are more lines, or if the first line itself is very long 
  // (e.g., > 120 characters, adjust as needed for your desired visual)
  // and doesn't represent the entirety of a short description.
  if (lines.length > 1 || (firstLine.length > 120 && text.length > firstLine.length) ) {
    // Truncate the first line if it's too long before adding ellipsis
    return (firstLine.length > 120 ? firstLine.substring(0, 120) : firstLine) + "...";
  }
  return firstLine; // Return just the first line if it's short and the only line
};

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
                className={`transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg ${
                  isSelected
                    ? 'ring-4 ring-blue-500 shadow-xl bg-blue-50/50'
                    : 'hover:shadow-md bg-white/90'
                } backdrop-blur-sm border-0`}
                // Removed direct onClick here to prevent issues with button inside CardTitle
              >
                <div onClick={() => onOptionSelect(option.id)} className="cursor-pointer"> {/* Wrap content that should be clickable for selection */}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3 mr-2"> {/* Added mr-2 for spacing from button */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${
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
                          e.stopPropagation(); // Prevent card's main onClick for selection
                          toggleExpanded(option.id);
                        }}
                        className="p-1 h-8 w-8 shrink-0" // Added shrink-0
                        aria-expanded={isExpanded}
                        aria-controls={`approach-${option.id}`}
                      >
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        <span className="sr-only">{isExpanded ? "Collapse" : "Expand"} details</span>
                      </Button>
                    </CardTitle>
                    {/* Layout for Image and Truncated Description */}
                    <div className="flex items-start gap-x-3 pt-2 ml-10"> {/* Added ml-10 to align with expanded content indent */}
                      {option.optionImage && (
                        <img 
                          src={option.optionImage} 
                          alt="" // Decorative, alt provided by option title context
                          className="w-20 h-auto max-h-20 object-contain rounded-md shrink-0 mt-1" // Adjusted size & object-contain
                        />
                      )}
                      <CardDescription className="text-slate-600 text-sm leading-relaxed flex-grow min-w-0"> {/* Added flex-grow and min-w-0 */}
                        {truncateDescription(option.description)}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </div> {/* End of selection clickable area */}
                
                {isExpanded && (
                  <CardContent className="pt-0 pb-4" id={`approach-${option.id}`}>
                    {/* ml-10 on the div below aligns it with the description text's indent */}
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
      
      <div className="text-center sticky bottom-0 bg-gradient-to-t from-slate-50/95 via-slate-50/95 to-transparent pt-4 pb-4">
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
