import React from 'react';
import { NavLink } from 'react-router-dom';

const SideContent = () => {
    const iconsList = [
        {icon: <i className="fa-solid fa-user"></i>, url:"users",  description:"User"  },
        {icon: <i className="fa-brands fa-slack"></i>, url:"/social",  description:"Social"  },
        {icon: <i className="fa-brands fa-figma"></i>, url:"/design",  description:"Design"  },
        {icon: <i className="fa-solid fa-list"></i>, url:"/activities",  description:"Activities"  },
        {icon: <i className="fa-solid fa-snowflake"></i>, url:"/weather",  description:"weather"  },
        {icon: <i className="fa-solid fa-palette"></i>, url:"/art",  description:"Art"  },
        {icon: <i className="fa-solid fa-pen"></i>, url:"/customize",  description:"Customize"  },
        {icon: <i className="fa-solid fa-calendar-days"></i>, url:"/schedules",  description:"Schedules"  },
        {icon: <i className="fa-solid fa-calendar-days"></i>, url:"/schedules",  description:"Schedules"  },
        {icon: <i className="fa-solid fa-calendar-days"></i>, url:"/schedules",  description:"Schedules"  },
        {icon: <i className="fa-solid fa-calendar-days"></i>, url:"/schedules",  description:"Schedules"  },
    ]
    return (
        <div className='sidebar_main  '>
           {iconsList.map(i =>{
    return(
        <ul className='ps-2 mb-0 first_child'>
        {/* <NavLink to={i.url} className='text-decoration-none text-dark'> */}
        <li className='ActionListContent '>
        <span className='ActionListItem-visual  ActionListItem-visual--leading' >{i.icon}</span>
        <span className=' ActionListItem-label'>{i.description}</span>
        </li>  
        {/* </NavLink> */}
        </ul>
    )
})}
        </div>
    );
};

export default SideContent;