import { IoMdMenu } from "react-icons/io"; 
import { FaBluesky } from "react-icons/fa6";
import styles from "./assets/index.module.css";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
 
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className= {styles.navbar}>
            <div className={styles.name}>
                <nav>
                    <ul>
                        <li> <FaBluesky /></li>
                        <li>KHADIJA</li>
                    </ul>
                </nav>
               
           </div>
        
            <nav>
                <ul className={styles.list}>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>PROJECT</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
            <IoMdMenu className={styles.menu}/>

        </div>
        <div className="row">
         
          <div className="col-6 col-sm-12">
            <h1>Hi! I am KHADIJA.Creative Coder</h1>
            <p>As a Junior Frontend Developer, I am passionate about modern web technologies and determined to continue improving in this field. In addition to my foundational knowledge in HTML, CSS, and JavaScript, I have gained experience in creating dynamic and user-friendly websites by learning popular frameworks like React.js. I am also knowledgeable in responsive design and mobile compatibility, and I have shared my projects on GitHub, which has helped me get accustomed to working in a team. I stay up-to-date with the latest trends in web development and am constantly enhancing my practical skills. My goal is to deliver creative and functional web applications that provide an excellent user experience.

</p>
          </div>
          <div className="col-6 col-sm-12" id="butterfly">
          <FaBluesky/>
          </div>
        </div>
        <div className="services">
          <h2>My Services</h2>
        <div className="row" id="icons">
         
         <div className="col-3 col-md-6 col-sm-12">
         <ImHtmlFive2  id="icon"/>
         <h1>HTML</h1>
         <p>**Skills:**
- HTML5: Semantic HTML, Forms, API integration, Multimedia (Video, Audio, Canvas)
- Responsive Web Design: Flexbox, CSS Grid, Media Queries, Mobile Optimization
- SEO: Title, Meta tags, Alt attributes, Header structure
- Accessibility: ARIA tags, form validation, and screen reader compatibility
- Web Performance: Lazy loading, Image optimization, Mobile-first design
- Familiar with HTML5 features: Geolocation API, LocalStorage, Web Workers
</p>

         </div>
       
         <div className="col-3 col-md-6 col-sm-12">
    
         <TbBrandCss3 id="icon" />
         <h1>CSS</h1>
         <p>**Skills:**
- CSS3: Flexbox, CSS Grid, Box Model, Positioning, Z-Index
- Animations & Transitions: CSS animations with @keyframes, Hover effects, Transforms (scale, rotate, translate)
- Responsive Web Design: Media queries, Mobile-first approach, Responsive layouts
- Styling Forms: Custom checkboxes, radio buttons, and input styling
- Typography: Web fonts, text styling, text effects (text-shadow, letter-spacing)
- CSS Preprocessors: SASS/SCSS, Nesting, Mixins, Variables
- Cross-browser Compatibility: Ensuring consistent design across multiple browsers (Chrome, Firefox, Edge)
- CSS Frameworks: Bootstrap, Tailwind CSS, Foundation
</p>

         </div>
         <div className="col-3 col-md-6 col-sm-12">
         <FaReact  id="icon"/>
         <h1>REACT</h1>
         <p>**Skills:**
- React.js: JSX, Components, Props, State Management, Event Handling
- React Hooks: useState, useEffect, useContext, useRef, useReducer
- React Router: Dynamic Routing, Navigation, Route Parameters
- State Management: Context API, Redux, Redux Thunk/Saga
- Performance Optimization: React.memo, useMemo, useCallback, Lazy Loading
- Component Design: Presentational and Container Components, HOCs, Render Props
- API Integration: Fetch API, Axios, RESTful APIs, Asynchronous Operations (Async/Await)
- Testing: Jest, React Testing Library, Enzyme
- Git & GitHub: Version Control, Branching, Pull Requests, GitFlow
</p>
         </div>
         <div className="col-3 col-md-6 col-sm-12">
         <SiCyberdefenders id="icon"/>
         <h1>CYBER SECURITY</h1>
         <p>**Skills:**
- React.js: JSX, Components, Props, State Management, Event Handling
- React Hooks: useState, useEffect, useContext, useRef, useReducer
- React Router: Dynamic Routing, Navigation, Route Parameters
- State Management: Context API, Redux, Redux Thunk/Saga
- Performance Optimization: React.memo, useMemo, useCallback, Lazy Loading
- Component Design: Presentational and Container Components, HOCs, Render Props
- API Integration: Fetch API, Axios, RESTful APIs, Asynchronous Operations (Async/Await)
- Testing: Jest, React Testing Library, Enzyme
- Git & GitHub: Version Control, Branching, Pull Requests, GitFlow
</p>
         </div>
       </div>
        </div>

<div className="about">
  <h1>About Me</h1>
</div>
      </div>
    </>
  )
}

export default Navbar