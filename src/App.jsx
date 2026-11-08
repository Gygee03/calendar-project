import './App.css'
import MiniSideBar from './components/MiniSideBar'
import SideNavBar from './components/SideBar'

function App() {
  return (
    <div>
      <div className='flex'>
        <SideNavBar />
        <MiniSideBar />
      </div>
    </div>
  )
}

export default App
