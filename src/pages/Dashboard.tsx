import React from 'react';
import { Trophy, Users, TreePine, Zap } from 'lucide-react';
import type { Challenge } from '../types';

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Energy Saver',
    description: 'Reduce your electricity consumption by 20%',
    reward: '10% off electricity bill',
    progress: 65,
    target: 100,
  },
  {
    id: '2',
    title: 'Green Commuter',
    description: 'Use public transport for 20 days',
    reward: 'Free bus pass for a week',
    progress: 12,
    target: 20,
  },
  {
    id: '3',
    title: 'Community Champion',
    description: 'Help 5 neighbors calculate their footprint',
    reward: 'Plant a tree in your name',
    progress: 3,
    target: 5,
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">CO₂ Saved This Month</dt>
                    <dd className="text-lg font-bold text-gray-900">50 kg</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">UrjaPoints</dt>
                    <dd className="text-lg font-bold text-gray-900">250</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TreePine className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Trees Worth</dt>
                    <dd className="text-lg font-bold text-gray-900">5 trees</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">City Rank</dt>
                    <dd className="text-lg font-bold text-gray-900">#15</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Challenges */}
        <div className="mt-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Active Challenges</h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{challenge.description}</p>
                  <div className="mt-2">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            Progress
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-green-600">
                            {Math.round((challenge.progress / challenge.target) * 100)}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                        <div
                          style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <span className="font-medium">Reward:</span> {challenge.reward}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Community Leaderboard</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {[
                { name: 'Sarah Chen', points: 1250, rank: 1 },
                { name: 'Michael Kumar', points: 980, rank: 2 },
                { name: 'Priya Sharma', points: 875, rank: 3 },
                { name: 'David Wilson', points: 760, rank: 4 },
                { name: 'Arun Patel', points: 690, rank: 5 },
              ].map((user, idx) => (
                <li key={idx}>
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div className="flex items-center">
                        <div className="font-medium text-xl text-green-600 w-8">{user.rank}</div>
                        <div className="ml-4">
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.points} UrjaPoints</p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-5 flex-shrink-0">
                      <Trophy className={`h-5 w-5 ${idx === 0 ? 'text-yellow-400' : 'text-gray-400'}`} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}