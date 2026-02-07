import { Card } from "@/app/components/card";
import React from "react";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Card>
      <div>Notifications Page</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived </Link>
      </div>
    </Card>
  );
}
