import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";

export default ({ children }) => (
  <Layout>
    <div className="container grid-12">
      <div className="col-span-12 py-1 text-white">
        ←
        <Link to="/" className="hover:underline uppercase text-white font-lulo ml-1">
          zurück zur Auswahl
        </Link>
      </div>
      {children}
    </div>
  </Layout>
);
