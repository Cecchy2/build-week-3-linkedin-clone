import HomeAsideLeft from "./HomeAsideLeft";
import HomeAsideRight from "./HomeAsideRight";
import HomeMain from "./HomeMain";

const HomePage = () => {
  return (
    <div>
      <HomeAsideLeft></HomeAsideLeft>
      <HomeMain></HomeMain>
      <HomeAsideRight></HomeAsideRight>
    </div>
  );
};

export default HomePage;
