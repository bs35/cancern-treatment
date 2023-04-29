import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { IoIosMore } from 'react-icons/io';
import { BsShield } from 'react-icons/bs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, DataLabel } from '@syncfusion/ej2-react-charts';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis, kanbanData, kanbanGrid, pieChartData, earningData, dropdownData } from '../data/dummy';

import { ChartsHeader, Button, LineChart, Header, Pie as PieChart } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Treatment = () => {
  const { currentColor, currentMode } = useStateContext();
  const [analysis, setAnalysis] = useState(null)

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => { 
    console.log(files.map(f => f.meta)) 
    allFiles.forEach(f => f.remove())
    setAnalysis(true)
    console.log(analysis) 
  }
  return (
    <div className="mt-24">
      {/* Карточка пациента. Она должна присутствовать на обоих страницах Главная и на План Лечения */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Медкарта</p>
              <p className="text-2xl">Крапивина А.И.</p>
            </div>

            <button
              type="button"
              style={{ color: 'rgb(0, 194, 146)', backgroundColor: 'rgb(235, 250, 242)' }}
              className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
            >
            <BsShield />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Загрузить"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="flex gap-10 m-4 flex-wrap justify-center">
      <div className="flex gap-10 m-4 flex-wrap justify-center">
      {/* Краткое изложение назначенного лечения */}
      <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Рекомендованное Лечение</p>
            <button type="button" className="text-xl text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            {/*<img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />*/}
            <div className="mt-8">
              <p className="text-lg"></p>
              <p className="text-gray-400 "></p>
              <p className="text-lg"> На основе анализов, определена меланома IV стадии после полной циторедукции.</p>
              <p className="text-lg"></p>
              <br></br>
              <p className="text-lg"> Рекомендованная адъювантная терапия:</p>
              <p className="text-lg"></p>
              <br></br>
              <p className="text-lg">1. Ниволумаб 1 мг/кг внутривенно капельно каждые три недели</p>
              <p className="text-lg">2. Четыре введения ипилимумаба 3 мг/кг внутривенно капельно каждые три недели + с дальнейшим поддерживающим режимом ниволумаба в дозе 3 мг/кг внутривенно капельно каждые две недели.</p>
              {/*<p className="font-semibold text-lg">
              На основе анализов, определена меланома IV стадии после полной циторедукции. 
              Рекомендованная адъювантная терапия: 
Ниволумаб 1 мг/кг внутривенно капельно каждые три недели + четыре введения ипилимумаба 3 мг/кг внутривенно капельно каждые три недели с дальнейшим поддерживающим режимом ниволумаба в дозе 3 мг/кг внутривенно капельно каждые две недели.
          </p>*/}
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Статистика заболевания</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      {/* Доска с детальным описание (1) медикаментозная терапия и (2) терапии */ }
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Анализ МедСистемы AI" title="Схема Лечения" />
        <KanbanComponent
          id="kanban"
          keyField="Status"
          dataSource={kanbanData}
          cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
        </KanbanComponent>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl  w-100 md:w-400">
          <ChartsHeader category="Всевозможные планы лечения" title="" />
          {/* Pie chart показывает в какую группу пациент показывает */}
          <div className="w-full">
            <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" width="full" />
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-800">
          {/* Bar chart показывает 3 возможных сценария назначенного лечения и для каждого: (1) безрецидивная выживаемость, (2) рецидив, (3) плацебо */}
          <ChartsHeader category="Самый оптимальный план" title="" />
          <div className="w-full">
            <ChartComponent
              id="charts"
              primaryXAxis={barPrimaryXAxis}
              primaryYAxis={barPrimaryYAxis}
              chartArea={{ border: { width: 0 } }}
              tooltip={{ enable: true }}
              background={currentMode === 'Dark' ? '#33373E' : '#fff'}
              legendSettings={{ background: 'white' }}
            >
              <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
              <SeriesCollectionDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Treatment;
