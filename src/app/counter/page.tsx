import React from "react";
import Counter from "./counter";

export async function generateMetadata() {
  return {
    title: "Counter Page",
    description: "This is Counter Page",
  };
}

export default function CounterPage() {
  return (
    <div>
      <Counter />
    </div>
  );
}
