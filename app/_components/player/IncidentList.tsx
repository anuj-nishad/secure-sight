"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface Incident {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  type: string;
  cameraName: string;
  tsStart: string;
  tsEnd: string;
  resolved: boolean;
}

interface IncidentListProps {
  incidents: Incident[];
  onSelect: (incident: Incident) => void;
}

export default function IncidentList({ incidents, onSelect }: IncidentListProps) {

  const [selectedIncident, setSelectedIncident] = useState<Incident>(incidents[0]);

  return (
    <div className="p-4 bg-gray-900 rounded-lg h-full overflow-y-auto text-white">
      <h2 className="text-xl font-semibold mb-4">Incidents</h2>
      <ul className="space-y-3">
        {incidents.map((incident) => (
          <li
            key={incident.id}
            className={cn(`flex gap-3 items-center p-2 rounded-md cursor-pointer hover:bg-gray-700`,
              selectedIncident.id === incident.id && "bg-gray-700"
            )}
            onClick={() =>{
              onSelect(incident)
              setSelectedIncident(incident)
            }}
          >
            <img
              src={incident.thumbnailUrl}
              alt={`${incident.type} thumbnail`}
              className="w-20 h-14 rounded-md object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">{incident.type}</p>
              <p className="text-sm text-gray-300">{incident.cameraName}</p>
              <p className="text-xs text-gray-400">
                {new Date(incident.tsStart).toLocaleString()} -{" "}
                {new Date(incident.tsEnd).toLocaleString()}
              </p>
            </div>
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium bg-green-600 hover:bg-green-700
              `}
            >Resolve
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
