export interface Instrument {
    name: string;
    make: string;
    image?: string;
}

export const instruments: Instrument[] = [
    { name: "Power Quality Analyzer", make: "ALM 31", image: "/instrument/1alm31.jpg" },
    { name: "Three Phase Balance Load Meter", make: "Nano Vip One and Two", image: "/instrument/2nanovip.JPG" },
    { name: "Inserted type Compressed Air flow meter", make: "CS", image: "/instrument/3Inserted.jpg" },
    { name: "Compressed Air Leak Detector", make: "CS", image: "/instrument/4Ultrasonic.png" },
    { name: "Ultra Sonic Compressed Air Flow Meter", make: "Flexim | Emerson", image: "/instrument/5.jpeg" },
    { name: "Ultra Sonic Thermic Fluid Heater Flow Meter", make: "Flexim | Emerson (up to 240℃)", image: "/instrument/6flexim.jpg" },
    { name: "Ultra Sonic Steam Flow Meter", make: "Flexim | Emerson (Up to 180 ℃)", image: "/instrument/7.jpeg" },
    { name: "Ultra sonic Water Flow Meter", make: "TDS 100" },
    { name: "Flue Gas Analyser", make: "Testo 300", image: "/instrument/9Flue.jpg" },
    { name: "Thermography", make: "Testo 868", image: "/instrument/10Thermography.JPG" },
    { name: "Digital Temperature meter", make: "Testo", image: "/instrument/11 Temperature meter.png" },
    { name: "Anemometer", make: "Lutron", image: "/instrument/12 Lutron Anemometer.jpg" },
    { name: "Manometer", make: "HTC", image: "/instrument/13 HTC Manometer.jpg" },
    { name: "S type Pitot Tube", make: "3m, 1m, 0.5m", image: "/instrument/14 S type Pitot Tube.jpg" },
    { name: "Digital Pressure Gauge", make: "Testo", image: "/instrument/15 Digital Pressure gauge.png" },
    { name: "Digital Tachometer non-contact Type", make: "Kusum Meco", image: "/instrument/16 stroboscope-500x500.png" },
    { name: "Lux Meter", make: "HTC", image: "/instrument/17 HTC Lux meter.jpg" },
    { name: "TDS Meter", make: "", image: "/instrument/18 TDS Meter.jpg" },
    { name: "Hygro Meter", make: "Testo", image: "/instrument/19 Hygrometer.JPG" },
    { name: "Compressed Air Dew Point Meter", make: "CS", image: "/instrument/20 Compressed Air Dew Point Meter.jpg" },
    { name: "IR Temperature Meter Non-Contact Type", make: "HTC", image: "/instrument/21 IR Temperature Meter.jpg" },
    { name: "Earth Tester", make: "Metravi", image: "/instrument/22 Earth Tester.jpg" },
    { name: "Clamp on type Earth Tester", make: "Meco", image: "/instrument/23 meco-4680-blc-clamp-on-earth-and-leakage-current-tester.jpeg" },
    { name: "Insulation Tester", make: "Megger: 5kV", image: "/instrument/24 5kV Insulation Testor.JPG" },
    { name: "Ultrasonic Thickness Tester", make: "UTM-9", image: "/instrument/25 Ultrasonic-Thickness-Gauges..jpg" },
];
