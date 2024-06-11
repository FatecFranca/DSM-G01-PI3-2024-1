import React, { useState } from 'react';
import styles from './InfoUser.module.css';
import '../../../../assets/Background-Image.png'
import Header from '../../../../components/Header';


const InfoUser = () => {
    

    return (
      
     <div className={styles.container}>
        <Header/>
<br/>
<br/>
<br/>
        <div className={styles.imagem}>
            
            <div className={styles.foto}>
                <img src="Background-image.png"></img>
                <h2>NOME:</h2>
                <h3>UF: </h3>
            </div>
        
            <div>
                <h3>IDADE: </h3>
                <h3>CIDADE: </h3>
                <h3>BIO: </h3>

            </div>

            <div>
                <h3> E-MAIL: </h3>
                <h3> INFLUÊNCIAS: </h3>
                <h3> HABILIDADES: </h3>
            </div>
        </div>
        <div>        
        <button className={styles.botaoedt}>EDITAR</button>
        <button className={styles.botaoedt}>LOGOUT</button>
        </div>
    </div>

    
    );
};

export default InfoUser;
