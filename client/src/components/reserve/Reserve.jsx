import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import "./Reserve.css"
import { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
function Reserve({setOpen,theatreId}) {
  const { user } = useContext(AuthContext);
  console.log(user.email);
   const priceId= "price_1KyQsbSEIuQNw8aUVXLR0gnJ";
   const[Email,setEmail]=useState('')
    const navigate = useHistory()
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [quantity,setQuantity]=useState(0)
    const { data, loading, error } = useFetch(`theatre/seat/${theatreId}`);
    let isReserved=false
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setQuantity(quantity+1)
        setSelectedSeats(
          checked
            ? [...selectedSeats, value]
            : selectedSeats.filter((item) => item !== value)
        );
      };
    //  console.log(selectedRooms);
    
    
      const handleClick = async () => {
        try {
          // await Promise.all(
          //   selectedSeats.map((roomId) => {
          //     const res = axios.put(`seat/availability/${roomId}`, {
          //       isReserved: true
                
          //     });
          //     return res.data;
          //   })
          // );

          const {data: res}= await axios.post('subs/ticketSession',{
            email:user.email,
            priceId: priceId,
            quantity: quantity

          })
          window.location.href = res.url
          await setOpen(false);
        } catch (err) {
          alert("payment gateway busy")
        }
      };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your seats:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
            
              <div className="rMax">
                Category: <b>{item.category}</b>
              </div>
              <div className="rPrice">Price:{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.seatNumber.map((roomNumber,j) => (
                <div className="room" key={j}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber}
                    onChange={handleSelect}
                    disabled={item.isReserved===true}
                  />
                 
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  )
}

export default Reserve