import { Card, CardBody } from '@nextui-org/react';
import type { Match } from '../services/api';

interface MatchCardProps {
  match: Match;
  type: 'upcoming' | 'past';
}

export default function MatchCard({ match, type }: MatchCardProps) {
  const borderColor = type === 'upcoming' ? 'border-success' : 'border-primary';
  
  return (
    <Card className={`border-l-4 ${borderColor}`}>
      <CardBody>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            {type === 'upcoming' ? (
              // Layout pour matchs à venir (VS)
              <>
                <div className="flex items-center gap-3">
                  <img 
                    src={match.homeTeam.crest} 
                    alt={match.homeTeam.name}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="font-bold text-sm">{match.homeTeam.name}</p>
                </div>
                <span className="text-lg font-bold">VS</span>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-sm">{match.awayTeam.name}</p>
                  <img 
                    src={match.awayTeam.crest} 
                    alt={match.awayTeam.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </>
            ) : (
              // Layout pour matchs passés (avec score)
              <>
                <div className="flex items-center gap-3 flex-1">
                  <img 
                    src={match.homeTeam.crest} 
                    alt={match.homeTeam.name}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="font-bold text-sm">{match.homeTeam.name}</p>
                </div>
                
                <div className="text-center px-4">
                  <p className="text-2xl font-bold">
                    {match.score.fullTime.home ?? '-'} : {match.score.fullTime.away ?? '-'}
                  </p>
                  <p className="text-xs text-default-500">{match.status}</p>
                </div>
                
                <div className="flex items-center gap-3 flex-1 justify-end">
                  <p className="font-bold text-sm">{match.awayTeam.name}</p>
                  <img 
                    src={match.awayTeam.crest} 
                    alt={match.awayTeam.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </>
            )}
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-default-500">{match.competition.name}</span>
            <span className={type === 'upcoming' ? 'font-semibold text-success' : 'text-default-400'}>
              {new Date(match.utcDate).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                ...(type === 'upcoming' && { hour: '2-digit', minute: '2-digit' })
              })}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
