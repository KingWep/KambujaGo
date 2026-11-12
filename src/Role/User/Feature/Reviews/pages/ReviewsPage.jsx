import { Star } from "lucide-react";
import PageContainer from "../../../Components/PageContainer";

function ReviewsPage() {
  return (
    <PageContainer
      icon={Star}
      title="My Reviews"
      description="Reviews you have written about your trips."
    />
  );
}

export default ReviewsPage;
