import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CustomCard from './CustomCard'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Popup from './Popup'
import client from './client'

function App() {
  const [isVisible, setisVisible] = useState(false);
  const [allPostsData, setAllPosts] = useState(null);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{name, description, "thumbnail": thumbnail.asset->url, githublink, sitelink}`
      )
      .then((data) => {setAllPosts(data);console.log(data)})
      .catch(console.error);
  }, []);

  const enablePopup = (index) => {
    setisVisible(true);
    setProjectData(allPostsData[index])
  };

  const disablePopup = () => {
    setisVisible(false);
  };

  return (
    <>
      <Popup isVisible={isVisible} data={projectData} disablePopup={disablePopup}></Popup>
      <Dashboard data={allPostsData} togglePopup={enablePopup}></Dashboard>
      
      <Sidebar data={projectData}></Sidebar>
      
    </>
  )
}

export default App
