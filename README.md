# 🛡️ SecureSight

**SecureSight** is a fully responsive smart incident monitoring app built with Next.js, Tailwindcss, Typescript and Prisma. It provides a streamlined interface for security teams to review, play, and resolve camera-based security incidents in real time.

---

## 🚀 Features

- 📹 Real-time video incident playback  
- 🎯 Filter unresolved incidents instantly  
- 🎥 Camera preview thumbnails  
- ✅ One-click incident resolution  
- ⚡ Built with Next.js App Router, Prisma, Tailwind CSS  

---

## 🧱 Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS  
- **Backend**: API Routes in Next.js  
- **Database**: PostgreSQL with Prisma ORM  
- **Media Storage**: Cloudinary  
- **Deployment**: Vercel (recommended) or any Node-compatible host  

---

## 📦 API Routes

### `GET /api/incidents?resolved=false`
Returns a list of unresolved incidents, sorted from newest to oldest.

### `PATCH /api/incidents/:id/resolve`
Toggles the `resolved` status of a specific incident. Returns the updated incident object.

---

## 🧪 Seed Data (via Prisma)

Run the provided `prisma/seed.ts` file to generate demo data:

- **3+ Cameras** (e.g., Shop Floor A, Vault, Entrance)  
- **12+ Incidents** across at least **3 threat types**:  
  - Unauthorized Access  
  - Gun Threat  
  - Face Recognised  

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuj-nishad/secure-sight.git
   cd secure-sight
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**  
   Create a `.env` file in the root of the project with the following values:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Push Prisma schema & seed the database**
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

---

## 🌅 Future Improvements

- 🕒 **24-Hour SVG/Canvas Ruler**  
  Implement a visual timeline for each day:
  - Incident markers positioned accurately on the timeline  
  - A draggable scrubber  
  - Snap-to-video logic to jump to the corresponding footage  

- 🎛️ **Advanced Filtering**
  - Filter incidents by camera, threat type, time range

- 🔁 **Pagination or Infinite Scroll**
  - Better UX when dealing with large numbers of incidents

- 🧠 **AI-Powered Enhancements**
  - Integrate computer vision or anomaly detection using AI services

---

## 📸 Demo

```text
Live Demo: https://secure-sight.vercel.app
```

---

## 📄 License

MIT — you’re free to use, modify, and distribute this project.

---

## ✨ Author

Made with 💻 by [Anuj Nishad](https://github.com/anuj-nishad)  
Feel free to fork, star ⭐, or contribute!
