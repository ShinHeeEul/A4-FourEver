import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Mycar from './mycar/Mycar';
import Engine from './mycar/routers/Engine';
import WheelDrive from './mycar/routers/WheelDrive';
import Main from './main/Main';
import BodyType from './mycar/routers/BodyType';
import Color from './mycar/routers/Color';
import SelectOption from './mycar/routers/SelectOption';
import Complete from './mycar/routers/Complete';
import Model from './mycar/routers/Model';
import RootTrim from './mycar/routers/parents/RootTrims';
import RootSelectOption from './mycar/routers/parents/RootSelectOption';

import { MyCarOptionAPI } from './api';

import { MYCAR, ARCHIVINGDETAIL, MYCHIVING, MYCHIVINGDETAIL ,BASIC_SERVER_URL, ARCHIVING,} from './constant';

import RootColor from './mycar/routers/parents/RootColor';
import ServerErrorPage from './error/ServerErrorPage';
import NotFound from './error/NotFoundPage';
import RootArchiving from './archiving/RootArchiving';
import ArchivingDetail from './archiving/router/ArchivingDetail';
import Archiving from './archiving/router/Archiving';
import Login from './login/Login';
import AuthCode from './login/AuthCode';
import RootMychiving from './mychiving/RootMychiving';
import Mychiving from './mychiving/router/Mychiving';
import MychivingDetail from './mychiving/router/MychivingDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'auth',
        element: <AuthCode />,
      },
      {
        path: 'main',
        element: <Main />,
      },
      {
        path: 'mycar',
        element: <Mycar />,
        children: [
          {
            path: 'trim',
            loader: () => MyCarOptionAPI(MYCAR.TRIM.URL),
            element: <RootTrim />,
            errorElement: <ServerErrorPage />,
            children: [
              {
                path: 'model',
                element: <Model />,
              },
              {
                path: 'engine',

                element: <Engine />,
              },
              {
                path: 'bodytype',
                element: <BodyType />,
              },
              {
                path: 'wheeldrive',
                element: <WheelDrive />,
              },
            ],
          },
          {
            path: 'color',
            loader: () => MyCarOptionAPI(MYCAR.COLOR.URL),
            element: <RootColor />,
            errorElement: <ServerErrorPage />,
            children: [{ path: '', element: <Color /> }],
          },
          {
            path: 'option',
            loader: () => MyCarOptionAPI(MYCAR.SELECTED.URL),
            errorElement: <ServerErrorPage />,
            element: <RootSelectOption />,
            children: [
              {
                path: 'selection',
                element: <SelectOption />,
              },
              {
                path: 'accessories',
                element: <SelectOption />,
              },
              {
                path: 'performance',
                element: <SelectOption />,
              },
            ],
          },
          {
            path: 'complete',
            element: <Complete />,
          },
        ],
      },

      {
        path: 'archiving',
        element: <RootArchiving />,

        children: [
          {
            path: ':id',
            loader: (item) =>
              MyCarOptionAPI(
                `${ARCHIVINGDETAIL.SELECTEDCAR.URL}${item.params.id}/car-review`,
              ),
            element: <ArchivingDetail />,
          },
          {
            path: '',
            loader: () => MyCarOptionAPI(ARCHIVING.URL.ONBOARDING),
            element: <Archiving />,
          },
        ],
      },
      {
        path: 'mychiving',
        element: <RootMychiving />,
        children: [
          {
            path: ':id',
            loader: (item) =>
              MyCarOptionAPI(
                `${MYCHIVINGDETAIL.SELECTEDCAR.URL}/${item.params.id}`,
              ),
            element: <MychivingDetail />,
          },
          {
            path: '',
            loader: () => MyCarOptionAPI(MYCHIVING.URL.FEEDS),
            element: <Mychiving />,
          },
        ],
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export default router;
