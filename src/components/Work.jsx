import PortfolioCard from "./PortfolioCard";

const works = [  
  {
    imgSrc: "/images/Mavlon.jpg",
    title: "Travel Website - Mavlon Tours",
    tags: ["Website Development"],
    projectLink: "https://mavlontours.com/",
  },
  {
    imgSrc: "/images/Screenshot 2025-03-05 at 10-32-23 KANBAN.png",
    title: "KANBAN Task Management App - TaskAlign ",
    tags: ["CRUD"],
    projectLink: "https://taskalign.netlify.app/",
  },
  {
    imgSrc: "/images/Screenshot 2024-12-05 at 06-12-31 Perfumery.png",
    title: "eCommerce Website - Perfumery",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://bimbos-perfumery-e-commerce.netlify.app/",
  },
  {
    imgSrc: "/images/Screenshot 2024-12-05 at 06-14-36 Vite React.png",
    title: "Movie Showcase Website",
    tags: ["API","Development"],
    projectLink: "https://hngtask2-movie-app.netlify.app/",
  },
  {
    imgSrc: "/images/Screenshot 2024-12-05 at 06-13-48 Tech Studio Academy Python Full Stack Web Development Immersive Clone.png",
    title: "Techstudio Academy Website clone",
    tags: ["Development"],
    projectLink: "https://techstudio-clone-by-abimbola.netlify.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((work, key) => {
            const { imgSrc, title, tags, projectLink } = work;
            return (
              <PortfolioCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
