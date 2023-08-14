import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Mycar from './mycar/Mycar';
import Mychiving from './mychiving/Mychiving';
import Engine from './mycar/routers/Engine';
import WheelDrive from './mycar/routers/WheelDrive';
import Main from './main/Main';
// import fetchOption from './api';
import fetchData from './api';
import BodyType from './mycar/routers/BodyType';
import Color from './mycar/routers/Color';
import SelectOption from './mycar/routers/SelectOption';
import Complete from './mycar/routers/Complete';
import Model from './mycar/routers/Model';
import RootTrim from './mycar/routers/parents/RootTrims';
import RootSelectOption from './mycar/routers/parents/RootSelectOption';
import MyCarOptionAPI from './api';
import { MYCAR } from './constant';
import RootColor from './mycar/routers/parents/RootColor';
import ServerErrorPage from './error/ServerErrorPage';
import NotFound from './error/NotFoundPage';
import RootArchiving from './archiving/RootArchiving';
import ArchivingDetail from './archiving/router/ArchivingDetail';
import Archiving from './archiving/router/Archiving';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // {
      //   path: '',
      //   element: <Login />,
      // },
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
                // loader: fetchOption,
                element: <Engine />,
              },
              {
                path: 'bodytype',
                // loader: fetchOption,
                element: <BodyType />,
              },
              {
                path: 'wheeldrive',
                // loader: fetchOption,
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
                // loader: fetchOption,
                element: <SelectOption />,
              },
              {
                path: 'accessories',
                // loader: fetchOption,
                element: <SelectOption />,
              },
              {
                path: 'performance',
                // loader: fetchOption,
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
            element: <ArchivingDetail />,
          },
          {
            path: '',

            element: <Archiving />,
          },
        ],
      },
      {
        path: 'mychiving',
        element: <Mychiving />,
        children: [],
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export default router;
