function Footer({ address }) {
   return (
      <footer id="Footer" className="text-center p-4 bg-gray-800 text-white w-full shadow-md">
         <section className="flex justify-around">
            <div>
               <h1>Services</h1>
               <ul>
                  <li>Web development</li>
               </ul>
            </div>
            <div>
               <h1>Contact</h1>
               <ul className="text-right
               ">
                  <li>{address.email}</li>
                  <li>
                     <a href={address.github}>GitHub</a>{" "}
                  </li>
                  <li>
                     <a href={address.LinkedIn}>LinkedIn</a>
                  </li>
               </ul>
            </div>
         </section>
         <p>
            © 2024 , {address.city}, {address.country}. All Rights Reserved.
         </p>
      </footer>
   );
}

export default Footer;
