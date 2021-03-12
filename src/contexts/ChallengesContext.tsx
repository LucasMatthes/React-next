import { Children, createContext, ReactNode, useState } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelup() {
        setLevel(level + 1);
    }

    function startNewChallenge() {

    }

    return (
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelup,
                startNewChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}