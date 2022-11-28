import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let NavElement = links.map((link) => {
    return <a key={link} href={"#"+link} > {link} </a>
    });
    
  return (
  <nav>  
    {NavElement}
  </nav>)
}

export default NavBar;
