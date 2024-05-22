import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
