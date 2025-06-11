import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);
import {Line} from 'react-chartjs-2';
import { useTheme } from '../context/ThemeContext';

const Graph = ({graphData}) => {
    const {theme}=useTheme();
    return (
        <>

          <Line data={
            {
                labels: graphData.map((data) => data[0]),
                datasets: [
                    {
                        label: 'Wpm',
                        data: graphData.map((data) => data[1]),
                        borderColor: theme.title,
                    }
                ]
            }

          }/>
        </>
    );
}
export default Graph;