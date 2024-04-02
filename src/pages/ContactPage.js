import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './contact.scss'; // Import CSS module

const ContactPage = () => {
    const position = [51.505, -0.09]; // Vị trí mặc định của bản đồ

    return (
        <div className={styles.contactPage}> {/* Sử dụng lớp CSS từ module */}
            <Header />
            <div className={styles.contactContent}> {/* Sử dụng lớp CSS từ module */}
                <h1>Liên hệ</h1>
                <p>Nhập thông tin của bạn vào biểu mẫu dưới đây:</p>
                <form className={styles.contactForm}> {/* Sử dụng lớp CSS từ module */}
                    <div className={styles.formGroup}> {/* Sử dụng lớp CSS từ module */}
                        <label htmlFor="name">Họ và tên:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}> {/* Sử dụng lớp CSS từ module */}
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}> {/* Sử dụng lớp CSS từ module */}
                        <label htmlFor="message">Nội dung:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Gửi</button>
                </form>
            </div>
            <div className={styles.mapContainer}> {/* Sử dụng lớp CSS từ module */}
                <MapContainer center={position} zoom={13} className={styles.map}> {/* Sử dụng lớp CSS từ module */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
