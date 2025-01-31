export const handleShareClick = () => {
  // 현재 URL 복사
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl).then(() => {
    alert("현재 주소가 복사되었습니다.");
  });

  // 모바일 환경에서 카카오톡 공유 탭 띄우기
  if (
    window.navigator.userAgent.toLowerCase().includes("android") ||
    window.navigator.userAgent.toLowerCase().includes("iphone")
  ) {
    // 카카오톡 SDK가 로드되었는지 확인
    // if (window.Kakao) {
    //   window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY"); // 카카오 앱 키 입력
    //   window.Kakao.Link.sendDefault({
    //     objectType: "feed",
    //     content: {
    //       title: "현재 페이지를 공유합니다!",
    //       description: "카카오톡으로 공유하세요.",
    //       imageUrl: "/assets/img/likelion_logo.png", // 공유할 이미지 URL
    //       link: {
    //         webUrl: currentUrl, // 현재 URL
    //         mobileWebUrl: currentUrl,
    //       },
    //     },
    //     buttons: [
    //       {
    //         title: "카카오톡으로 공유",
    //         link: {
    //           mobileWebUrl: currentUrl,
    //           webUrl: currentUrl,
    //         },
    //       },
    //     ],
    //   });
    // }
  } else {
    // 컴퓨터 환경에서는 안내 메시지
    alert("현재 환경에서는 카카오톡 공유 기능이 지원되지 않습니다.");
  }
};
