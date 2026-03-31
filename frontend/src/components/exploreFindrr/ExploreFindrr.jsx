import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../sectionHeader/SectionHeader';
import styles from './ExploreFindrr.module.css';
import { MapPin, Navigation, Calendar } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom neon marker
const neonMarkerIcon = new L.DivIcon({
  className: styles.customMarker,
  html: `<div class="${styles.markerInner}"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const ExploreFindrr = () => {
    const navigate = useNavigate();

    // Fake coordinates for the preview
    const markers = [
        [40.7128, -74.0060],
        [40.7614, -73.9776],
        [40.7306, -73.9352],
        [40.6782, -73.9442]
    ];

    return (
        <section className={styles.findrrSection}>
            <SectionHeader 
                title="Discover Your Next Race."
                description="Find local runs, marathons, and cycling events near you with our interactive map."
            />

            <div className={styles.exploreContainer}>
                <div className={styles.exploreCard}>
                    <div className={styles.textContent}>
                        <h2 className={styles.cardTitle}>Findrr Map</h2>
                        <p className={styles.cardDescription}>
                            Whether you're looking for a 5k or an ultra-marathon, our interactive map helps you discover the best local events and races. Stop searching, start racing.
                        </p>
                        
                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}><MapPin size={20} /></div>
                                <span>Filter by Location & Distance</span>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}><Calendar size={20} /></div>
                                <span>Find Upcoming Events</span>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}><Navigation size={20} /></div>
                                <span>Direct Registration Links</span>
                            </div>
                        </div>

                        <button 
                            className={styles.exploreBtn} 
                            onClick={() => { window.scrollTo(0, 0); navigate('/findrr'); }}
                        >
                            Explore Findrr Map
                        </button>
                    </div>

                    <div className={styles.visualContent}>
                        <div className={styles.mapOverlay} />
                        <MapContainer 
                            center={[40.7128, -73.97]} 
                            zoom={11} 
                            className={styles.realMap}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            dragging={false}
                            doubleClickZoom={false}
                        >
                            <TileLayer
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            />
                            {markers.map((pos, i) => (
                                <Marker key={i} position={pos} icon={neonMarkerIcon} />
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreFindrr;
