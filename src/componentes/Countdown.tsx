import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../style/componentes/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)


    const [minutesLeft, minutesRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    return(
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>


            </div>

            { hasFinished ? (
                <button 
                disabled
                className={style.countdownButton}
                id="ciclo"
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                        type="button" 
                        onClick={resetCountdown} 
                        className={`${style.countdownButton} ${style.countdownButtonActive}`}
                        id="ciclo"
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                        type="button" 
                        onClick={startCountdown} 
                        className={style.countdownButton}
                        id="ciclo"
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}