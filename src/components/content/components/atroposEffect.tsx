import { ReactNode, useEffect } from "react";
import Atropos from 'atropos';

type AtroposEffectProps = {
  children: ReactNode;
}

export default function AtroposEffect ({children} : AtroposEffectProps) {
  useEffect(() => {
    const myAtropos = Atropos({
      el: '.my-atropos',
      activeOffset: 80,
      shadow: false,
      highlight: false,
    });
    return () => {
      myAtropos.destroy();
    }
  }, []); 
  return (
    <div className="w-full atropos my-atropos">
       <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner" >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}