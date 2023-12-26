import { projects } from "./data";

// import starbucks from "../../assets/images/star.jpg";
type Props = {};

const MediumProjectCard = (props: Props) => {
  console.log(projects);
  return (
    <div className="">
      {/* <img src={starbucks} alt="" /> */}
      <img src="./images/Nike.jpg" alt="" />
      <section id="projects" className="text-gray-400 body-font">
        <div className="container   mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full "></div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  {/* <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  /> */}
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* <img
                    src={require(`./images/${project.image}`).default} // Updated line
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  /> */}
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediumProjectCard;
// const imag = [{ images: star }, { images: star }, { images: star }];
// const imgArray = [star, nike];
