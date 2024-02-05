import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Notification</div>
      <Link href={"/complex-dashboard/archive"}>Archive</Link>
    </Card>
  );
}
