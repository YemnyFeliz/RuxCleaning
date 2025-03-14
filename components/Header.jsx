// import Navigation from './NavBar';
// import BubblesBackground from './Bubbles'


// export default function Header () {
   

//     return (
//         <>
//         <div className='header'>
//        <Navigation  />
//        <BubblesBackground key={Math.random()}/>
//        </div>
//        </>
//     )

// }

import Navigation from './NavBar';

export default function Header() {
  return (
    <div className='header'>
      <Navigation />
    </div>
  );
}
