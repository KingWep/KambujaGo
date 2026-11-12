import { User } from "lucide-react";
import PageContainer from "../../../Components/PageContainer";

function ProfilePage() {
  return (
    <PageContainer
      icon={User}
      title="My Profile"
      description="View and manage your personal information."
    />
  );
}

export default ProfilePage;
