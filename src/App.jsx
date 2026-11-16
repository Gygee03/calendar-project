import './App.css'
import FullCalendar from './components/FullCalendar'
import MiniSideBar from './components/MiniSideBar'
import SideNavBar from './components/SideBar'

function App() {
  return (
    <div>
      <div className='flex'>
        <SideNavBar />
        <MiniSideBar />
        <FullCalendar />
      </div>
    </div>
  )
}

export default App
