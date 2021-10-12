import React from 'react'
import {ButtonPagesItems} from './ButtonPagesItems'
import './h.css';


function HomeButtonsDisplay() {
    return (
        <div className="buttons_display">
        <ul
        id="u"
        size="huge"
      >
        {ButtonPagesItems.map((item, index) => {
          return (
            <li className="li" key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
        </div>
    )
}

export default HomeButtonsDisplay
