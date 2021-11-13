import "./styles/app.css"
import { useState } from "react";
import General from "./components/generalSection";
import Education from "./components/eduSection";
import Work from "./components/workSection";
import PrintProvider, { Print, NoPrint } from 'react-easy-print';


function App() {
  const [educationList, setEducationList] = useState([]);
  const [workList, setWorkList] = useState([]);

  const handleClick = (type) => {
    if (type === "education") {
      setEducationList(educationList.concat(<Education key={educationList.length} id={educationList.length} handleDelete={handleDelete} />));
    } else {
      setWorkList(workList.concat(<Work key={workList.length} handleDelete={handleDelete} />))
    }
  }

  const handleDelete = (type, id) => {
    if (type === "education") {
      setEducationList(educationList.filter((key) => key !== id))
    }
    else {
      setWorkList(workList.filter((key) => key !== id))
    }
  }

  return (
    <main>
      <PrintProvider>
        <NoPrint>
          <div className="wrapper">
            <h1>CV Creator</h1>

            <div id="general-info">
              <Print>
                <fieldset><legend>General info</legend></fieldset>
              </Print>
              <General />
            </div>

            <div id="edu-info">
              <Print>
                <fieldset><legend>Education</legend></fieldset>
              </Print>
              {educationList}
              <button
                onClick={() => handleClick("education")}
                className="main-page-btn">Add</button>
            </div>

            <div id="work-info">
              <Print>
                <fieldset><legend>Work Experience</legend></fieldset>
              </Print>
              {workList}
              <button
                onClick={() => handleClick("work")}
                className="main-page-btn">Add</button>
            </div>

            <button className="print-btn" onClick={() => window.print()}>Export to PDF</button>
          </div>
        </NoPrint>
      </PrintProvider>
    </main>

  );
}

export default App;
