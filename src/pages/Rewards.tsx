import React from "react";
import { Gift, ArrowRight } from "lucide-react";
import type { Reward } from "../types";

const rewards: Reward[] = [
  {
    id: "1",
    title: "Electricity Bill Discount",
    description: "Get 10% off your next electricity bill",
    points: 500,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    title: "Free EV Charging",
    description: "One month of free EV charging at partner stations",
    points: 1000,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    title: "Plant a Tree",
    description: "We'll plant a tree in your name",
    points: 300,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    title: "Smart Home Device",
    description: "Energy monitoring smart plug",
    points: 800,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export function Rewards() {
  return (
    <div className='min-h-screen py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <Gift className='mx-auto h-12 w-12 text-green-500' />
          <h2 className='mt-2 text-3xl font-bold text-gray-900'>
            Rewards Gallery
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            Redeem your UrjaPoints for exclusive rewards and discounts
          </p>
        </div>

        <div className='mt-12'>
          <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200'
              >
                <div className='relative h-48'>
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {reward.points} Points
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {reward.title}
                  </h3>
                  <p className='mt-2 text-gray-500'>{reward.description}</p>
                  <button className='mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700'>
                    Redeem Now
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12 bg-green-50 rounded-lg p-8'>
          <h3 className='text-xl font-semibold text-green-900'>
            How to Earn More Points
          </h3>
          <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: "Complete Challenges",
                description: "Participate in monthly sustainability challenges",
              },
              {
                title: "Reduce Consumption",
                description: "Lower your electricity and fuel usage",
              },
              {
                title: "Invite Friends",
                description: "Get 100 points for each friend who joins",
              },
            ].map((tip, index) => (
              <div key={index} className='bg-white rounded-lg p-6 shadow-sm'>
                <h4 className='font-medium text-green-800'>{tip.title}</h4>
                <p className='mt-2 text-sm text-gray-600'>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
