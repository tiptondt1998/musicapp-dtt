
import React from 'react'
import { ButtonItems2 } from './ButtonItems2'
import './h.css';


function HomeButtonsDisplay2() {
    return (
        <div className="buttons_display">
        <ul
        id="u"
        size="huge"
      >
        {ButtonItems2.map((item, index) => {
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

export default HomeButtonsDisplay2

