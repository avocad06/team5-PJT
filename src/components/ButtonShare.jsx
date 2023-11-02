import styled from "styled-components";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "../hooks";
import { useEffect } from "react";
import kakaoLogo from '../assets/IMG/kakaoLogo.png';



// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
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
	&:hover {
		background-color: #a99fee;
	}
`;
// 얘만 호버됐을 때 변화 ㅠ, URL 복사됐다고 알려주는거 필요

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
				window.Kakao.init("f993fb4fc9381681368c89d7b74992a0");
			}
		}
	}, [status]);	
    const handleKakaoButton = () => {
        window.Kakao.Link.sendScrap({
            requestUrl: currentUrl,
        });
    };

	return (
		<FlexContainer>
			<h1>공유하기</h1>
			<GridContainer>
                <FacebookShareButton url={currentUrl}>
					<FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
				</FacebookShareButton>
				<TwitterShareButton url={currentUrl}>
					<TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
				</TwitterShareButton>
				<CopyToClipboard text={currentUrl}>
					<URLShareButton>URL</URLShareButton>
				</CopyToClipboard>
                <KakaoShareButton onClick={handleKakaoButton}>
					<KakaoIcon src={kakaoLogo}></KakaoIcon>
				</KakaoShareButton>	
            </GridContainer>
		</FlexContainer>
	);
}