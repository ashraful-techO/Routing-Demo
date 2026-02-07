import { Card } from "@/app/components/card";
import Link from "next/link";
import React from "react";

export default function ArchivedPage() {
  return (
    <Card>
      <div>Archived Notification</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
