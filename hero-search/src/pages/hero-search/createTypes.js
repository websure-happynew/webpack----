import { getHeroTypes } from "@/api/hero";
import { $, $$$ } from "@/utils";
const heroTypes = $("#heroTypes");
/**
 * 为英雄类型区域，创建元素
 */
export default function () {
  const types = getHeroTypes();
  for (const t of types) {
    const div = $$$("div");
    div.innerText = t.name;
    div.className = "radio";
    div.dataset.type = t.id;
    heroTypes.appendChild(div);
  }
}
