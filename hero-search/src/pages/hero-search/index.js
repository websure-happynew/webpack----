import "./index.pcss";
import createTypes from "./createTypes";
import regEvents from "./regEvents";
import search from "./search";
import { getHeros } from "@/api/hero";
import createList from "@/pages/common/item-list";
createTypes(); // 创建英雄类型区域
async function init() {
  const heros = await getHeros();
  const result = search(heros, "all", "");
  createList(result);
  regEvents(function (type, key) {
    const result = search(heros, type, key);
    createList(result);
  }); // 注册各种事件
}
init();
