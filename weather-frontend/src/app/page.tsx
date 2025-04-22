import WeatherSearch from "@/components/WeatherSearch";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Weather Forecast</h1>
      <WeatherSearch />
    </main>
  );
}
