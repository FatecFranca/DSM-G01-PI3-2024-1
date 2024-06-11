import React from 'react';
import styles from './InfoUser.module.css';
import Header from '../../../../components/Header';

const InfoUser = () => {
    return (
        <div className={styles.container}>
            <Header />
            <br />
            <br />
            <br />
            <div className={styles.background}>
                <div className={styles.fotoContainer}>
                    <img className={styles.foto} src="../../../uploads/carlos.jpg" alt="User" />
                </div>
                <div className={styles.info}>
                    <div className={styles.row}>
                        <h1>CARLOS PEREIRA CASTILLO</h1>
                        <h1>IDADE: 33</h1>
                    </div>

                    <div className={styles.row}>
                        <h3>CIDADE: Curitiba</h3>
                        <h3>ESTADO: Paraná</h3>
                    </div>

                    <div className={styles.row}>
                        <h3>BIO: Vivo a música desde a infância, toco violão desde então, e ao longos dos anos adquiri outras habilidades</h3>
                    </div>
                    <div className={styles.row}>
                        <h3>HABILIDADE: Violão, Guitarra, Bateria</h3>
                        <h3>INFLUÊNCIAS: MPB, Rock, Reggae</h3>
                    </div>
                    <div className={styles.row}>
                        <h3>INSTAGRAM: @carlos_music</h3>
                        <h3>FACEBOOK: carlos_pereira1991</h3>
                        <h3>YOUTUBE: carlinhosmusik</h3>
                    </div>
                </div>
            </div>

            <div className={styles.rowbotao}>
                <button className={styles.botao} Link to="/Home">EDITAR</button>
                <button className={styles.botao} Link to="/Home">LOGOUT</button>
            </div>
            <br/>
        </div>
    );
};

export default InfoUser;
