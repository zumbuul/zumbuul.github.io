import react from "react";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import Individual from "./components/Individual";

function App() {
  const text = [
    "Algoritam za sortiranje je algoritam koji se koristi za sortiranje clanova niza u odredjenom redosledu. Za efikasan algoritam bitno je da se iskoristi struktura podataka koja dopusta nasumicni pristup memoriji. Efikasnost samog algoritma ocenjuje se na osnovu performanse na testovima koji ocenjuju koliko memorije algoritam zauzima i koliko vremena je algoritmu potrebno da procesuje niz. Ta dva testa zovu se Veliko O Slozenost Prostora i Veliko O Slozenost Vremena. (Big O space & time complexity)",
    "Slozenost vremena izvrsavanja algoritma predstavlja potrebno vreme za resavanje jedne istance problema. Ovo vreme se izrazava pomocu notacije velikog O i zavisi od broja unosnih vrednosti gde << n >> predstavlja broj vrednosti kao i same slozensti algoritma.",
    "Slozenost prostora algoritma predstavlja potrebnu memoriju za resavanje jedne instance problema. Kao i kod vremena, slozenost prostora se izrazava pomocu notacije velikog O i zavisi od broja unosnih vrednosti kao i same slozenosti algoritma.",
  ];
  const header = [
    "Sta je algoritam za sortiranje?",
    "Big O Time Complexity",
    "Big O Space Complexity",
  ];
  const img = ["./imgs/sort.gif", "./imgs/time.jpg", "./imgs/ram.jpg"];

  return (
    <div>
      <Navbar />{" "}
      <div className="about">
        <div className="about-container">
          <h1>Vizualizacija Algoritma za Sortiranje</h1>
          <h2>Graficki prikaz najpopularnijih algoritama za sortiranje</h2>
          <Start class={"about-start-button"} />
        </div>
      </div>
      <div className="main">
        <div className="main-content">
          <Individual
            href={"https://en.wikipedia.org/wiki/Sorting_algorithm"}
            text={text[0]}
            header={header[0]}
            img={img[0]}
          />
          <Individual
            href={"https://en.wikipedia.org/wiki/Time_complexity"}
            text={text[1]}
            header={header[1]}
            img={img[1]}
            imgClass={"rightfloat"}
          />
          <Individual
            href={"https://en.wikipedia.org/wiki/Space_complexity"}
            text={text[2]}
            header={header[2]}
            img={img[2]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
