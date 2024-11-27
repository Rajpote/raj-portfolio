function Footer({ address }) {
   return (
      <footer id="Footer" className="text-center p-4 bg-gray-800 text-white">
         <p>
            © 2024 , {address.city}, {address.country}. All Rights Reserved.
         </p>
      </footer>
   );
}

export default Footer;
