"use client";

import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import { TriangleAlert } from "lucide-react";

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
  const [pendingId, setPendingId] = useState<string | null>(null);

  const toggleResolved = async (id: string) => {
    setPendingId(id);
    await fetch(`/api/incidents/${id}/resolve`, {
      method: "PATCH",
    });
    setPendingId(null);
    window.location.reload();
  };

  return (
    <div className="p-4 backdrop-blur-md bg-gray-900/45 rounded-lg border border-white/20 text-white h-full">
      <div className="flex gap-x-3 items-center mb-4 mt-2 ml-2">
        <TriangleAlert className="text-red-500"/>
        <h2 className="text-xl font-semibold">{incidents.length} Unresolved Incidents</h2>
      </div>
      <ul className="space-y-3 overflow-y-scroll h-full pb-12">
        {incidents.map((incident) => (
          <li
            key={incident.id}
            className="flex gap-3 items-center p-2 rounded-md cursor-pointer hover:bg-gray-700"
            onClick={() => {
              onSelect(incident);
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
              onClick={(e) => {
                e.stopPropagation();
                toggleResolved(incident.id);
              }}
              disabled={pendingId === incident.id}
              className={cn(
                "px-6 py-2 mr-6 rounded-md text-sm font-medium transition-all",
                incident.resolved
                  ? "bg-gray-700 hover:bg-gray-800"
                  : "bg-green-600 hover:bg-green-700",
                pendingId === incident.id && "opacity-50 cursor-not-allowed bg-gray-700 hover:bg-gray-800"
              )}
            >
              {pendingId === incident.id
                ? "Resolving..."
                : incident.resolved
                  ? "Resolved"
                  : "Resolve"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
