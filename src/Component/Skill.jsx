function Skill({ skills }) {
   return (
      <section id="Skill" className="p-4 bg-gray-500 text-white py-10 h-fit">
         <h2 className="text-2xl font-bold text-center mb-10">Skills</h2>
         <ul className="mt-2 flex items-center justify-center flex-wrap gap-4">
            {skills.map((image, index) => (
               <li key={index} className="bg-gray-200 p-2 rounded-md flex flex-col items-center justify-center w-30 h-32 shadow-md">
                  <img key={image.id} src={image.src} alt={image.alt} className="w-full h-full rounded-sm object-fit" />
               </li>
            ))}
         </ul>
      </section>
   );
}

export default Skill;
