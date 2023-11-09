export default function MapItem({ data }) {
  const { addressName, phone, placeName, roadAddressName, placeUrl } = data;
  return (
    <li
      style={{
        display: "flex",
        // boxShadow: "0 0 0 10px inset orange",
      }}
    >
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
        <p>{placeName}</p>
        <p>{roadAddressName}</p>
        <p>{addressName}</p>
        <p>{phone}</p>
      </div>
    </li>
  );
}
