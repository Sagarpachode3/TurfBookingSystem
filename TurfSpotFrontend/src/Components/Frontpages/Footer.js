import React from "react";
import './frontPage.css';

const Footer = () => (
  <footer className="text-sm px-8 text-center flex-none py-4 change-clr">
   <p className="text-white">
   Copyright @ The Dugout Rights Reserved{' '}
    <a
     href="/"
     target="_blank"
     rel="noopener noreferrer"
    >
    
    </a>
   </p>
   <div className="p-2 mt-4" id="faqs">
    <a
     rel="noopener noreferrer"
     className="bg-mid-purple hover:bg-light-blue text-white hover:text-mid-blue px-2 py-1 pointer no-underline text-sm"
     href="/Faq"
    >
    <i class="fas fa-question"/> FAQs
    </a>
   </div>
  </footer>
 )
export default Footer;