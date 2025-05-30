import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import React from "react";

const Homepage = () => {
  return (
    <div className='grid grid-col-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppBarChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>Test</div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <AppPieChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>Test</div>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'>
        <AppAreaChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        Test
      </div>
    </div>
  );
};

export default Homepage;
