import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/Home/HomePage';
import InfoPage from './Components/Info/InfoPage';
import NewsPage from './Components/News/NewsPage';
import DisplayProfile from './Components/Profile/DisplayProfile';
import ProfilePage from './Components/Profile/ProfilePage';
import ProgramPage from './Components/Program/ProgramPage';
import ProgramPost from './Components/ProgramPost/ProgramPost';
import ProgramPostPage from './Components/ProgramPost/ProgramPostPage';
import DisplaySearchResults from './Components/SearchResult/DisplaySearchResults';
import HandleSearch from './Components/SearchResult/HandleSearch';
import SearchPage from './Components/SearchResult/SearchPage';
import NotFound from "./Components/notFound/NotFound"

function App() {
  
    const [profileId, setProfileId] = useState('');
    const [programId, setProgramId] = useState('');

    if (profileId != ''){
        localStorage.setItem('personProfile' , profileId);
    }
    
    if(programId != ''){
        localStorage.setItem('programId' , programId);
    }
    

    return (
    <>
        <Routes>
            <Route path="/" element={<HomePage setProfileId={setProfileId} profileId={profileId} programId={programId} setProgramId={setProgramId}/>}/>
            <Route path="/profile" element={<ProfilePage profileId={profileId} setProfileId={setProfileId}/>}/>
            <Route path="/programma" element={<ProgramPage programId={programId} setProgramId={setProgramId}/>}/>
            <Route path="/programma_post" element={<ProgramPostPage programId={programId} setProgramId={setProgramId}/>}/>
            <Route path="/info" element={<InfoPage/>}/>
            <Route path="/nieuws" element={<NewsPage setProfileId={setProfileId}/>}/>
            <Route path="/search" element={<SearchPage setProgramId={setProgramId} setProfileId={setProfileId}/>}/>
            <Route path='/contact' element={<NotFound/>}/>
        </Routes>
    </>)
}
export default App;
