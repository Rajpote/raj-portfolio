function Skill({ skills }) {
   return (
      <section id="Skill" className="p-4">
         <h2 className="text-2xl font-bold">Skills</h2>
         <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
               <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {skill}
               </li>
            ))}
         </ul>
      </section>
   );
}

export default Skill;
