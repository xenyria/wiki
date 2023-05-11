import { Barricade, TrafficCone } from "@phosphor-icons/react";

export function Soon() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <TrafficCone size={64} weight="fill" />
      <h2 className="!text-2xl !mt-1">This page is not done yet!</h2>
    </div>
  );
}
