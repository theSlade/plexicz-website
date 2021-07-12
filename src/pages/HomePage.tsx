import React from 'react';
import '../stylesheets/HomePage.css';

export default function HomePage() {
    return (
        <body className="index-body">
        <header>
             <h1 className="header-h1">Welcome to Plexicz Development</h1>
             <p className="header-p">"<i>Any fool can write code that a computer can understand</i>"</p>
        </header> 
        <main>
            <a className="middle-btn" href="/about"><i className="fas fa-question-circle"></i> About</a>
            <a className="middle-btn-two" href="/team"><i className="fas fa-handshake"></i> Meet the Team</a>
        </main>
     </body>
    )
}
