
import React from 'react';
import { Character } from '@/types/scenario';

interface CommitteePanelProps {
  characters: Character[];
}

export const CommitteePanel: React.FC<CommitteePanelProps> = ({ characters }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3"> {/* Adjusted padding slightly */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {characters.map((character) => (
            <div key={character.id} className="flex items-center space-x-3">
              <img
                src={character.avatar}
                alt={character.name}
                className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-slate-100"
              />
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
