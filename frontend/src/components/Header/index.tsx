import { MdMenu } from 'react-icons/md';

import './style.css';

function Header () {
  return (
    <header className='header-content flex_center'>
      <div />
      <h2>Gerenciador de Produtos Nunes Sports</h2>
      <button
        onClick={() => window.alert('Em desenvolvimento...')}
        className='menu-btn'>
        <MdMenu size={30} color='gray' />
      </button>
    </header>
  );
}

export default Header;
