import Card from "@/components/card";
import Link from "next/link";

export default function ArchiveNotification() {
  return (
    <Card>
      <div>Archive Notification</div>
      <Link href={"/complex-dashboard"}>Default</Link>
    </Card>
  );
}
