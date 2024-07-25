import { useState } from "react";
import "./App.css";
import Rs_header_top, {
  Popup_Bottom,
  Rs_header_bottom,
  Rs_header_middle,
} from "./layouts/Rs_header";
import Rs_body, { BrandCarousel } from "./layouts/Rs_body";

function App() {
  const [hoverPoper, setHoverPoper] = useState(false);

  return (
    <>
      <Rs_header_top />
      <Rs_header_middle />
      <Rs_header_bottom setHoverPoper={setHoverPoper} />
      <Popup_Bottom hoverPoper={hoverPoper} />
      <Rs_body />
      <BrandCarousel />
    </>
  );
}

export default App;
