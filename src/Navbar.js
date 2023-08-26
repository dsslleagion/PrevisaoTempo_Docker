import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          {/* Adicione mais itens conforme necessário */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
