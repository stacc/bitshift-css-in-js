import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import FeedSC from "./styled-components/Feed.sc"
import FeedBEM from "./rebem/Feed.bem"
import FeedGlamor from "./glamor/Feed.glamor"

const Navigation = () => (
  <ul>
    <li>
      <Link to="/rebem">reBEM</Link>
    </li>
    <li>
      <Link to="/glamor">Glamor</Link>
    </li>
    <li>
      <Link to="/styled-components">Styled Components</Link>
    </li>
  </ul>
)

const App = () => (
  <main id="root">
    <Router>
      <div>
        <Route exact path="/" component={Navigation} />
        <Route path="/rebem" component={FeedBEM} />
        <Route path="/glamor" component={FeedGlamor} />
        <Route path="/styled-components" component={FeedSC} />
      </div>
    </Router>
  </main>
)

export default App
