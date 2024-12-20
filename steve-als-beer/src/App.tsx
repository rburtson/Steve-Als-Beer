import React, { useState } from "react";
import "./App.css";
import BubbleEffect from "./Components/BubbleEffect.tsx"
import Homer from "./Components/Homer.tsx";
import mash from "./Components/Graphics/mash.png";
import grain from "./Components/Graphics/grains.png";
import hops from "./Components/Graphics/hops.png";
import yeast from "./Components/Graphics/yeast.png";
import add from "./Components/Graphics/additives.png";
import recipe from "./Components/Graphics/recipes.png";
import styles from "./Components/Graphics/styles.png";
import glossary from "./Components/Graphics/book.png";

function App() {
  const lastUpdate = process.env.REACT_APP_LAST_UPDATE || "Not available";
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });

  const handleMouseEnter = (item: string, column: string, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get the bounding box of the image
    setHoveredItem(item);
    setHoveredColumn(column);

    setTooltipPosition({
      top: rect.top + window.scrollY - 80, // Position the textbox above the image
      left: rect.left + rect.width / 2 + window.scrollX, // Center the textbox horizontally
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHoveredColumn(null);
  };
  
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header">
        <BubbleEffect />
        <div className="grid-container">
          <div className="left-column">
              <img src={mash} alt="mash" className="clickable" onMouseEnter={(e) => handleMouseEnter("mash", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "mash" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Mashing Info</div>}
              <img src={grain} alt="grains" className="clickable" onMouseEnter={(e) => handleMouseEnter("grains", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "grains" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Grain Types</div>}
              <img src={hops} alt="hops" className="clickable" onMouseEnter={(e) => handleMouseEnter("hops", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "hops" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Hops</div>}
              <img src={yeast} alt="yeast" className="clickable" onMouseEnter={(e) => handleMouseEnter("yeast", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "yeast" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Yeast</div>}
          </div>
          <div className="center-content">
            <a href="https://www.angelfire.com/pa/beerandweather/beerecipes.html"><h4>Welcome<br />to<br />Steve and Al's Brewhaus!</h4></a>
            <div>Currently being Recreated by: Ryan Burtson</div>
            <div>(last updated: {lastUpdate})</div>
            <span style={{paddingTop: "1%"}}><Homer /></span>
            <div style={{paddingTop: "3%", maxWidth: "80%"}}>
              Hi, I'm Al's son Ryan and you have reached my recreation of Steve and Al's homebrewing webpage. <br />
              <span className="body-styling"><em ><strong>"It's a pleasure to see you! Stay a while, look around, but, most importantly, sit back, relax, and have a homebrew!"</strong></em><br />~Steve and Al, 2002</span>
            </div>
            <br />
            <div className="body-styling">
              With the both of them being brothers, cooks, and enjoyers of beer, one fateful day Steve and Al decided, why not try our hand at making our own?
              <br />
              <div style={{paddingTop: "25px"}}>
                Their journey of homebrewing began after the gallon they made that day, and through their experiences brewing, they learned many secrets of the trade.
                In 2002, one year before I was born, they created their webpage, "Steve and Al's Brewhaus" to host what they had learned:
                <br />
                <div style={{fontSize: "16px", marginTop: "10px"}}>
                  <em><strong>"Now, a little background about
                  our homebrewing adventures and how we started. First, let us say that, yes, we do like beer and, yes, we are brothers. 
                  Secondly, we have no clue what we're doing. Just kidding guys. OK, it all began when our parents met. Well, that's another story in itself. 
                  Anyway, it all began when each of us turned 21 and were able to experience our first beers. OK, so maybe we tasted it before age 21, but never swallowed. 
                  Back to the story, we both liked to cook so we figured, hey, we could brew beer and so it all began with one little gallon. 
                  Which turned into another gallon, which then became mead, thereafter our cider adventures and five gallon . . .you get the idea. 
                  We made all of these beers listed here plus many others not even on here yet. We've been brewing for some time now and love it. Happy Brewing!!!" </strong></em>
                  ~Steve and Al
                </div>
              </div>
            </div>
            <div className="body-styling" style={{maxWidth: "50%"}}>
              Like my father, I am a person that likes to learn new things and to understand the intricacies of the concepts I enjoy. As a result, once I turned 21 and had the entire
              world of alcohol available to me, I wanted to try different types of beers to see what I liked and to understand what I liked about them. <br /><div style={{paddingTop: "35px"}}>Since homebrewing is no stranger 
              to my father, he is able to share his knowledge about the beers that I enjoy, and it prompted him to dig up their old webpage. As a Programmer and somebody that
              - like my uncle and father before me - enjoys drinking beer, recreating this webpage seemed like the perfect project to learn about brewing and to commemorate their website. Enjoy!</div>
            </div>
          </div>
          <div className="right-column">
              <img src={add} alt="additives" className="clickable" onMouseEnter={(e) => handleMouseEnter("additives", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "additives" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Additives</div>}
              <img src={recipe} alt="recipes" className="clickable" onMouseEnter={(e) => handleMouseEnter("recipes", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "recipes" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Recipes</div>}
              <img src={styles} alt="styles" className="clickable" onMouseEnter={(e) => handleMouseEnter("styles", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "styles" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Beer Styles</div>}
              <img src={glossary} alt="glossary" className="clickable" onMouseEnter={(e) => handleMouseEnter("glossary", "left", e)} onMouseLeave={handleMouseLeave}/>
              {hoveredItem === "glossary" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Glossary</div>}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
