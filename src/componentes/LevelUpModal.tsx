import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/componentes/LevelUpModal.module.css';

export function LevelUpModal() {

    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <header>{ level }</header>

                <strong>Parebéns</strong>
                <p>Você alcançou um novo level!</p>
                <button type="button" onClick={closeLevelUpModal} id='fecha'>
                    <img src="/icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>
    )
}