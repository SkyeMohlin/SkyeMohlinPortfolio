import { useEffect, useState } from "react";
import "./PageTitle.css";

const PageTitle = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Check if the scroll position is greater than a certain value (e.g., 300px)
      if (scrollPosition > 350) {
        setFixed(true);
      } else {
        setFixed(false); // Optionally, remove the animation if scrolled back up
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="page-title normal">
        <div className={fixed ? "hidden" : "visible"}>
          <h1>{firstName}</h1>
          <h1 className="lastname">{lastName}</h1>
          <h2>Game developer gone frontend</h2>
        </div>
      </div>

      <div className="page-title small">
        <div className={fixed ? "visible slideIn" : "hidden"}>
          <h1>{firstName}</h1>
          <h1 className="lastname">{lastName}</h1>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
