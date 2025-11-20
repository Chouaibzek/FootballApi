import { useState } from 'react';
import { NextUIProvider, Spinner, useDisclosure } from '@nextui-org/react';
import { footballApi, type Match } from './services/api';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TeamListModal from './components/TeamListModal';
import MatchesList from './components/MatchesList';

export default function App() {
  const [teamId, setTeamId] = useState('');
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = async () => {
    if (!teamId) {
      setError('Veuillez entrer un ID d\'équipe');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const data = await footballApi.getTeamMatches(parseInt(teamId));
      setMatches(data.matches);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la récupération des matchs');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectTeam = (selectedTeamId: number) => {
    setTeamId(selectedTeamId.toString());
  };

  return (
    <NextUIProvider>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <Header onOpenTeamList={onOpen} />
          
          <SearchBar 
            teamId={teamId}
            onTeamIdChange={setTeamId}
            onSearch={handleSearch}
            loading={loading}
            error={error}
          />

          <TeamListModal 
            isOpen={isOpen}
            onClose={onClose}
            onSelectTeam={handleSelectTeam}
          />

          {loading && (
            <div className="flex justify-center py-8">
              <Spinner size="lg" />
            </div>
          )}

          {!loading && matches.length > 0 && (
            <MatchesList matches={matches} />
          )}
        </div>
      </div>
    </NextUIProvider>
  );
}