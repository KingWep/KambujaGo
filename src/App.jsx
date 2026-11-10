
import DashboardPage from './Role/Admin/page/DashboardPage'
import AdminRoutes from './Role/Admin/AdminRoutes'
import SearchButton from './components/ui/SearchButton'
import { useState } from 'react'

function App() {
const [query,setQery] = useState("");

  return (
    <div>
      {/* <AdminSidebar />
      <AdminNavbar /> */}
      {/* <DashboardPage></DashboardPage> */}
      <AdminRoutes/>
      
    </div>
  )
}

export default App