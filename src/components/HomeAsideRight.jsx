import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Notizie = () => {
  const [mostraAltro, setMostraAltro] = useState(false);

  return (
    <Container>
      <Row>
        <Col xs={{ span: 3 }}>
          <div className="bg-white p-5 rounded">
            <h4>LinkedIn Notizie</h4>
            <p className="text-muted">Storie principali</p>
            <ul className="lista-notizie">
              <div className="notizia">
                <li>Transizione elettrica: un discorso aperto</li>
                <p className="text-muted small">3 ore fa • 328 lettori</p>
              </div>
              <div className="notizia">
                <li>Semaforo giallo per il talento elettrico</li>
                <p className="text-muted small">7 giorni fa • 6.750 lettori</p>
              </div>
              <div className="notizia">
                <li>Alla comunicazione servono processi chiari</li>
                <p className="text-muted small">4 ore fa • 1.920 lettori</p>
              </div>
              <div className="notizia">
                <li>Dove crescono (e calano) i salari</li>
                <p className="text-muted small">22 ore fa • 336 lettori</p>
              </div>
              <div className="notizia">
                <li>Flessibilità e mobilità green per Generali</li>
                <p className="text-muted small">1 giorno fa • 258 lettori</p>
              </div>
              <div className={`notizia ${mostraAltro ? '' : 'hidden'}`}>
                <li>Due italiane al top nella matematica</li>
                <p className="text-muted small">22 ore fa • 254 lettori</p>
              </div>
              <div className={`notizia ${mostraAltro ? '' : 'hidden'}`}>
                <li>Ora che l'AI Act è legge</li>
                <p className="text-muted small">1 giorno fa • 248 lettori</p>
              </div>
              <div className={`notizia ${mostraAltro ? '' : 'hidden'}`}>
                <li>Eni è al lavoro sul quantum computing</li>
                <p className="text-muted small">1 giorno fa • 202 lettori</p>
              </div>
              <div className={`notizia ${mostraAltro ? '' : 'hidden'}`}>
                <li>Ferragamo cresce nel mondo dei vini</li>
                <p className="text-muted small">1 giorno fa • 175 lettori</p>
              </div>
              <div className={`notizia ${mostraAltro ? '' : 'hidden'}`}>
                <li>Fumata rosa per il nuovo board di Cdp</li>
                <p className="text-muted small">22 ore fa • 102 lettori</p>
              </div>
            </ul>
            <button onClick={() => setMostraAltro(!mostraAltro)}>
              {mostraAltro ? 'Nascondi altro' : 'Mostra altro'}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Notizie