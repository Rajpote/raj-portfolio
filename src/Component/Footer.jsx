function Footer({ address }) {
   return (
      <footer id="Footer" className="text-center p-4 bg-gray-800 text-white w-full z-50 shadow-md">
         <section className="flex justify-around">
            <div>
               <h1>Services</h1>
               <ul>
                  <li>Web development</li>
               </ul>
            </div>
            <div>
               <h1>Services</h1>
               <ul>
                  <li>Web development</li>
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
