import { NavLink, Outlet, ScrollRestoration} from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <ScrollRestoration />   
      <header>
        <nav>
          <h1>Jobrouter</h1>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="careers">Careers</NavLink>
            <NavLink to="help">Help</NavLink>
          </div>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
          <Outlet />
      </main>
    </div>
  )
}

export default RootLayout