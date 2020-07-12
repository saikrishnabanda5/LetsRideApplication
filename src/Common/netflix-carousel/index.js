import  React from 'react'
import { Component } from 'react';

class Carousel extends Component {
  render() {
    alert()
    return (
      <div>
        sdghgyuhiklhjiugbjul
      </div>
    );
  }
}

export default Carousel;
// function Carousel() {
//   alert()
//   const [active, setActive] = useState(-1)

//   const styles = useMemo(() => {
//     const activeRow = Math.ceil((active + 1) / c.ITEMS_PER_ROW) // Active item's index as row
//     const activeColumn = active % c.ITEMS_PER_ROW // Active item's index as column

//     return items.map((_, i) => {
//       const currentRow = Math.ceil((i + 1) / c.ITEMS_PER_ROW)

//       if (active === -1 || activeRow !== currentRow) {
//         return {
//           transition: '400ms all ease',
//           transform: 'translateX(0) scale(1)'
//         }
//       }

//       const scale = c.SLIDE_HOVER_WIDTH / c.SLIDE_WIDTH
//       const translate = (c.SLIDE_HOVER_WIDTH - c.SLIDE_WIDTH) / 2
//       const offset = (() => {
//         if (activeColumn === 0) {
//           return (c.SLIDE_HOVER_WIDTH - c.SLIDE_WIDTH) / 2
//         }
        
//         if (activeColumn === c.ITEMS_PER_ROW - 1) {
//           return -((c.SLIDE_HOVER_WIDTH - c.SLIDE_WIDTH) / 2)
//         }
        
//         return 0
//       })()

//       if (active === i) {
//         return {
//           transition: '400ms all ease',
//           transform: `translateX(${offset}px) scale(${scale})`
//         }
//       }

//       if (i < active) {
//         return {
//           transition: '400ms all ease',
//           transform: `translateX(-${translate - offset}px) scale(1)`
//         }
//       }

//       if (i > active) {
//         return {
//           transition: '400ms all ease',
//           transform: `translateX(${translate + offset}px) scale(1)`
//         }
//       }

//       return {}
//     })
//   }, [active])
  
//   return (
//     <div className="app-body">
//       <div className="app-container">
//         <div className="show-list">
//           {items.map((item, i) =>
//             <div className="column" style={styles[i]} key={i}>
//               <div className="show-item-container">
//                 <div className="show-item" onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(-1)}>
//                   <img src={thumbnail} className="thumbnail" />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

