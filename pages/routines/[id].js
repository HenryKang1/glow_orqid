import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import GoalCard from '../../components/GoalCard';
import StepCard from '../../components/StepCard';
import { useEffect, useState } from 'react';

// Mock data - would come from API in a real application
const routinesData = {
  'morning-refresh': {
    id: 'morning-refresh',
    title: 'Morning Refresh',
    description: 'Start the Day Right',
    icon: '☀️',
    iconBackground: 'bg-yellow-100',
    goal: 'Wake up, cleanse, protect, and energize your skin & body.',
    steps: [
      {
        number: 1,
        title: 'Cleanse & Prep',
        products: ['Face Cleansers', 'Face Wipes', 'Face Mists']
      },
      {
        number: 2,
        title: 'Hydrate & Boost',
        products: ['Toners', 'Essences', 'Vitamin C Serums']
      },
      {
        number: 3,
        title: 'Protect & Glow',
        products: ['Moisturizers', 'Sunscreens', 'Lip SPF']
      },
      {
        number: 4,
        title: 'Energize Body & Mind',
        products: ['Journals', 'Water Bottles', 'Supplements']
      }
    ],
    tips: [
      'Apply products from thinnest to thickest consistency',
      'Wait 60 seconds between each product application',
      'Reapply sunscreen every 2 hours when outdoors',
      'Use upward motions when applying products to counter gravity'
    ]
  },
  'nighttime-recovery': {
    id: 'nighttime-recovery',
    title: 'Nighttime Recovery',
    description: 'Wind Down & Repair',
    icon: '🌙',
    iconBackground: 'bg-indigo-100',
    goal: 'Cleanse, repair, and deeply hydrate for overnight skin recovery.',
    steps: [
      {
        number: 1,
        title: 'Double Cleanse',
        products: ['Makeup Removers', 'Oil Cleansers', 'Exfoliants']
      },
      {
        number: 2,
        title: 'Repair & Treat',
        products: ['Retinol', 'Overnight Serums', 'Peptides']
      },
      {
        number: 3,
        title: 'Hydrate & Lock-In Moisture',
        products: ['Night Creams', 'Sleeping Masks', 'Face Oils']
      },
      {
        number: 4,
        title: 'Deep Relaxation',
        products: ['Aromatherapy', 'Silk Pillowcases', 'Humidifiers']
      }
    ],
    tips: [
      'Apply retinol to dry skin to avoid irritation',
      'Use a pea-sized amount of retinol for your entire face',
      'Layer serums from thinnest to thickest consistency',
      'Use a humidifier in your bedroom for extra hydration'
    ]
  },
  'weekly-reset': {
    id: 'weekly-reset',
    title: 'Weekly Reset & Spa Ritual',
    description: 'Deep Treatment & Self-Care',
    icon: '🧖‍♀️',
    iconBackground: 'bg-purple-100',
    goal: 'A deeper, at-home spa treatment to refresh skin & body.',
    steps: [
      {
        number: 1,
        title: 'Exfoliation & Detox',
        products: ['Peels', 'Scrubs', 'Clay Masks', 'Scalp Scrubs']
      },
      {
        number: 2,
        title: 'Deep Hydration & Glow',
        products: ['Sheet Masks', 'Body Oils', 'Neck & Décolletage Creams']
      },
      {
        number: 3,
        title: 'Hair Treatment',
        products: ['Hair Masks', 'Deep Conditioners', 'Scalp Treatments']
      },
      {
        number: 4,
        title: 'Mind & Body Relaxation',
        products: ['Bath Salts', 'Bubble Baths', 'Journals']
      }
    ],
    tips: [
      'Exfoliate before masking to maximize absorption',
      'Apply hair masks to towel-dried hair for best results',
      'Try dry brushing before bathing for improved circulation',
      'Use this routine once a week for optimal results'
    ]
  },
  'targeted-treatment': {
    id: 'targeted-treatment',
    title: 'Targeted Treatment Routine',
    description: 'Problem-Solving Care',
    icon: '🧪',
    iconBackground: 'bg-green-100',
    goal: 'Specific treatment for acne, aging, dryness, or sensitivity.',
    steps: [
      {
        number: 1,
        title: 'For Acne & Breakouts',
        products: ['Spot Treatments', 'Salicylic Acid', 'Pimple Patches']
      },
      {
        number: 2,
        title: 'For Anti-Aging & Firmness',
        products: ['Retinol', 'Peptides', 'Neck & Décolletage Creams']
      },
      {
        number: 3,
        title: 'For Hydration & Barrier Repair',
        products: ['Hyaluronic Acid', 'Ceramide Creams', 'Lip Masks']
      },
      {
        number: 4,
        title: 'For Sensitivity & Redness',
        products: ['Soothing Serums', 'Aloe Vera', 'Cica Creams']
      }
    ],
    tips: [
      'Patch test new treatments before full application',
      'Don\'t combine too many active ingredients at once',
      'Focus on one skin concern at a time for best results',
      'Be consistent with targeted treatments for at least 4-6 weeks'
    ]
  },
  'post-treatment': {
    id: 'post-treatment',
    title: 'Post-Treatment Aftercare',
    description: 'Medspa & At-Home Recovery',
    icon: '💉',
    iconBackground: 'bg-blue-100',
    goal: 'Soothe, repair and maximize results after beauty treatments.',
    steps: [
      {
        number: 1,
        title: 'Soothe & Calm',
        products: ['Thermal Water Sprays', 'Healing Balms', 'Hydrating Sprays']
      },
      {
        number: 2,
        title: 'Strengthen Skin',
        products: ['Facials & Calming Masks', 'Growth Factors', 'Stem Cell Serums']
      },
      {
        number: 3,
        title: 'Post-Injection Help',
        products: ['Cooling Lotions', 'Hyaluronic Boosters', 'Arnica Gel']
      },
      {
        number: 4,
        title: 'Post-Laser & Peels',
        products: ['Ice Rollers', 'Hydration Boosters', 'Arnica Gel']
      },
      {
        number: 5,
        title: 'Post-Hair Removal & Tattoos',
        products: ['Healing Lotions', 'Sterilized Gauze', 'Ingrown Hair Treatments']
      }
    ],
    tips: [
      'Avoid heat exposure (saunas, hot showers) after treatments',
      'Skip makeup for 24 hours after invasive procedures',
      'Increase water intake to help with healing',
      'Follow all aftercare instructions from your provider'
    ]
  },
  // Add more routine data here...
};

export default function RoutineDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [routine, setRoutine] = useState(null);
  
  useEffect(() => {
    if (id && routinesData[id]) {
      setRoutine(routinesData[id]);
    }
  }, [id]);
  
  if (!routine) {
    return <div>Loading...</div>;
  }

  return (
    <Layout activeItem="home">
      <Header 
        title={routine.title} 
        subtitle={routine.description} 
        showBackButton={true} 
      />
      
      <div className="flex-1 px-6 pt-6 pb-24">
        <GoalCard icon="🔶" text={routine.goal} />
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-4">Daily Steps</h3>
          
          {routine.steps.map((step) => (
            <StepCard
              key={step.number}
              stepNumber={step.number}
              title={step.title}
              products={step.products}
            />
          ))}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Pro Tips</h3>
          <div className="routine-card bg-white border border-gray-100 p-5">
            <ul className="space-y-3 text-black">
              {routine.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
