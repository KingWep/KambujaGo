import { useLocation } from 'react-router-dom'
import AdminRoutes from './Role/Admin/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
  const { pathname } = useLocation()
  const isAdmin = pathname === '/admin' || pathname.startsWith('/admin/')

  return isAdmin ? <AdminRoutes /> : <UserRoutes />
}

export default App
