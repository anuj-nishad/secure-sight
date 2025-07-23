interface Cameras{
  id: string;
  name: string;
  thumbnailUrl: string;
}

interface SelectedIncident{
  id:string;
  videoUrl: string;
  cameraId: string;
}

export default function IncidentPlayer({ selectedIncident,cameras }:{
  cameras: Cameras[],
  selectedIncident: SelectedIncident;
}) {

  return (
    <div className="p-4 backdrop-blur-md bg-white/8 rounded-lg border border-white/20 flex flex-col gap-4 text-white">
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
        {cameras.map((camera) => (
          <button
            key={camera.id}
            className={`border-2 rounded-md overflow-hidden bg-white/20 ${
              camera.id === selectedIncident.cameraId
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <img
              src={camera.thumbnailUrl}
              className="w-24 h-14 object-cover"
            />
            <div className="p-1 text-center font-semibold text-xs">{camera.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
