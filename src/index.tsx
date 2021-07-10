import React, { Suspense } from 'react'
import ReactDOM            from 'react-dom'
import { Spinner }         from "@vj-components"
import { StyleProvider }   from "@vj-styles/index";
import { Store }           from "@vj-store";
import { Gallery, Navbar } from "@vj-templates";


ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <Store>
        <Suspense fallback={<Spinner/>}>
          <Navbar/>
          <Gallery/>
        </Suspense>
      </Store>
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


