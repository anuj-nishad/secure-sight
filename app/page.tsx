"use client"

import IncidentPlayer from "./_components/player/IncidentPlayer";
import IncidentList from "./_components/player/IncidentList";
import { useState } from "react";

const incidents = [
  {
    id: "1",
    thumbnailUrl: "/thumbs/thumb1.png",
    videoUrl: "/clips/cam1.mp4",
    type: "Unauthorized Access",
    cameraName: "Entrance Gate",
    tsStart: "2025-07-22T08:15:00Z",
    tsEnd: "2025-07-22T08:17:30Z",
    resolved: false,
  },
  {
    id: "2",
    thumbnailUrl: "/thumbs/thumb2.png",
    videoUrl: "/clips/cam2.mp4",
    type: "Gun Threat",
    cameraName: "Vault",
    tsStart: "2025-07-22T10:30:00Z",
    tsEnd: "2025-07-22T10:32:00Z",
    resolved: false,
  },
  {
    id: "3",
    thumbnailUrl: "/thumbs/thumb4.png",
    videoUrl: "/clips/cam3.mp4",
    type: "Face Recognised",
    cameraName: "Parking Lot",
    tsStart: "2025-07-21T11:12:00Z",
    tsEnd: "2025-07-21T11:15:00Z",
    resolved: false,
  },
  {
    id: "4",
    thumbnailUrl: "/thumbs/thumb3.png",
    videoUrl: "/clips/cam4.mp4",
    type: "Face Recognised",
    cameraName: "Main Area",
    tsStart: "2025-07-11T11:12:00Z",
    tsEnd: "2025-07-12T11:15:00Z",
    resolved: false,
  },
];

export default function Home() {

  const [selectedIncident, setSelectedIncident] = useState(incidents[0]);
  
  return (
    <>
      <main className="flex flex-col justify-between p-4 gap-4 bg-gray-950 text-white">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] w-full gap-4">
        <div className="w-auto">
          <IncidentPlayer incidents={incidents} selectedIncident={selectedIncident}/>
        </div>
        <div className="w-auto h-full">
          <IncidentList incidents={incidents.filter(i => !i.resolved)} onSelect={setSelectedIncident} />
        </div>
        </div>
      </main>
    </>
  );
}
