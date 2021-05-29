import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector, useDispatch } from "react-redux"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const counter = useSelector(state => state.counter)
  const auth = useSelector(state => state.authStatus)
  const dispatch = useDispatch()
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {auth ? (
        <p>
          <b>Youre Authorzied</b>
        </p>
      ) : (
        <p>
          <b>Youre Not Authorized</b>
        </p>
      )}
      <p>
        Value from Redux is <strong>{counter}</strong>
      </p>
      <button onClick={() => dispatch({ type: "INC", payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "SET_AUTH", payload: !auth })}>
        Authorize Now
      </button>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
