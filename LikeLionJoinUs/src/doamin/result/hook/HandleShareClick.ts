export const handleShareClick = () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl).then(() => {
    alert("현재 주소가 복사되었습니다.");
  });

};
