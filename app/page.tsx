"use client";

import { useEffect, useState } from "react";
import IncidentPlayer from "./_components/player/IncidentPlayer";
import IncidentList from "./_components/player/IncidentList";

interface Incident {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  type: string;
  cameraName: string;
  cameraId: string;
  tsStart: string;
  tsEnd: string;
  resolved: boolean;
}

export default function Home() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [cameras, setCameras] = useState([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchIncidents = async () => {
      const res = await fetch("/api/incidents?resolved=false");
      const data = await res.json();
      setIncidents(data);
      if (data.length > 0) {
        setSelectedId(data[0].id);
      }
    };

    const fetchCameras = async () => {
      const res = await fetch("/api/cameras");
      const data = await res.json();
      setCameras(data);
    };

    Promise.all([fetchIncidents(), fetchCameras()]).finally(() => {
      setLoading(false);
    });
  }, []);

  const selectedIncident = incidents.find((i) => i.id === selectedId);

  if (loading || !selectedIncident) {
    return (
      <main className="p-4 md:pr-8 text-white">
        <div className="py-5 animate-pulse space-y-4">
          <div className="grid md:grid-cols-[65%_35%] h-[calc(96vh-8rem)] gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg h-full"></div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg h-full"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col justify-between p-4 md:pr-8 text-white">
      <div className="md:pt-4 md:pb-10 grid grid-cols-1 md:grid-cols-[65%_35%] h-[calc(100vh-8rem)] w-full gap-4">
        <div className="w-auto h-full">
          <IncidentPlayer
            selectedIncident={selectedIncident}
            cameras={cameras}
          />
        </div>
        <div className="w-auto overflow-y-hidden">
          <IncidentList
            incidents={incidents}
            onSelect={(incident) => setSelectedId(incident.id)}
          />
        </div>
      </div>
    </main>
  );
}
