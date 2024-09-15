import ThemeWrapper from "@/app/theme/theme-wrapper";
import AppTopBar from "./components/app-top-bar/app-top-bar";
import ProfileContent from "./components/app-body/profile-content/profile-content";
import FooterBar from "./components/app-footer/app-footer";
import RecentUpdates from "./components/app-body/activity/our-activity/our-activity";

export default function Home() {
  return (
    <ThemeWrapper>
      <AppTopBar />

      <ProfileContent />

      <RecentUpdates />

      <FooterBar />
    </ThemeWrapper>
  );
}