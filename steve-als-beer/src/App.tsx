import React, { useState } from "react";
import "./App.css";
import BubbleEffect from "./Components/BubbleEffect.tsx"
import mash from "./Components/Graphics/mash.png";
import grain from "./Components/Graphics/grains.png";
import hops from "./Components/Graphics/hops.png";
import yeast from "./Components/Graphics/yeast.png";
import add from "./Components/Graphics/additives.png";
import recipe from "./Components/Graphics/recipes.png";
import styles from "./Components/Graphics/styles.png";
import glossary from "./Components/Graphics/book.png";
import Mash from "./Components/Mash.tsx";
import Additives from "./Components/Additives.tsx";
import Yeast from "./Components/Yeast.tsx";
import Styles from "./Components/Styles.tsx";
import Glossary from "./Components/Glossary.tsx";
import Grains from "./Components/Grains.tsx";
import Hops from "./Components/Hops.tsx";
import Recipes from "./Components/Recipes.tsx";
import {HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomeBody } from "./Components/HomeBody.tsx";

function App() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const [page, setPage] = useState<string>("Home");

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
    <Router>
      <div className="App" style={{ textAlign: "center" }}>
        <header className="App-header">
          <BubbleEffect />
          <div className="grid-container">
            <div className="left-column">
                <Link to = "mash"><img src={mash} alt="mash" className="clickable" onClick={() => setPage("mash")} onMouseEnter={(e) => handleMouseEnter("mash", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "mash" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Mashing Info</div>}
                <Link to = "grains"><img src={grain} alt="grains" className="clickable" onClick={() => setPage("grain")} onMouseEnter={(e) => handleMouseEnter("grains", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "grains" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Grain Types</div>}
                <Link to = "hops"><img src={hops} alt="hops" className="clickable" onClick={() => setPage("hops")} onMouseEnter={(e) => handleMouseEnter("hops", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "hops" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Hops</div>}
                <Link to = "yeast"><img src={yeast} alt="yeast" className="clickable" onClick={() => setPage("yeast")} onMouseEnter={(e) => handleMouseEnter("yeast", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "yeast" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Yeast</div>}
            </div>
            <div className="center-content">
              <Routes>
                <Route path="/mash" element={<Mash />} />
                <Route path="/grains" element={<Grains />} />
                <Route path="/hops" element={<Hops />} />
                <Route path="/yeast" element={<Yeast />} />
                <Route path="/additives" element={<Additives />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/styles" element={<Styles />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/" element={<HomeBody />} />
              </Routes>
              </div>
            <div className="right-column">
                <Link to = "additives"><img src={add} alt="additives" className="clickable" onClick={() => setPage("additives")} onMouseEnter={(e) => handleMouseEnter("additives", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "additives" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Additives</div>}
                <Link to = "recipes"><img src={recipe} alt="recipes" className="clickable" onClick={() => setPage("recipes")} onMouseEnter={(e) => handleMouseEnter("recipes", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "recipes" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Recipes</div>}
                <Link to = "styles"><img src={styles} alt="styles" className="clickable" onClick={() => setPage("styles")} onMouseEnter={(e) => handleMouseEnter("styles", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "styles" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Beer Styles</div>}
                <Link to = "glossary"><img src={glossary} alt="glossary" className="clickable" onClick={() => setPage("glossary")} onMouseEnter={(e) => handleMouseEnter("glossary", "left", e)} onMouseLeave={handleMouseLeave}/></Link>
                {hoveredItem === "glossary" && hoveredColumn === "left" && <div className="textbox" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>Glossary</div>}
            </div>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
