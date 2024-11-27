function Project({ projects }) {
   return (
      <section id="Project" className="p-4">
         <h2 className="text-2xl font-bold">Projects</h2>
         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
               <div key={project.id} className="border p-4 rounded-md shadow-md">
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
