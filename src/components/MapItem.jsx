import { Divider, ListItem } from "@mui/material";

export default function MapItem({ data }) {
  const { addressName, phone, placeName, roadAddressName, placeUrl } = data;
  return (
    <>
      <ListItem alignItems="flex-start">
        <div
          className="index_image"
          style={{
            flexShrink: 0,
            width: "45px",
          }}
        >
          <img />
        </div>
        <div
          className="item_info"
          style={{
            flexGrow: 1,
          }}
        >
          <p
            style={{
              color: "#000000",
              fontSize: "9px",
              lineHeight: "15px",
            }}
          >
            {placeName}
          </p>
          <p
            style={{
              color: "#000000b3",
              fontSize: "7px",
              lineHeight: "10px",
            }}
          >
            {roadAddressName}
          </p>
          <p
            style={{
              color: "#0000006e",
              fontSize: "7px",
              lineHeight: "10px",
            }}
          >
            {addressName}
          </p>
          <p
            style={{
              color: "#0000006e",
              fontSize: "7px",
              lineHeight: "10px",
            }}
          >
            {phone}
          </p>
        </div>
      </ListItem>
      <Divider />
    </>
  );
}
