import { useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

const Notizie = () => {
  const [mostraAltro, setMostraAltro] = useState(false);

  return (
    <>
      <div className="bg-white p-3 rounded" style={{ minWidth: "300px", boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.1)" }}>
        <h4>
          LinkedIn Notizie{" "}
          <span className="ms-5">
            {" "}
            <img
              className="logo-link"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9InNpZ25hbC1ub3RpY2Utc21hbGwiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjE2eDE2IiBmaWxsPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIGQ9Ik0xMiAySDRhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY0YTIgMiAwIDAwLTItMnptLTMgOHYySDcuNUExLjUgMS41IDAgMDE2IDEwLjVhMS41NiAxLjU2IDAgMDEuMS0uNWwxLjA4LTNoMi4xM2wtMS4wOSAzem0wLTMuNzVBMS4yNSAxLjI1IDAgMTExMC4yNSA1IDEuMjUgMS4yNSAwIDAxOSA2LjI1eiIvPgo8L3N2Zz4="
            />
          </span>
        </h4>
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
          <div className={`notizia ${mostraAltro ? "" : "hidden"}`}>
            <li>Due italiane al top nella matematica</li>
            <p className="text-muted small">22 ore fa • 254 lettori</p>
          </div>
          <div className={`notizia ${mostraAltro ? "" : "hidden"}`}>
            <li>Ora che l&aposAI Act è legge</li>
            <p className="text-muted small">1 giorno fa • 248 lettori</p>
          </div>
          <div className={`notizia ${mostraAltro ? "" : "hidden"}`}>
            <li>Eni è al lavoro sul quantum computing</li>
            <p className="text-muted small">1 giorno fa • 202 lettori</p>
          </div>
          <div className={`notizia ${mostraAltro ? "" : "hidden"}`}>
            <li>Ferragamo cresce nel mondo dei vini</li>
            <p className="text-muted small">1 giorno fa • 175 lettori</p>
          </div>
          <div className={`notizia ${mostraAltro ? "" : "hidden"}`}>
            <li>Fumata rosa per il nuovo board di Cdp</li>
            <p className="text-muted small">22 ore fa • 102 lettori</p>
          </div>
        </ul>
        <Button className="btn custom-button" onClick={() => setMostraAltro(!mostraAltro)}>
          {mostraAltro ? "Nascondi altro" : "Mostra altro"}
        </Button>
      </div>
      <Footer />
    </>
  );
};
export default Notizie;
