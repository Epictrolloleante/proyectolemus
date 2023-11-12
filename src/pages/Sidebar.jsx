import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../css/Sidebar.css';
export default function SideBar({ items }) {
  console.log(items);
  return (

    <div className="Sidebarcontainer">
      <div class="list-group">
        {items.map(item => {
          return (
            <Link to={item.link} className={item.type === 'activo' ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
              <span style={{ paddingLeft: item.level === '2' ? '20px' : '0' }}>
                {item.text}
              </span>
            </Link>



          );

        })}
      </div>



    </div >
  )
}
