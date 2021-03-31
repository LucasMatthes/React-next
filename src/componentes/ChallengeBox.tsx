import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import style from '../style/componentes/ChallengeBox.module.css';

export function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return (
        <div className={style.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type='button'
                        className={style.challengeFailedButton} 
                        onClick={handleChallengeFailed}
                        id="falhei"
                        >
                            Falhei
                        </button>

                        <button 
                        type='button'
                        className={style.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        id='completei'
                        >
                            Completei
                        </button>
                    </footer>

                </div>

            ) : (
                <div className={style.challengeBoxActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up"/>
                        Avance de level completando desafios.
                    </p>
                </div>)}
        </div>
    )
}