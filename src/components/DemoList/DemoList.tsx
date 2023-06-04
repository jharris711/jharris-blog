'use client';
import useStackBlitz from '@/hooks/useStackBlitz';

const DemoList = () => {
  const { vmInstance: heatMap } = useStackBlitz(
    'calHeatMap',
    'react-d3-calendar-heatmap',
    {
      openFile: 'src/App.jsx',
    }
  );
  const { vmInstance: geoman } = useStackBlitz(
    'geoman',
    'react-leaflet-geoman-control',
    {
      openFile: 'src/App.jsx',
    }
  );
  const { vmInstance: ellipse } = useStackBlitz(
    'coreApi',
    'react-leaflet-ellipse-component-core-api',
    {
      openFile: 'src/components/Ellipse.jsx',
    }
  );
  const { vmInstance: muiDrag } = useStackBlitz(
    'muiList',
    'draggable-mui-list',
    {
      openFile: 'components/DraggableList.tsx',
    }
  );

  return (
    <>
      <section className='text-gray-400 bg-gray-900 body-font overflow-hidden text-center'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-white p-8 border-b border-gray-800'>
          Code Demos
        </h1>
        <div className='container px-5 py-10 mx-auto'>
          <div className='-my-8 divide-y-2 divide-gray-800'>
            <div className='py-8 flex flex-col'>
              <div id='calHeatMap' />
              <br />
              <div id='geoman' />
              <br />
              <div id='coreApi' />
              <br />
              <div id='muiList' />
            </div>
          </div>
        </div>
        <div className='pb-10 w-full'>
          <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            See more on StackBlitz
          </button>
        </div>
      </section>
    </>
  );
};

export default DemoList;
