import Layout from '../components/Layout';
import Header from '../components/Header';
import RoutineCard from '../components/RoutineCard';
import { useState } from 'react';

// Mock data - would come from API in a real application
const routines = [
  {
    id: 'morning-refresh',
    title: 'Morning Refresh',
    description: 'Start the day right',
    icon: '☀️',
    iconBackground: 'bg-yellow-100',
    category: 'daily'
  },
  {
    id: 'nighttime-recovery',
    title: 'Nighttime Recovery',
    description: 'Wind down & repair',
    icon: '🌙',
    iconBackground: 'bg-indigo-100',
    category: 'daily'
  },
  {
    id: 'weekly-reset',
    title: 'Weekly Reset',
    description: 'Deep treatment & self-care',
    icon: '🧖‍♀️',
    iconBackground: 'bg-green-100',
    category: 'weekly'
  },
  {
    id: 'targeted-treatment',
    title: 'Targeted Treatment',
    description: 'Problem-solving care',
    icon: '🧪',
    iconBackground: 'bg-red-100',
    category: 'weekly'
  },
  {
    id: 'post-treatment',
    title: 'Post-Treatment',
    description: 'Medspa & at-home recovery',
    icon: '💉',
    iconBackground: 'bg-purple-100',
    category: 'weekly'
  }
];

export default function Home() {
  // Group routines by category
  const dailyRoutines = routines.filter(routine => routine.category === 'daily');
  const weeklyRoutines = routines.filter(routine => routine.category === 'weekly');

  return (
    <Layout activeItem="home">
      <Header 
        title="Glow-Orqid" 
        subtitle="Your personalized skincare journey" 
      />
      
      <div className="flex-1 px-6 pt-6 pb-24">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Daily Routines</h2>
          
          {dailyRoutines.map((routine) => (
            <RoutineCard
              key={routine.id}
              id={routine.id}
              icon={routine.icon}
              title={routine.title}
              description={routine.description}
              backgroundColor={routine.iconBackground}
            />
          ))}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Weekly & Special Care</h2>
          
          {weeklyRoutines.map((routine) => (
            <RoutineCard
              key={routine.id}
              id={routine.id}
              icon={routine.icon}
              title={routine.title}
              description={routine.description}
              backgroundColor={routine.iconBackground}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
