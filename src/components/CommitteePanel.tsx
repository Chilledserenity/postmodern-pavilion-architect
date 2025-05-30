
import React from 'react';
import { Character } from '@/types/scenario';

interface CommitteePanelProps {
  characters: Character[];
}

export const CommitteePanel: React.FC<CommitteePanelProps> = ({ characters }) => {
  const getCharacterGradient = (index: number) => {
    const gradients = [
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600', 
      'from-orange-400 to-orange-600',
      'from-blue-400 to-blue-600'
    ];
    return gradients[index] || gradients[0];
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {characters.map((character, index) => (
            <div key={character.id} className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${getCharacterGradient(index)} rounded-full flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-lg">
                  {character.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-800 text-sm truncate">
                  {character.name}
                </h3>
                <p className="text-xs text-slate-600 truncate">
                  {character.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
