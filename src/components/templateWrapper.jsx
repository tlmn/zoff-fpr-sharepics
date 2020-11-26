import React, { useContext } from "react";

import Layout from "./layout";
import { Link } from "gatsby";
import TemplateContext from "../templateContext";
import WidthProvider from "../lib/widthProvider";

export default ({ children }) => {
  const [state, setState] = useContext(TemplateContext);

  return (
    <Layout>
      <div className="container grid-12">
        <div className="col-span-12 py-1 text-white">
          ←
          <Link
            to="/"
            className="hover:underline uppercase text-white font-lulo ml-1"
          >
            zurück zur Auswahl
          </Link>
        </div>
        <WidthProvider state={state} setState={setState} />

        {children}
      </div>
    </Layout>
  );
};
