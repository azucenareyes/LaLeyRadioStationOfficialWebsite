import React from 'react'
import PropTypes from 'prop-types'

const Welcome = (props) => {

    return (
      <div>
        <div className="welcome">
            <p>Bienvenidos a la pagina oficial de La Ley de Colorado,<br/>
              la estacion mas sintonizada.
            </p>
            <p>Miembros<br/>
            <ul>
              <li>Lucerito <img className="pics" src='suegra.jpg'  alt='redandblue'/>

              </li>
                <li>Pops</li>
                  <li>Gabriel Bueno</li>
                    <li>Salma Hayek</li>
                      <li>Mario Armada</li>
            </ul>
            </p>
        </div>

  </div>
);
};


export default Welcome;
