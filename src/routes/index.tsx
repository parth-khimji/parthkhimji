import { createFileRoute } from "@tanstack/react-router";
import { StudioHome } from "@/components/site/studio-home";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <StudioHome />;
}
