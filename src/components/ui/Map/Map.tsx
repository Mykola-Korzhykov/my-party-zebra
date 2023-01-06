import { FC, useState, useEffect, useRef } from 'react';

import mapboxgl from 'mapbox-gl';

import IMap from '@shared/interfaces/Data/Global/IMap';

import 'mapbox-gl/dist/mapbox-gl.css'; 
import styles from './Map.module.scss';

mapboxgl.accessToken = process.env.MAP_ACCESS_TOKEN;

type Props = {
    mapData: IMap
}

const Map: FC<Props> = ({mapData}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    
    const [lng, setLng] = useState(mapData.lng);
    const [lat, setLat] = useState(mapData.lat);
    const [zoom, setZoom] = useState(mapData.zoom);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (<div ref={mapContainer} className={styles.container} />);
}
 
export default Map;