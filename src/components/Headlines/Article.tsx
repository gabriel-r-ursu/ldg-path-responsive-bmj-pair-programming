import { $Article } from "../../styles/HeadlinesStyles/$Article";
import Border from "../../styles/HeadlinesStyles/Border.styled";

const Article: React.FC = (): JSX.Element => {
  return (
    <$Article>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit
        quo dolores perspiciatis iure nesciunt praesentium, nam harum soluta.
        Amet?
      </span>
      <Border />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        eligendi minima quisquam fuga beatae repellat?
      </span>
    </$Article>
  );
};

export default Article;
