import { Settings } from "lucide-react";
import PageContainer from "../../../Components/PageContainer";

function SettingsPage() {
  return (
    <PageContainer
      icon={Settings}
      title="Settings"
      description="Manage your account and preferences."
    />
  );
}

export default SettingsPage;
