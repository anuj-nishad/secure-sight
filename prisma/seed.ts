import { db } from "../lib/db.ts";
import { cameras } from "../data/cameras.ts";
import { incidents } from "../data/incidents.ts";

async function createCamera() {
  await Promise.all(
    cameras.map((camera) =>
      db.camera.create({
        data: {
          name: camera.name,
          location: camera.location,
        },
      })
    )
  );
}

async function createIncident() {
  await Promise.all(
    incidents.map(async (incident) => {
      const camera = await db.camera.findFirst({
        where: {
          location: incident.location,
        },
      });

      if (!camera) {
        console.warn(`Camera not found`);
        return;
      }

      await db.incident.create({
        data: {
          cameraId: camera.id,
          location: incident.location,
          thumbnailUrl: incident.thumbnailUrl,
          videoUrl: incident.videoUrl,
          type: incident.type,
          tsStart: new Date(incident.tsStart),
          tsEnd: new Date(incident.tsEnd),
          resolved: incident.resolved,
        },
      });
    })
  );
}

async function seed() {
  await createCamera();
  await createIncident();
}

seed()
  .then(() => {
    console.log("✅ All seeding done.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  });
