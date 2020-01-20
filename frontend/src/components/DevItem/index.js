import React from 'react';

 import './styles.css';

export default function DevItem({ dev }) {
    return (
        <li className="dev-item">
            <header>
                <img src={ dev.avatar_url } alt={ dev.name } />
                <div className="user-info">
                    <strong>{ dev.name ? dev.name : dev.github_username }</strong>
                    <span>{ dev.techs }</span>
                </div>
            </header>
            <p>{ dev.bio }</p>
            <a href={`https://github.com/${ dev.github_username }/`}>Acessar</a>
        </li>     
    );
}
