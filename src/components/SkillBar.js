import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import '../App.css';

const data = {
    labels: ['C', 'javascript', 'Python', 'Java', 'React', 'MySQL', 'Firebase'],
    datasets: [
        {
            backgroundColor: 'rgba(0, 0, 255,0.55)',
            borderColor: 'rgba(0, 0, 255,1)',
            borderWidth: 1,
            data: [99, 89, 79, 69, 69, 74, 79]
        }
    ]
};
const options = {
 
    tooltips: { enabled: false },
    hover: { mode: null },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            ticks: {
                display: false
            },
            display: false
        }],
        yAxes: [{
            categoryPercentage: 0.9,
            barPercentage: 0.6,
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                fontSize: 22,
                fontColor: 'black',
                beginAtZero: true
            }
        }]
    }
};

const SkillBar = (props) => {

    return (
        <div style={{
            paddingLeft: 100,
            paddingRight: 100
            }}>
            <HorizontalBar data={data}
                height={500}
                options={options} />
        </div>
    );
}

export default SkillBar;