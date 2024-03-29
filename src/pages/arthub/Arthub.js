import { useEffect } from 'react';
import { Artmain } from "../../components/arthubmain/arthub"
import { Cards } from "../../components/arthubcards/cards"


export const Arthub = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    if (container) {
        container.appendChild(Cards());
    }

    // Clean up function
    return () => {
        if (container) {
            container.innerHTML = ''; // Clear the container when component unmounts
        }
    };
}, []); 
    return (
        <>
          <Artmain />
          <div id="container"></div>
        </>
      )
}