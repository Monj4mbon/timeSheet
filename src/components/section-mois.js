import React from 'react'
import './section-mois.css'

export default class Mois extends React.Component {
    render () {
        return (
            <div className="Mois">
                <button class="hollow button">Janvier</button>
                <button class="hollow button">Février</button>
                <button class="hollow button">Mars</button>
                <button class="hollow button">Avril</button>
                <button class="hollow button">Mai</button>
                <button class="hollow button">Juin</button>
                <button class="hollow button">Juillet</button>
                <button class="hollow button">Août</button>
                <button class="hollow button">Septembre</button>
                <button class="hollow button">Octobre</button>
                <button class="hollow button">Novembre</button>
                <button class="hollow button">Décembre</button>
            </div>
        );
    };
};