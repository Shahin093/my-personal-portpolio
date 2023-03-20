
import './App.scss';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Skill from './components/Skill/Skill';
import Summary from './components/Summary/Summary';
import Footer from './components/Footer/Footer';
import Contact from './components/Summary/Contact';
import Projects from './components/Projects/Projects';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Project from './components/Project/Project';
import ProjectsDetail from './components/ProjectsDetail/ProjectsDetail';
import HomePage from './components/HOmePage/HomePage';
function App() {

  // const router = createBrowserRouter([
  //   { path: '/', element: <div>THis is default page</div> },
  //   { path: '/home', element: <div>home page</div> },
  //   { path: '/projects', element: <Projects></Projects> },
  //   { path: '/projects/:id', element: <ProjectsDetail></ProjectsDetail> },

  // ])


  useEffect(() => {
    Aos.init({
      duration: 2000,

    })
  }, []);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        {/* <Route path='/project/:id' element={<ProjectsDetail ></ProjectsDetail>}></Route> */}
        {/* <Route path='/projects' element={<Project></Project>}></Route> */}
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>


      </Routes>


      {/* <RouterProvider router={router}></RouterProvider> */}
      {/*  */}


      {/*  */}

      <Footer></Footer>
    </div >
  );
}

export default App;
