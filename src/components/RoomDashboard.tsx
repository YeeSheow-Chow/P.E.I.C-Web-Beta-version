import { Users, Fan, Lightbulb, Bolt } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

type RoomStatus = {
  occupancy: number;
  density: string;
  ac_status: string;
  light_status: string;
  power: number;
  updated_at?: string;
};

export default function RoomDashboard({ roomNumber }: { roomNumber: number }) {
  const [status, setStatus] = useState<RoomStatus>({
    occupancy: 0,
    density: 'Empty',
    ac_status: 'Off',
    light_status: 'Off',
    power: 0,
    updated_at: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/status');
        const data = await res.json();
        setStatus(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch room status:', error);
      }
    };

    fetchStatus();
    const timer = setInterval(fetchStatus, 2000);

    return () => clearInterval(timer);
  }, []);

  const occupancyPercent = Math.min((status.occupancy / 10) * 100, 100);
  const energyPercent = Math.min((status.power / 100) * 100, 100);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Room {roomNumber}
        </motion.h1>

        <p className="text-gray-400 mb-8">
          {loading ? 'Loading live room data...' : 'Live sensor data connected'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Occupancy */}
          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Human Density</h2>
            </div>
            <p className="text-3xl font-bold mb-2">{status.density}</p>
            <p className="text-gray-400 mb-4">Approx. {status.occupancy} Persons</p>
            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${occupancyPercent}%` }}
              />
            </div>
          </div>

          {/* AC */}
          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Fan className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Air Conditioning</h2>
            </div>
            <p className="text-3xl font-bold mb-2">{status.ac_status}</p>
            <p className="text-gray-400">Status from backend</p>
          </div>

          {/* Lighting */}
          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Lighting Status</h2>
            </div>
            <p className="text-3xl font-bold mb-2">{status.light_status}</p>
            <p className="text-gray-400">Status from backend</p>
          </div>

          {/* Energy */}
          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bolt className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Energy Usage</h2>
            </div>
            <p className="text-3xl font-bold mb-2">{status.power.toFixed(1)} W</p>
            <p className="text-gray-400 mb-4">Real-time power estimate</p>
            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${energyPercent}%` }}
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Last updated: {status.updated_at || 'No data yet'}
        </p>
      </div>
    </div>
  );
}
