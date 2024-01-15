import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTags, faT, faPen, faHashtag } from '@fortawesome/free-solid-svg-icons';

function Gnb()
{
    return (
        <>
         <div className="gnb">
            <Link to="/">
                <FontAwesomeIcon icon={faHome}/> 
                Home
            </Link>
            <Link to="/">
                <FontAwesomeIcon icon={faHashtag}/> 
                Mandalart
            </Link>
            <Link to="/">
                <FontAwesomeIcon icon={faT}/> 
                
            </Link>
            <Link to="/mypage">
                <FontAwesomeIcon icon={faUser}/> 
                Mypage
            </Link>
        </div>
        
        </>
    )
}

export default Gnb