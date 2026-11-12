import { Hotel } from "lucide-react";
import PageContainer from "../../../Components/PageContainer";

function HotelsPage() {
  return (
    <PageContainer
      icon={Hotel}
      title="Hotels"
      description="Find comfortable places to stay for every budget."
    />
  );
}

export default HotelsPage;
