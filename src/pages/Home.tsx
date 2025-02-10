import React from "react";
import { ArrowRight, Zap, TreePine, Car } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block'>Save Energy,</span>
                  <span className='block text-green-600'>Earn Rewards</span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  A gamified platform to reduce your carbon footprint and unlock
                  real-world rewards. Join us in building a sustainable future.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <Link
                      to='/calculator'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'
                    >
                      Calculate Your Footprint
                      <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='Sustainable city'
          />
        </div>
      </div>

      {/* Features Section */}
      <div className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-base text-green-600 font-semibold tracking-wide uppercase'>
              Features
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Make a difference today
            </p>
          </div>

          <div className='mt-10'>
            <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10'>
              {[
                {
                  title: "Track Energy Usage",
                  description:
                    "Monitor your electricity consumption and see your impact in real-time.",
                  icon: Zap,
                },
                {
                  title: "Earn Green Points",
                  description:
                    "Get rewarded for every sustainable action you take.",
                  icon: TreePine,
                },
                {
                  title: "Reduce Emissions",
                  description:
                    "Track and reduce your carbon footprint with our smart calculator.",
                  icon: Car,
                },
              ].map((feature) => (
                <div key={feature.title} className='relative'>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {feature.title}
                  </p>
                  <p className='mt-2 ml-16 text-base text-gray-500'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
