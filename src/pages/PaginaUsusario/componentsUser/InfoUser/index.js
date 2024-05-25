import React, { useState } from 'react';
import styles from './InfoUser.module.css';
import '../../../../assets/Background-Image.png'
import Header from '../../../../components/Header';


const InfoUser = () => {
    

    return (
      
     <div className={styles.container}>
        <Header/>
        <div className={styles.imagem}>
            
            <div className={styles.foto}>
                <img src="Background-image.png"></img>
                <h2>Nome</h2>
            </div>
        
            <div>
                <h3>idade: </h3>
                <h3>cidade: </h3>
                <h3>Bio: </h3>

            </div>

            <div>
                <h3> telefone: </h3>
                <h3> email: </h3>
                <h3> influencia: </h3>
                <h3> Habilidades: </h3>

            </div>

            <button className={styles.botaoedt}>EditarPerfil</button>
            
        </div>
     
    </div>
    );
};

export default InfoUser;
