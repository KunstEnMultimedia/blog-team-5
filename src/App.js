import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/Home/HomePage';
import DisplayProfile from './Components/Profile/DisplayProfile';
import ProfilePage from './Components/Profile/ProfilePage';
import ReturnProfile from './Components/Profile/ReturnProfile';
import ProgramPage from './Components/Program/ProgramPage';
function App() {
  
    const [profileId, setProfileId] = useState('');

    if(profileId != ''){
        localStorage.setItem('personProfile' , profileId);
    }
    

    return (
    <>
        <Routes>
            <Route path="/" element={<HomePage setProfileId={setProfileId} profileId={profileId}/>}/>
            <Route path="/profile" element={<ProfilePage profileId={profileId} setProfileId={setProfileId}/>}/>
            <Route path="/programma" element={<ProgramPage/>}/>
        </Routes>
    </>)
}
export default App;
