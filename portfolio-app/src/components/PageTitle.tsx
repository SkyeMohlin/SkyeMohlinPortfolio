import "./PageTitle.css";

const PageTitle = ({ title }: { title: string }) => {
  return <h1 className="page-title">{title}</h1>;
};

export default PageTitle;
