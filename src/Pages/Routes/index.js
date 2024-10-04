import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Sreach from '~/Pages/Sreach';
// layout
import { HeaderOnly } from '~/Conponents/Layouts';
const PublicRouter = [
  {
    path: '/', 
    Component: Home,
  },
  {
    path: '/following', // Corrected typo here
    Component: Following,
  },
  {
    path: '/profile', // Corrected typo here
    Component: Profile,
  },
  {
    path: '/upload', // Corrected typo here
    Component: Upload,
    layout: HeaderOnly
  },
  {
    path: '/sreach', // Corrected typo here
    Component: Sreach,
    layout: null
  },
];

const PrivateRoute = [
  // Add private routes here in the future
];

export { PublicRouter, PrivateRoute };