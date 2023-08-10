import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Mycar from './mycar/Mycar';
import Archiving from './archiving/Achiving';
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
import { OPTIONS } from './constant';

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
            loader: () => MyCarOptionAPI(OPTIONS.TRIM),
            element: <RootTrim />,
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
            // loader: fetchOption,
            element: <Color />,
            children: [{ path: '', element: <Color /> }],
          },
          {
            path: 'option',
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
        element: <Archiving />,
        children: [],
      },
      {
        path: 'mychiving',
        element: <Mychiving />,
        children: [],
      },
    ],
  },
]);

export default router;
