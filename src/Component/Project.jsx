function Project({ projects }) {
   return (
      <section id="Project" className="p-4 h-fit bg-gray-500 text-black py-10 ">
         <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
         <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {projects.map((project) => (
               <div key={project.id} className="border p-4 rounded-md shadow-md bg-yellow-400">
                  <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                     View Project
                  </a>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Project;
