import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<a class="email" href="mailto:smiramon8@gmail.com"><i class="arrows icon-arrow-right2"></i><h2>GET IN TOUCH</h2></a>
<div>
${Button("github", "./icons/images/all/github.png", "GitHub", "https://github.com/SergioMiramon")}
</div>
`;
