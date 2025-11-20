import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody } from '@nextui-org/react';
import { popularTeams } from '../data/teams';

interface TeamListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTeam: (teamId: number) => void;
}

export default function TeamListModal({ isOpen, onClose, onSelectTeam }: TeamListModalProps) {
  const handleTeamClick = (teamId: number) => {
    onSelectTeam(teamId);
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="2xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Liste des équipes populaires
        </ModalHeader>
        <ModalBody>
          <div className="space-y-2">
            {popularTeams.map((team) => (
              <Card 
                key={team.id}
                isPressable
                onPress={() => handleTeamClick(team.id)}
                className="hover:bg-default-100 transition-colors"
              >
                <CardBody>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg">{team.name}</p>
                      <p className="text-sm text-default-500">{team.league}</p>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-lg">
                      <p className="text-primary font-mono font-bold">ID: {team.id}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Fermer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
