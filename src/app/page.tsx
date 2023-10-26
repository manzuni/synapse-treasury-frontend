"use client"
import Image from 'next/image'
import React from 'react';
import ChainHoldings from '../../components/chainHoldings.js'
import TokenList from '../../components/tokenList.js'
import MonthList from '../../components/pastHoldings.js'
import PieChart from '../../components/pieChart.js'
import dynamic from 'next/dynamic';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold font-inter">Synapse Treasury Holdings</h1>
      <div className= "w-2/3 h-full py-4">
        <h3 className="font-bold font-inter">Last Updated 10-22-2023</h3>
        <PieChart/> 
      </div>
      <div className="flex justify-between w-2/3 mx-auto">
        <div className="flex-1 border border-white p-4 rounded-lg mr-2">
          <ChainHoldings/>
          
        </div>
        <div className="flex-1 border border-white rounded-lg p-4 ml-2">
          <TokenList />
        </div>
      </div>
      <h3 className="font-bold font-inter pt-4">Historical Data</h3>
      <div className= "w-2/3 h-full py-4 border rounded-lg - my-4">
      
        <MonthList/>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>


    </main>
  )
}