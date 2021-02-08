import "./index.pcss";
import { $ } from "@/utils";
const ul = $(".hero-list");
export default function (heros) {
  let html = ``;
  console.log(heros);
  for (const h of heros) {
    html += `<li title="${h.cname}">
    <a target="_blank" href="https://pvp.qq.com/web201605/herodetail/${h.ename}.shtml">
      <img
        src="http://game.gtimg.cn/images/yxzj/img201606/heroimg/${h.ename}/${h.ename}.jpg"
        alt="${h.cname}"
      />
      <p>${h.cname}</p>
    </a>
  </li>`;
  }
  ul.innerHTML = html;
}
