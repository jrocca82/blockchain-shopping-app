import React, { useState }   from 'react';
import Navigation from '../components/Navigation';

/* component styles */
import "./styles/header.scss";

const Header = () => {
    const [user, setUser] = useState<{}>({});

  const handleToggle=() => {
    //actions.ui.openLeftNav();
  }

    return (
      <div>
        <header>
          <Navigation />
        </header>
      </div>
    );

  }


export default Header;