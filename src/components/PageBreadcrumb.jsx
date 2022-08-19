import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useLocation  } from 'react-router-dom';
import {ucFirst} from '../utils/CommonFunctions';


const breadcrumbItems = (location) => {
  
  /* Remove Empty values using filter */
  const segments = location.pathname.split('/').filter(n => n);
 
  let path     = '';
  let itemName = '';
  let lastItem = (segments.length - 1);

  return segments.map((item, index) => {

    path += `/${item}`;
    itemName = item.replace(/-/g,' ');

    if(index === lastItem){
      return (
        <li className="breadcrumb-item active" aria-current="page" key={`breadcrumb-item-${index}`}>
          {ucFirst(itemName)}
        </li>
      );
    }
    else{
      return (
        <li className="breadcrumb-item" key={`breadcrumb-item-${index}`}>
          <Link to={path} >{ucFirst(itemName)}</Link>
        </li>
      );
    }
  });

}

const PageBreadcrumb = () => {

  const location = useLocation();

  /* No Breadcrumb for Home page */
  if(location.pathname === "/" ){
    return null;
  }

  return (
    <Breadcrumb>
      <li className="breadcrumb-item">
        <Link to={'/'} role="button" tabIndex="0">Home</Link>
      </li>
      {breadcrumbItems(location)}
    </Breadcrumb>
  );
}

export default PageBreadcrumb;