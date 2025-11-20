// Utilise la variable d'environnement ou localhost par défaut
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5293/api';

export interface Match {
  id: number;
  utcDate: string;
  status: string;
  homeTeam: {
    id: number;
    name: string;
    crest: string;
  };
  awayTeam: {
    id: number;
    name: string;
    crest: string;
  };
  score: {
    fullTime: {
      home: number | null;
      away: number | null;
    };
  };
  competition: {
    name: string;
    emblem: string;
  };
}

export interface TeamMatchesResponse {
  matches: Match[];
}

export const footballApi = {
  async getTeamMatches(teamId: number): Promise<TeamMatchesResponse> {
    const response = await fetch(`${API_BASE_URL}/teams/${teamId}/matches`);
    
    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }
    
    return response.json();
  }
};