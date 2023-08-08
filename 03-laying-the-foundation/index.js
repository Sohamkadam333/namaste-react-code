import React from 'react';
import ReactDOM from 'react-dom/client';
import UserIconImage from './img/1564534_customer_man_user_account_profile_icon.png';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ****** Using React.createElement
/*
const heading1 = React.createElement('h1', { key: 1 }, 'Hello React');
const heading2 = React.createElement('h2', { key: 2 }, 'Heading 2');
const heading3 = React.createElement('h3', { key: 3 }, 'Heading 3');

const container = React.createElement('div', { className: 'title' }, [heading1, heading2, heading3]);
root.render(container);
*/

// ****** Using JSX
/*
const Heading1 = () => <h1>Heading 1</h1>;
const Heading2 = () => <h2>Heading 2</h2>;
const Heading3 = () => <h3>Heading 3</h3>;

const Container = () => (
  <div>
  <Heading1 />
  <Heading2 />
  <Heading3 />
	</div>
  );
  
  root.render(<Container />);
*/

// ***** Navbar design

const Logo = () => <h1>Logo</h1>;
const SearchBar = () => <input type='search' name='' id='' />;
const UserIcon = () => <img src={UserIconImage} alt='usericon' width='30px' height='30px' />;

const Header = () => (
	<header className='header'>
		<Logo />
		<SearchBar />
		<UserIcon />
	</header>
);

root.render(<Header />);
