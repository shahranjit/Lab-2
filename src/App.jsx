import "./App.css"
import Card from "./Components/Card"

function App() {
  return (
    <>
    <h1>Resorts Lite</h1>
    <hr></hr>
    <div className="container">
        <Card
          image="src\assets\1.jpg"
          place="Indonesia"
          hotel="Gili Air Hotel"
          rating="4.8"
          price="$589/night"
          
        />
        <Card
          image="src\assets\2.jpg"
          place="Seychelles"
          hotel="Hilton Resort"
          rating="4.2"
          price="$629/night"
          
        />
        <Card
          image="src\assets\3.jpg"
          place="US Virgin Islands"
          hotel="Goa Resort"
          rating="3.5"
          price="$485/night"
          
        />
        <Card
          image="src\assets\4.jpg"
          place="Bahamas"
          hotel="Kuredu Resort"
          rating="4.1"
          price="$729/night"
          
        />
        <Card
          image="src\assets\5.jpg"
          place="Mauritius"
          hotel="Trou D'eau Douce"
          rating="4.9"
          price="$877/night"
          
        />
        <Card
          image="src\assets\6.jpg"
          place="Bermuda"
          hotel="Staniel Cay Hotel"
          rating="3.2"
          price="$365/night"
          
        />
         
      </div>
    </>
  );
};

export default App
