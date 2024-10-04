import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRouter } from "~/Pages/Routes";
import {DefauftLayout} from "~/Conponents/Layouts"
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {PublicRouter.map((route, index) => {
            const Page = route.Component;
            // nếu ko có layout === null thì ko dùng DefauftLayout nếu ko bằng null thì có DefauftLayout
            // const Layouts = route.layout === null? Fragment: DefauftLayout viết tắt 
              let Layouts = DefauftLayout
              if (route.layout) {
                Layouts = route.layout;
              } 
              else if(route.layout === null){
                Layouts = Fragment
              }
            return (
                // hiển thị trang
              <Route 
                key={index} 
                path={route.path}
                element={<Layouts><Page /></Layouts>} // Render component dưới dạng một phần tử JSX
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;