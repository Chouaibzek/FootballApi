import { Button } from '@nextui-org/react';

interface HeaderProps {
  onOpenTeamList: () => void;
}

export default function Header({ onOpenTeamList }: HeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl text-primary font-bold">
        Football Matches Viewer
      </h1>
      <Button 
        color="primary" 
        variant="flat"
        onPress={onOpenTeamList}
      >
     Liste des équipes
      </Button>
    </div>
  );
}
