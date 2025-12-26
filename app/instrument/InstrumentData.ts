export interface Instrument {
    name: string;
    make: string;
    image?: string;
}

export const instruments: Instrument[] = [
    { name: "Power Quality Analyzer", make: "ALM 31", image: "/instrument/1alm31.jpg" },
    { name: "Three Phase Balance Load Meter", make: "Nano Vip One and Two", image: "/instrument/2-nanovip.jpg" },
    { name: "Inserted type Compressed Air flow meter", make: "CS", image: "/instrument/img-3.png" },
    { name: "Compressed Air Leak Detector", make: "CS", image: "/instrument/flexim-ultrasonic-compressed-air.png" },
    { name: "Ultra Sonic Compressed Air Flow Meter", make: "Flexim | Emerson", image: "/instrument/flexim-compressed-air-flow-meter.jpg" },
    { name: "Ultra Sonic Thermic Fluid Heater Flow Meter", make: "Flexim | Emerson (up to 240℃)", image: "/instrument/flexim-ultrasonic-water-flow-meter.jpg" },
    { name: "Ultra Sonic Steam Flow Meter", make: "Flexim | Emerson (Up to 180 ℃)", image: "/instrument/flexim-steam-flow-meter.jpg" },
    { name: "Ultra sonic Water Flow Meter", make: "TDS 100", image: "/instrument/flexim-ultrasonic-water-flow-meter.jpg" },
    { name: "Flue Gas Analyser", make: "Testo 300", image: "/instrument/testo-300-flue-gas-analyser.jpg" },
    { name: "Thermography", make: "Testo 868s", image: "/instrument/testo-868s-thermography.jpg" },
    { name: "Digital Temperature meter", make: "Testo", image: "/instrument/11-temperature-meter.png" },
    { name: "Anemometer", make: "Lutron", image: "/instrument/12-lutron-anemometer.jpg" },
    { name: "Manometer", make: "HTC", image: "/instrument/13-htc-manometer.jpg" },
    { name: "S type Pitot Tube", make: "3m, 1m, 0.5m", image: "/instrument/14-s-type-pitot-tube.jpg" },
    { name: "Digital Pressure Gauge", make: "Testo", image: "/instrument/15-digital-pressure-gauge.png" },
    { name: "Digital Tachometer non-contact Type", make: "Kusum Meco", image: "/instrument/16-stroboscope-500x500.png" },
    { name: "Lux Meter", make: "HTC", image: "/instrument/17-htc-lux-meter.jpg" },
    { name: "TDS Meter", make: "", image: "/instrument/tds-meter.png" },
    { name: "Hygro Meter", make: "Testo", image: "/instrument/testo-hygrometer.jpg" },
    { name: "Compressed Air Dew Point Meter", make: "CS", image: "/instrument/20-compressed-air-dew-point-meter.jpg" },
    { name: "IR Temperature Meter Non-Contact Type", make: "HTC", image: "/instrument/21-ir-temperature-meter.jpg" },
    { name: "Earth Tester", make: "Metravi", image: "/instrument/22-earth-tester.jpg" },
    { name: "Clamp on type Earth Tester", make: "Meco", image: "/instrument/23-meco-4680-blc-clamp-on-earth-and-leakage-current-tester.jpeg" },
    { name: "Insulation Tester", make: "Megger: 5kV", image: "/instrument/24-5kv-insulation-testor.jpg" },
    { name: "Ultrasonic Thickness Tester", make: "UTM-9", image: "/instrument/25-ultrasonic-thickness-gauges.jpg" },
];
