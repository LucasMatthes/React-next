import style from '../style/componentes/Profile.module.css';

export function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/69199993?s=400&u=847323bdf57446cca01f4ded98fa8fd8620bbbce&v=4" alt="Lucas Matthes"/>
            <div>
                <strong>Lucas Matthes</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}