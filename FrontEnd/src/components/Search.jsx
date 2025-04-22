// import React, { useState } from 'react';
// import './Nav.css';

// const Search = () => {
//   return (
//     <>
//       <div data-bs-theme="dark" style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
//         <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
//         <button type="button" class="btn-close" aria-label="Close"></button>
//         <button type="button" class="btn-close" disabled aria-label="Close"></button>
//       </div>
//       <div className="search-container">
//         {/* Regular search button in the header/nav */}
//         <button className="search-button">
//           Search
//         </button>

//         <div className="search-modal">
//           <div className="search-modal-content">
//             {/* Added cross button in top right corner */}
//             <div style={{position: 'relative'}}>
//               <button 
//                 className="close-button" 
//                 style={{
//                   position: 'absolute',
//                   top: '10px',
//                   right: '10px',
//                   background: 'none',
//                   border: 'none',
//                   fontSize: '1.5rem',
//                   cursor: 'pointer'
//                 }}
//               >
//                 ×
//               </button>
//             </div>
//             <form action={"/search"} className="search-form">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search..."
//                 name="search"
//                 required
//                 autoFocus
//               />
//               <button type="submit" className="search-submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Search;
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <div className="search-component">
      <div data-bs-theme="dark" className="button-group">
        <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
        <button type="button" className="btn-close" aria-label="Close"></button>
        <button type="button" className="btn-close" disabled aria-label="Close"></button>
      </div>
      
      <div className="search-container">
        <button className="search-button" onClick={openSearch}>
          Search
        </button>

        {isSearchOpen && (
          <div className="search-modal">
            <div className="search-modal-content">
              <button className="close-button" onClick={closeSearch}>
                ×
              </button>
              <form action="/search" className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  name="search"
                  required
                  autoFocus
                />
                <button type="submit" className="search-submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;