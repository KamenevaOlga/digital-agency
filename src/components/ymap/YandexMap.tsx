"use client";
import React, { useState, useEffect } from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

interface YandexMapProps {
  showMap: boolean;
  center?: [number, number];
  zoom?: number;
  apiKey?: string;
}

const YandexMap = ({
  showMap,
  center = [55.75, 37.57],
  zoom = 10,
  apiKey = process.env.NEXT_PUBLIC_YMAPS_API_KEY,
}: YandexMapProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setError("Timeout: the map didn't load");
        setIsLoading(false);
      }
    }, 10000);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  useEffect(() => {
    if (!showMap) {
      setError(null);
      setIsLoading(false);
      setApiReady(false);
      return;
    }

    if (!apiKey) {
      setError("API-key not found");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    setApiReady(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [showMap, apiKey]);

  if (!showMap) return null;

  return (
    <div className="yandex-map-wrapper">
      {error && (
        <div className="error-state">
          {error}
          <button className="retry-button" onClick={() => setError(null)}>
            Retry
          </button>
        </div>
      )}
      {isLoading && !error && (
        <div className="loading-container">
          <div className="loading-state "></div>
          <p>Loading...</p>
        </div>
      )}
      {!isLoading && !error && (
        <div className="map-container">
          <YMaps
            query={{
              lang: "en_US",
              apikey: apiKey,
            }}
          >
            <Map
              defaultState={{ center, zoom }}
              width="100%"
              height="300px"
              onLoad={() => setIsLoading(false)}
            />
          </YMaps>
        </div>
      )}
    </div>
  );
};

export default YandexMap;
