import ClosingTimeCast from "../components/ClosingTimeCast";
import ClosingTimeGallery from "../components/ClosingTimeGallery";
import ClosingTimeHero from "../components/ClosingTimeHero";
import ClosingTimeVideos from "../components/ClosingTimeVideos";
import LaurelGrid from "../components/LaurelGrid";

const ClosingTimePage = () => {
  return (
    <>
      <ClosingTimeHero />
      <ClosingTimeVideos />
      <ClosingTimeCast />
      <ClosingTimeGallery />
      <LaurelGrid />
    </>
  );
};

export default ClosingTimePage;
