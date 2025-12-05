import './assets/scss/main.scss';
import qrImage from './assets/images/qr-code.png';

function App() {
  return (
    <main>
      <section>
        <div className="wrapper">
          <div className="card">
            <figure>
              <img src={qrImage} alt="qr code" />
              <figcaption>
                <h1>Improve your front-end skills by building projects</h1>
                <p>
                  Scan the QR code to visit Frontend Mentor and take your coding
                  skills to the next level
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
