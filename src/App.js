import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import FeedCSS from "./css/Feed.css.js"
import FeedBEM from "./rebem/Feed.bem"
import FeedGlamor from "./glamor/Feed.glamor"
import FeedCM from "./css-modules/Feed.cm"
import FeedSC from "./styled-components/Feed.sc"
import "./resets.css"

const Navigation = () => (
  <ul>
    <li>
      <Link to="/css">CSS</Link>
    </li>
    <li>
      <Link to="/rebem">reBEM</Link>
    </li>
    <li>
      <Link to="/glamor">Glamor</Link>
    </li>
    <li>
      <Link to="/css-modules">css-modules</Link>
    </li>
    <li>
      <Link to="/styled-components">Styled Components</Link>
    </li>
  </ul>
)

const App = () => (
  <div id="root">
    <Router>
      <div>
        <Route exact path="/" component={Navigation} />
        <Route path="/css" component={FeedCSS} />
        <Route path="/rebem" component={FeedBEM} />
        <Route path="/glamor" component={FeedGlamor} />
        <Route path="/css-modules" component={FeedCM} />
        <Route path="/styled-components" component={FeedSC} />
      </div>
    </Router>
  </div>
)

export default App
