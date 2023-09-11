import "./Button.css";
export const Button = (id, icon, text, href) => `
<button class="icons">
<a id=${id} href=${href} target="blank">
<img src=${icon} alt='${text} icon'/>
</a>
</button>
`;
