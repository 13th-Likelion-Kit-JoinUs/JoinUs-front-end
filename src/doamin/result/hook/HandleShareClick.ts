export const handleShareClick = () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl).then(() => {
    alert("현재 주소가 복사되었습니다.");
  });
};

export const handleApplyClick = () => {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSeCHqMLSnvcyIrw1nOl7AD3ZPYvd-ODuKori9qgO8JaAPlHRw/viewform?usp=send_form";
};
