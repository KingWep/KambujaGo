import { CalendarCheck } from "lucide-react";
import PageContainer from "../../../Components/PageContainer";

function MyBookingsPage() {
  return (
    <PageContainer
      icon={CalendarCheck}
      title="My Bookings"
      description="Your upcoming and past reservations will appear here."
    />
  );
}

export default MyBookingsPage;
