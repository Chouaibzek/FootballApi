import { Card, CardBody } from '@nextui-org/react';
import type { Match } from '../services/api';
import MatchCard from './MatchCard';

interface MatchesListProps {
  matches: Match[];
}

export default function MatchesList({ matches }: MatchesListProps) {
  const now = new Date();
  const pastMatches = matches.filter(match => new Date(match.utcDate) < now);
  const upcomingMatches = matches.filter(match => new Date(match.utcDate) >= now);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Matchs à venir */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-success">
           Matchs à venir ({upcomingMatches.length})
        </h2>
        
        {upcomingMatches.length === 0 ? (
          <Card>
            <CardBody>
              <p className="text-default-500 text-center">Aucun match à venir</p>
            </CardBody>
          </Card>
        ) : (
          upcomingMatches.map((match) => (
            <MatchCard key={match.id} match={match} type="upcoming" />
          ))
        )}
      </div>

      {/* Matchs passés */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">
          Matchs terminés ({pastMatches.length})
        </h2>
        
        {pastMatches.length === 0 ? (
          <Card>
            <CardBody>
              <p className="text-default-500 text-center">Aucun match terminé</p>
            </CardBody>
          </Card>
        ) : (
          pastMatches.map((match) => (
            <MatchCard key={match.id} match={match} type="past" />
          ))
        )}
      </div>
    </div>
  );
}
