import {
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPowerbi,
  SiTableau,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiWordpress
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: (
    <SiJavascript
      size={iconSize}
      color="default"
    />
  ),
  "Jupyter": (
    <SiJupyter
      size={iconSize}
      color="default"
    />
  ),
  "Pandas": (
    <SiPandas
      size={iconSize}
      color="default"
    />
  ),
  "Next.js": (
    <SiNextdotjs
      size={iconSize}
      color="default"
    />
  ),
  "React.js": (
    <SiReact
      size={iconSize}
      color="default"
    />
  ),
  TailwindCSS: (
    <SiTailwindcss
      size={iconSize}
      color="default"
    />
  ),
  WordPress: <SiWordpress size={iconSize} />,
  Vite: (
    <SiVite
      size={iconSize}
      color="default"
    />
  ),
  "Node.js": (
    <SiNodedotjs
      size={iconSize}
      color="default"
    />
  ),
  "Numpy": (
    <SiNumpy
      size={iconSize}
      color="default"
    />
  ),
  "PowerBI": (
    <SiPowerbi
      size={iconSize}
      color="default"
    />
  ),
  "Tableau": (
    <SiTableau
      size={iconSize}
      color="default"
    />
  ),
  Postman: (
    <SiPostman
      size={iconSize}
      color="default"
    />
  ),
  HTML5: (
    <SiHtml5
      size={iconSize}
      color="default"
    />
  ),
  CSS: (
    <SiCss3
      size={iconSize}
      color="default"
    />
  ),
  Bootstrap: (
    <SiBootstrap
      size={iconSize}
      color="default"
    />
  ),
  Express: (
    <SiExpress
      size={iconSize}
      color="default"
    />
  ),
  Git: (
    <SiGit
      size={iconSize}
      color="default"
    />
  ),
  Github: (
    <SiGithub
      size={iconSize}
      color="default"
    />
  ),
  Jquery: (
    <SiJquery
      size={iconSize}
      color="default"
    />
  ),
  Python: (
    <SiPython
      size={iconSize}
      color="default"
    />
  )
};
