import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';
import { FriendContext } from '../Context/FriendsProvider';

const Stats = () => {
  const { called, text, video } = useContext(FriendContext)

  const data = [
    { name: 'Text', value: text.length, fill: '#0088FE' },
    { name: 'Call', value: called.length, fill: '#00C49F' },
    { name: 'Video', value: video.length, fill: '#FFBB28' },
  ];

  return (
    <div className='container mx-auto my-10 space-y-5'>
      <h2 className='font-bold text-4xl'>Friendship Analytics</h2>
      <div className='shadow-[0_0_5px_rgba(0,0,0,0.15)] rounded-2xl p-5'>
        <h2 className='text-2xl font-semibold'>By Interaction Type</h2>
        <div className="w-full h-[400px] min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={90}
                outerRadius={150}
                paddingAngle={5}
                cornerRadius={8}
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Stats