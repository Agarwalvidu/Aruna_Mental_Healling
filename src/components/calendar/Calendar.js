// import React from 'react';
// import './Calendar.css'

// const Calendar = ({ onActivitySelect }) => {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = currentDate.getMonth();
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const monthName = currentDate.toLocaleString('default', { month: 'long' });

//   const handleActivitySelect = (day, activity, isChecked) => {
//     onActivitySelect(day, activity, isChecked);
//   };

//   return (
//     <div>
//       <div style={{ textAlign: 'center', marginBottom: '50px',color:'#EB6289' , fontFamily: ' Impact',fontSize:'3rem' }}>{monthName} {currentYear}</div>
//       <table style={{ width: '95%', borderCollapse: 'collapse', border: '1px solid #69B8B8',marginLeft:'45px' }}>
//         <tbody>
//           {[...Array(Math.ceil(daysInMonth / 10))].map((_, i) => {
//             const startIndex = i * 10 + 1;
//             const endIndex = Math.min(startIndex + 9, daysInMonth);
//             return (
//               <tr key={i}>
//                 {[...Array(endIndex - startIndex + 1)].map((_, index) => {
//                   const day = startIndex + index;
//                   return (
//                     <td key={day} style={{ padding: '10px', textAlign: 'center', border: '1px solid #69B8B8' }}>
//                       <div style={{ position: 'relative' }}>
//                         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '30px', height: '30px', borderRadius: '50%', border: '4px solid #EB6284' }}></div>
//                         <div style={{ position: 'relative', zIndex: 1, fontWeight: 'bolder', color: '#3AA8AA' }}>{day}</div>
//                       </div>
//                       <div>
//                         <label style={{ display: 'block', marginTop: '5px', textAlign: 'justify', fontFamily:'Cambria Math'}}>
//                           Yoga
//                           <input
//                             type="checkbox"
//                             value="Y"
//                             onChange={(e) => handleActivitySelect(day, 'Y', e.target.checked)}
//                             style={{  marginLeft:'65px' }}
//                           />
//                           <span style={{ color: '#3AA8AA' }}></span>
//                         </label>

//                         <label style={{ display: 'block', marginTop: '5px',textAlign: 'justify', fontFamily:'Cambria Math' }}>
//                           Meditation
//                           <input
//                             type="checkbox"
//                             value="M"
//                             onChange={(e) => handleActivitySelect(day, 'M', e.target.checked)}
//                             style={{  marginLeft:'20px' }}
//                           />
//                         </label>
//                         <label style={{ display: 'block', marginTop: '5px',textAlign: 'justify',fontFamily:'Cambria Math' }}>
//                           Healthy Diet
//                           <input
//                             type="checkbox"
//                             value="E"
//                             onChange={(e) => handleActivitySelect(day, 'E', e.target.checked)}
//                             style={{ marginLeft:'10px' }}
//                           />
//                         </label>
//                         <label style={{ display: 'block', marginTop: '5px',textAlign: 'justify', fontFamily:'Cambria Math' }}>
//                           Creative Hub
//                           <input
//                             type="checkbox"
//                             value="C"
//                             onChange={(e) => handleActivitySelect(day, 'C', e.target.checked)}
//                             style={{ marginLeft:'6px' }}
//                           />
//                         </label>
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;

import React from 'react';
import './Calendar.css';

const Calendar = ({ onActivitySelect }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const handleActivitySelect = (day, activity, isChecked) => {
    onActivitySelect(day, activity, isChecked);
  };

  return (
    <div>
      <div className="calendar-container">{monthName} {currentYear}</div>
      <div className="calendar-scrollable">
      <table className="calendar-table">
        <tbody>
          {[...Array(Math.ceil(daysInMonth / 10))].map((_, i) => {
            const startIndex = i * 10 + 1;
            const endIndex = Math.min(startIndex + 9, daysInMonth);
            return (
              <tr key={i}>
                {[...Array(endIndex - startIndex + 1)].map((_, index) => {
                  const day = startIndex + index;
                  return (
                    <td key={day} className="calendar-cell">
                      <div className="calendar-date">
                        <div className="calendar-marker"></div>
                        <div className="calendar-text">{day}</div>
                      </div>
                      <div>
                        <label className="calendar-checkbox ">
                          Yoga
                          <input
                            type="checkbox"
                            value="Y"
                            onChange={(e) => handleActivitySelect(day, 'Y', e.target.checked)}
                            className='checkbox-yoga'
                          />
                          <span style={{ color: '#3AA8AA' }}></span>
                        </label>

                        <label className="calendar-checkbox ">
                          Meditation
                          <input
                            type="checkbox"
                            value="M"
                            onChange={(e) => handleActivitySelect(day, 'M', e.target.checked)}
                            className='checkbox-meditation'
                          />
                        </label>
                        <label className="calendar-checkbox ">
                          Healthy Diet
                          <input
                            type="checkbox"
                            value="E"
                            onChange={(e) => handleActivitySelect(day, 'E', e.target.checked)}
                            className='checkbox-diet'
                          />
                        </label>
                        <label className="calendar-checkbox ">
                          Creative Hub
                          <input
                            type="checkbox"
                            value="C"
                            onChange={(e) => handleActivitySelect(day, 'C', e.target.checked)}
                            className='checkbox-hub'
                          />
                        </label>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Calendar;
