import { useEffect, useRef } from "react";
import tableau from "tableau-api";

export default function TableauEmbed({ tableauUrl }) {
  const ref = useRef(null);
  const vizUrl = tableauUrl;

  useEffect(() => {
    const { tableau } = window;

    const options = {
      hideTabs: true,
      onFirstInteractive: () => {
        console.log("Tableau Viz has finished loading");
      },
    };

    // let viz = new tableau.Viz(ref.current, vizUrl, options);
    let viz;
    if (ref.current && tableau) {
      viz = new tableau.Viz(ref.current, vizUrl, options);
    }

    // Clean up viz on component unmount
    return () => {
      if (viz) {
        viz.dispose();
      }
    };
  }, [tableauUrl]);

  return (
    <>
      <div ref={ref} />
    </>
  );
}
