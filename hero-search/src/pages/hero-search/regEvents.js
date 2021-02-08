import { $, debounce } from "@/utils";
const searchContainer = $(".search-container");
const txtKeyword = $("#txtKeyword");
function setChecked(type) {
  // 取消之前选中的
  const beforeChecked = $(".search-container .radio.checked");
  if (beforeChecked) {
    beforeChecked.classList.remove("checked");
  }
  // 再选中当前的，根据type去找元素
  const curChecked = $(`.search-container .radio[data-type="${type}"]`);

  if (curChecked) {
    curChecked.classList.add("checked");
  }
}

/**
 * 调用该方法，注册所有事件
 */
export default function (callback) {
  // 点击事件
  searchContainer.onclick = function (e) {
    if (!e.target.classList.contains("radio")) {
      return;
    }
    // 点击的是那种长得像单选框的div
    setChecked(e.target.dataset.type);
    callback && callback(e.target.dataset.type, "");
  };

  // 文本框改变事件
  txtKeyword.oninput = debounce(function () {
    setChecked("all");
    callback && callback("all", this.value.trim());
  });
}
