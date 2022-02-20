import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./ui/common/routes";
import { Home } from "./ui/pages/Home";
import { Navbar } from "./ui/common/components/Navbar";
import { NewsExpanded } from "./ui/pages/NewsExpanded";
import { Col, Row } from "antd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* Used for some spacing in left and right side */}
        <Row>
          <Col xs={1} sm={2}></Col>
          <Col xs={22} sm={20}>
            <Routes>
              <Route path={routes.HOME} element={<Home />} />
              <Route path={routes.NEWS_EXPANDED} element={<NewsExpanded />} />
            </Routes>
          </Col>
          <Col xs={1} sm={2}></Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
