import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { AiFillRedditCircle } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini Clone</p>
        <IoPersonOutline />
      </div>
      <div className="main-container">
        {!showResult?
        <>
        <div className="greet">
          <p>
            <span>Hello, Dev!</span>
          </p>
          <p>How can I assist?</p>
        </div>
        </>
        :<div className="result">
            <div className="result-title">
              <IoPersonOutline size={45} color={"cyan"} enableBackground={true}/>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <AiFillRedditCircle size={45} color={"cyan"}/>
                {loading?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>:
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
        </div>
        }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
            <div>
              {input?<img onClick={() => onSent()}src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <div className="bottom-info">
            Gemini may display inaccurate info, including about people, so double check its responses.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
