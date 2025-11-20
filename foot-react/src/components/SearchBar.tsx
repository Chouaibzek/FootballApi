import { Button, Card, CardBody, Input } from '@nextui-org/react';

interface SearchBarProps {
  teamId: string;
  onTeamIdChange: (value: string) => void;
  onSearch: () => void;
  loading: boolean;
  error: string | null;
}

export default function SearchBar({ 
  teamId, 
  onTeamIdChange, 
  onSearch, 
  loading, 
  error 
}: SearchBarProps) {
  return (
    <Card>
      <CardBody>
        <div className="flex gap-4 items-end">
          <Input
            type="number"
            label="Team ID"
            placeholder="Ex: 86 (Real Madrid)"
            value={teamId}
            onChange={(e) => onTeamIdChange(e.target.value)}
            className="flex-1"
          />
          <Button 
            color="primary" 
            onClick={onSearch}
            isLoading={loading}
          >
            Rechercher
          </Button>
        </div>
        
        {error && (
          <p className="text-danger mt-4">{error}</p>
        )}
      </CardBody>
    </Card>
  );
}
