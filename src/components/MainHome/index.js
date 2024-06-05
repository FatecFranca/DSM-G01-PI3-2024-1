import React from 'react'  
import banner from '../../assets/Background-Image.png'
import styles from './MainHome.module.css'
export function Conteudo () {
    return (    
        <div className={styles.conteudo}>
              <img className={styles.banner} src={banner}/>
              <div className={styles.texto}>
                <h2>SEJA BEM VINDO!</h2>

                <p>Você sabe que música é uma indústria vasta e diversificada, 
                  <br/>mas a conexão entre 
músicos muitas vezes é feita de forma informal e ineficaz.
<br/>
<br/>
Para resolver seus problemas utilize o <strong>BAND FINDER</strong>! 
<br/>uma plataforma que oferece uma solução escalável e acessível!
<br/>para conectar músicos de forma eficiente, permitindo que eles criem perfis detalhados, 
<br/>filtrem por critérios específicos e entrem em contato diretamente uns com os outros, 
<br/>facilitando a formação de bandas e colaborações musicais.</p>
<br/>
 <p>A <strong>BAND FINDER</strong> é uma solução revolucionária que promete dinamizar a cena musical local e global, 
  <br/>conectando músicos de forma eficiente e promovendo a colaboração e o crescimento artístico.
  <br />
  <br /> 
  Com a <strong>BAND FINDER</strong>, a busca pelo parceiro musical ideal se torna mais rápida e assertiva, 
  <br/>permitindo que músicos se concentrem no que realmente importa: criar e compartilhar música.</p>
 
              </div>
            
      </div>
    )
    
}

export default Conteudo;