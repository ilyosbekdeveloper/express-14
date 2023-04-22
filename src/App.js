import './App.scss';
import { Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom';
import Main from './components/Main';
import Arizalar from './pages/Arizalar/Arizalar'
import Products from './pages/Products';
import Statistika from './pages/Statistika';
import Plus from './pages/Plus';
import Foydalanuvchilar from './pages/Foydalanuvchilar';
import Kategory from './pages/Kategory';
import Qoshish from './pages/Qoshish';
import { useState } from 'react';
import HomeSection from './components/HomeSection';
import { LogInContext } from './context/LogInContext';
import NoutFound from './pages/NotFound/NoutFound';
import LoginSection from './pages/LoginSection/LoginSection';


function App() {
  const [isLogin, setLogin] = useState(false)

  
  return (
    <Router>
      <LogInContext.Provider value={{isLogin, setLogin}}>
        <Routes>

          <Route path='/' element={<HomeSection />} />
          <Route path='/login' element={<LoginSection />} />
          {
            isLogin && (
              <Route path='main' element={<Main/>}>
                <Route path='panel' element={<Arizalar />}/>
                <Route path='products' element={<Products />}/>
                <Route path='statistika' element={<Statistika />}/>
                <Route path='plus' element={<Plus />}>
                    <Route index path='home' element={<Kategory />}/>
                    <Route path='qoshish' element={<Qoshish />}/>
                </Route>
                <Route path='foydalanuvchilar' element={<Foydalanuvchilar />}/>
              </Route>
            )
          }
          <Route path='*' element={<NoutFound />}/>

        </Routes>
      </LogInContext.Provider>
    </Router>
  );
}

export default App;
