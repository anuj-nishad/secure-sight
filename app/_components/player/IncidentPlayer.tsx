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

interface SelectedIncident{
  id:string;
  videoUrl: string;
}

export default function IncidentPlayer({ incidents,selectedIncident }:{
  incidents: Incident[],
  selectedIncident: SelectedIncident;
}) {

  return (
    <div className="p-4 bg-gray-800 rounded-lg flex flex-col gap-4 text-white">
      <h2 className="text-xl font-semibold">Incident Player</h2>
      <video
        key={selectedIncident.id}
        src={selectedIncident.videoUrl}
        muted
        controls
        autoPlay
        loop
        className="w-full aspect-video rounded-md bg-black"
      />
      <div className="flex gap-4 overflow-x-auto">
        {incidents.map((incident) => (
          <button
            key={incident.id}
            className={`border-2 rounded-md overflow-hidden ${
              incident.id === selectedIncident.id
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <video
              src={incident.videoUrl}
              className="w-24 h-14 object-cover"
              muted
              autoPlay
              loop
            />
            <div className="p-1 text-center text-xs">{incident.cameraName}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
