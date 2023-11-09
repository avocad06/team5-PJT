/* global kakao */

import React, { useEffect, useState, useRef } from "react";
import { useKakaoLoader, Map, MapMarker } from "react-kakao-maps-sdk";
import MapItem from "./MapItem";

export default function KakaoMap(props) {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAOKAO_API_KEY,
    libraries: ["services"],
  });

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("청주 도서관", (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);
        setResultData(
          data.map((item) => {
            const {
              id,
              address_name: addressName,
              phone,
              place_name: placeName,
              road_address_name: roadAddressName,
              place_url: placeUrl,
            } = item;
            return {
              id,
              addressName,
              phone,
              placeName,
              roadAddressName,
              placeUrl,
            };
          })
        );

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "350px",
        position: "relative",
      }}
      level={3}
      onCreate={setMap}
    >
      <ul
        style={{
          position: "absolute",
          boxShadow: "0 0 0 4px inset orange",
          maxWidth: "400px",
          overflowY: "scroll",
          maxHeight: "100%",
        }}
      >
        {resultData.map((data) => (
          <MapItem data={data} key={data.id} />
        ))}
      </ul>
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
            <div style={{ color: "#000" }}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}
