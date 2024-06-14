import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { IoPersonOutline } from "react-icons/io5";
import { FaHatWizard } from "react-icons/fa";
import { GiWizardFace } from "react-icons/gi";
import { FaDiceD20 } from "react-icons/fa";


const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Mestre dos Magos</p>
        <FaDiceD20 />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, GM!</span><GiWizardFace />
              </p>
              <p>How can I assist?</p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <FaDiceD20 size={45} color={"cyan"} enableBackground={true} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <FaHatWizard size={45} color={"cyan"} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <div className="bottom-info">
            O programa ainda está em alpha. Em caso de sugestões, me comunique no discord! #khalilhehe
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;