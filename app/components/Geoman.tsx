"use client";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { FeatureGroup } from "react-leaflet";
import { GeomanControls } from "react-leaflet-geoman-v2";

const Geoman = () => {
  return (
    <FeatureGroup>
      <GeomanControls
        options={{
          position: "topleft",
          drawText: false,
        }}
        globalOptions={{
          continueDrawing: true,
          editable: false,
        }}
        onChange={(e) => console.log("onChange", e)}
      />
    </FeatureGroup>
  );
};

export default Geoman;
