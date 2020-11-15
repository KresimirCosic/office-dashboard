import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

const Stats: React.FC = () => {
  const { categories } = useSelector((state: RootState) => state.shop);

  useEffect(() => {
    const canvas = document.getElementById(
      'categories-stats'
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const createRandomColor = () => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

    if (ctx) {
      const categoriesChart = new Chart(ctx, {
        data: {
          labels: categories.map((category) => category.category),
          datasets: [
            {
              label: '# of products',
              data: categories.map((category) => category.numberOfProducts),
              backgroundColor: categories.map((category) =>
                createRandomColor()
              ),
              borderColor: categories.map((category) => createRandomColor()),
              borderWidth: 1,
            },
          ],
        },
        type: 'polarArea',
      });
    }
  });

  return (
    <div className='Stats'>
      <h1>Stats</h1>
      <canvas id='categories-stats'></canvas>
    </div>
  );
};

export default Stats;
