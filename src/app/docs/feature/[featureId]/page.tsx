import React from "react";

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ featureId: string }>;
}) {
  const { featureId } = await params;
  return <div>Feature Page {featureId}</div>;
}
