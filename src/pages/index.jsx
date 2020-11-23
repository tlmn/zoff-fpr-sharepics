import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import { templates } from "../config/vars";

export default () => {
  return (
    <Layout>
      <div className="hidden md:block bg-darkGray font-lulo leading-normal">
        <div className="container py-2">
          <div className="mx-auto grid grid-cols-12 gap-y-3 gap-x-4 py-5">
            <div className="col-span-12 text-center">
              <h1 className="text-lg text-white font-lulo font-bold uppercase leading-tight">
                FPR • sharepics
              </h1>
            </div>
            {templates.map((template) => (
              <div className="col-span-12 sm:col-span-4 text-center">
                <Link to={template.link} className="no-underline">
                  <span
                    className="block text-base text-white uppercase pb-2"
                    dangerouslySetInnerHTML={{ __html: template.name }}
                  />
                  <img
                    src={template.thumbnailSrc}
                    alt={template.name}
                    className="hover:opacity-75 transition-all ease-in-out duration-200"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center h-screen px-2">
        <h1 className="font-merriweather text-white">
          Bitte für den Sharepic-Generator einen Desktop-Rechner verwenden.
        </h1>
      </div>
    </Layout>
  );
};
