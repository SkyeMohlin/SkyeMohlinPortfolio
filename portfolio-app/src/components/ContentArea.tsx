import AboutMe from "./AboutMe";
import PortfolioCollection from "./PortfolioCollection.tsx";

const ContentArea = ({ index }: { index: number }) => {
  return (
    <>
      <div className="content-area">
        {index === 0 ? <AboutMe /> : <PortfolioCollection />}
      </div>
    </>
  );
};

export default ContentArea;
