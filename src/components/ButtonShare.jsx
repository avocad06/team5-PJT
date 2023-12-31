import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "../hooks";
import { useEffect, useState } from "react";
import kakaoLogo from "../assets/IMG/kakaoLogo.png";

import SuccessCopySnackbar from "./SuccessCopySnackbar";

// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 315px;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 140px);
  grid-column-gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 38px;
  margin-bottom: 16px;
  place-items: center;
`;

// Style을 적용한 URL 버튼 컴포넌트 추가
const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
  text-align: center;
  &:hover {
    background-color: #a99fee;
  }
`;

//카카오 버튼 만들기
const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export default function ShareButton() {
  // url 클립보드에 복사되었을 때, 알려주는 toast 상태 값
  const [successToastOpen, setSuccessToastOpen] = useState(false);

  const currentUrl = window.location.href;

  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init(`${import.meta.env.VITE_KAOKAO_API_KEY}`);
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl:
        "http://moheyoubucket.s3-website.ap-northeast-2.amazonaws.com/",
    });
  };

  const handleCopySuccess = () => {
    setSuccessToastOpen(true);
  };

  return (
    <FlexContainer>
      <h1>내 결과 공유하기</h1>
      <GridContainer>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        <CopyToClipboard text={currentUrl} onCopy={handleCopySuccess}>
          <URLShareButton>URL</URLShareButton>
        </CopyToClipboard>
        <SuccessCopySnackbar
          open={successToastOpen}
          onClose={() => setSuccessToastOpen(false)}
        />
        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src={kakaoLogo}></KakaoIcon>
        </KakaoShareButton>
      </GridContainer>
    </FlexContainer>
  );
}
