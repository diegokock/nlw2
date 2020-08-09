import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string; //Valor obrigatório, para não ser obrigatório colocaria um'?' em 'title?' para colocar um default.
}

const PageHeader: React.FC<PageHeaderProps> = (PROPS) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{PROPS.title}</strong>

                {PROPS.children}
            </div>
        </header>
    );
}

export default PageHeader;