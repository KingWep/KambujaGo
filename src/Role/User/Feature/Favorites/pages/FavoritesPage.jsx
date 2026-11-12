import { Heart } from "lucide-react";
import PageContainer from "../../../Components/PageContainer";

function FavoritesPage() {
  return (
    <PageContainer
      icon={Heart}
      title="My Favorites"
      description="Places, hotels and rides you have saved."
    />
  );
}

export default FavoritesPage;
