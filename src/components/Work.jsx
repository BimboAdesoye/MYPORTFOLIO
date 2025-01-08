import PortfolioCard from "./PortfolioCard";

const works = [  
  {
    imgSrc: "/images/Mavlon.jpg",
    title: "Travel Website - Mavlon Tours",
    tags: ["Website Development"],
    projectLink: "https://mavlontours.com/",
  },
  {
    imgSrc: "/public/images/Screenshot 2024-12-05 at 06-12-31 Perfumery.png",
    title: "eCommerce Website - Perfumery",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://bimbos-perfumery-e-commerce.netlify.app/",
  },
  {
    imgSrc: "/public/images/Screenshot 2024-12-05 at 06-14-36 Vite React.png",
    title: "Movie Showcase Website",
    tags: ["API","Development"],
    projectLink: "https://hngtask2-movie-app.netlify.app/",
  },
  {
    imgSrc: "/public/images/Screenshot 2024-12-05 at 06-13-48 Tech Studio Academy Python Full Stack Web Development Immersive Clone.png",
    title: "Techstudio Academy Website clone",
    tags: ["Development"],
    projectLink: "https://techstudio-clone-by-abimbola.netlify.app/",
  },
  // {
  //   imgSrc: "/images/project-1.jpg",
  //   title: "Full stack music app",
  //   tags: ["API", "MVC", "Development"],
  //   projectLink: "https://musify-5al0.onrender.com/",
  // },
  // {
  //   imgSrc: "/images/project-2.jpg",
  //   title: "Free stock photo app",
  //   tags: ["API", "SPA"],
  //   projectLink: "https://pixstock-official.vercel.app/",
  // },
  // {
  //   imgSrc: "/images/project-3.jpg",
  //   title: "Recipe app",
  //   tags: ["Development", "API"],
  //   projectLink: "",
  // },
  // {
  //   imgSrc: "/images/project-4.jpg",
  //   title: "Real state website",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee-org/wealthome",
  // },
  // {
  //   imgSrc: "/images/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  // },
  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  // }, 
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
