import { FileText, Zap, Activity, Wind, AlertTriangle, Settings, Thermometer, Droplets, Globe, PieChart, Search } from "lucide-react";

export const services = [
    {
        id: "detailed-energy-audit",
        title: "Detailed Energy Audit",
        icon: FileText,
        description: "Energy Audit is defined as “the verification, monitoring and analysis of use of energy including submission of technical report containing recommendations for improving energy efficiency with cost benefit analysis and an action plan to reduce energy consumption”. It builds on the principle \"you can't manage what you don't measure\". It essentially combines the principles of energy use and statistics.",
        image: "/services/1.png",
        sections: [
            {
                type: "list",
                title: "Type of Detailed Energy Audit",
                items: [
                    "Electrical Energy Audit",
                    "Thermal Energy Audit",
                    "Comprehensive Energy Audit",
                    "Mandatory Energy Audit",
                    "Statutory Energy Audit as per the Chief Electrical Inspector",
                    "Energy Audit as per the ISO 50001",
                    "Energy Audit as per the Responsible Care (RC) certification Compliance in Chemical Industry"
                ]
            },
            {
                type: "image",
                title: "Which Parameter Monitoring in Energy Audit?",
                image: "/services/detail1sub1.jpeg",
                alt: "Parameter Monitoring Diagram"
            },
            {
                type: "key-value",
                title: "Essential Elements of Energy Auditing",
                items: [
                    { key: "Recording", value: "Measuring and recording energy consumption" },
                    { key: "Analyzing", value: "Correlating energy consumption to a measured output, such as production quantity" },
                    { key: "Comparing", value: "Comparing energy consumption to an appropriate standard or benchmark" },
                    { key: "Setting Targets", value: "Setting targets to reduce or control energy consumption" },
                    { key: "Monitoring", value: "Comparing energy consumption to the set target on a regular basis" },
                    { key: "Reporting", value: "Reporting the results including any variances from the targets which have been set" },
                    { key: "Controlling", value: "Implementing management measures to correct any variances, which may have occurred." }
                ]
            },
            {
                type: "nested-content",
                title: "Scope of Work",
                sections: [
                    {
                        subtitle: "Analysis of the Electricity bills",
                        items: [
                            "Analysis of the different section of the electricity bills.",
                            "Study of the fixed charges and variable charges and comments on the same.",
                            "Calculation of the Specific Energy Consumption and comment on the same.",
                            "Calculation of the load factor of the plant.",
                            "Comments on the contract demand and suggestions to reduce them."
                        ]
                    },
                    {
                        subtitle: "Electrical Distribution Networks",
                        items: [
                            "Transformers & Distribution Network:",
                            "Performance evaluation of the transformers.",
                            "Studies of rationalization of transformers if more than two are present.",
                            "Carrying out 24 hr load survey for the electrical network and remarks on the quality of the power supply.",
                            "Cables:",
                            "Calculation of the cable losses for the major loads.",
                            "Suggesting methods to reduce the losses and optimizing their use."
                        ]
                    },
                    {
                        subtitle: "Power factor",
                        items: [
                            "Measurement of power factor at PCC, MCC and the Major load Centers.",
                            "Suggesting methods to improve the present power factor."
                        ]
                    },
                    {
                        subtitle: "Metering and Monitoring Status",
                        items: [
                            "Review of existing metering system of the plant.",
                            "Suggesting need and methods to improve the metering system, if required."
                        ]
                    },
                    {
                        subtitle: "Electrical Equipment’s",
                        items: [
                            "Measurement of all the major electrical parameters viz. voltage, current, KW, Power factor, frequency of all major electrical equipment’s.",
                            "Determining the loading of the major motive loads of the plant.",
                            "Calculation of Specific Energy Consumption for the major loads.",
                            "Suggesting methods to eradicate abnormalities if any."
                        ]
                    },
                    {
                        subtitle: "Other Scope as per the plant",
                        items: []
                    }
                ]
            }
        ],
        content: []
    },
    {
        id: "energy-conservation",
        title: "Energy Conservation",
        icon: Zap,
        description: "Energy conservation is the effort made to reduce the consumption of energy by using less of an energy service. This can be achieved either by using energy more efficiently (using less energy for a constant service) or by reducing the amount of service used (for example, by driving less).",
        image: "/services/2.png", // Using load meter as relevant image
        sections: [
            {
                type: "text",
                content: [
                    "Energy conservation is a part of the concept of Eco-sufficiency. Energy conservation measures (ECMs) in industry reduce the need for energy services and can result in increased environmental quality, national security, personal financial security and higher savings."
                ]
            },
            {
                type: "list",
                items: [
                    "Guaranteed Energy Saving Project",
                    "Percentage Basis Energy Saving Project",
                    "Fixed cost Energy Saving Project",
                    "Implementation of Energy Saving Project",
                    "Technology Upgradation Energy Saving Project",
                    "Energy Efficiency Wise Energy Saving Project",
                    "Alternative Fuel Selection Energy Saving Projects"
                ]
            },
            {
                type: "text",
                content: [
                    "Benchmarking of energy consumption internally (historical / trend analysis) and externally (across similar industries) are two powerful tools for performance assessment and logical evolution of avenues for improvement.",
                    "Historical data well documented helps to bring out energy consumption and cost trends month-wise / day-wise.",
                    "Trend analysis of energy consumption, cost, relevant production features, specific energy consumption, help to understand effects of capacity utilization on energy use efficiency and costs on a broader scale."
                ]
            }
        ],
        content: []
    },
    {
        id: "harmonic-analysis",
        title: "Harmonic Analysis",
        icon: Activity,
        description: "Study and mitigation of harmonic distortions in power systems.",
        image: "/services/3.png", // Power Analyzer is perfect here
        content: [
            "Measurement of Total Harmonic Distortion (Voltage & Current).",
            "Analysis up to 50th order harmonics compliant with IEEE 519 standards.",
            "Design of Active/Passive filters to mitigate capacitor failure and motor overheating."
        ]
    },
    {
        id: "compressor-audit",
        title: "Compressor Air Flow Audit",
        icon: Wind,
        description: "Optimization of compressed air generation and usage.",
        image: "/services/4.png", // Compressed air flow meter
        content: [
            "Measurement of specific energy consumption (kW/CFM).",
            "Pressure profile analysis of the entire network.",
            "Identification of artificial demand and leakages."
        ]
    },
    {
        id: "leakage-audit",
        title: "Ultrasonic Air Leakage Audit",
        icon: Search,
        description: "Detection and quantification of costly air leaks.",
        image: "/services/5.png", // Ultrasonic device
        content: [
            "Online identification of leaks using advanced ultrasonic detectors.",
            "Quantification of leakage in CFM and financial loss estimation.",
            "Tagging and reporting for immediate maintenance action."
        ]
    },
    {
        id: "power-plant-audit",
        title: "Power Plant Audit",
        icon: Settings,
        description: "Performance testing of Captive, Cogen, and Waste Heat plants.",
        image: "/services/6.png", // Flue gas relevant for power plant
        content: [
            "Boiler Efficiency testing as per ASME PTC 4.",
            "Turbine Heat Rate and Cylinder Efficiency analysis (ASME PTC 6).",
            "Assessment of Condenser and Cooling Tower effectiveness."
        ]
    },
    {
        id: "boiler-furnace",
        title: "Boiler & Furnace Study",
        icon: Thermometer,
        description: "Efficiency analysis of thermal energy generation.",
        image: "/services/7.png",
        content: [
            "Flue gas analysis for Excess Air and Stack Losses.",
            "Heat and Mass balance calculation.",
            "Assessment of radiation, convection, and blow down losses."
        ]
    },
    {
        id: "flow-measurement",
        title: "Flow Measurement",
        icon: Droplets,
        description: "Non-invasive ultrasonic flow measurement for various fluids.",
        image: "/services/8.png", // Flexim meter
        hasSubTabs: true,
        subTabs: [
            { id: "steam", label: "Steam Flow", content: "Measurement up to 180°C. Essential for balancing steam distribution and calculating boiler efficiency.", image: "/instrument/7.jpeg" },
            { id: "thermic", label: "Thermic Fluid", content: "Measurement up to 240°C. Critical for heat exchangers and process heating efficiency.", image: "/instrument/6flexim.jpg" },
            { id: "water", label: "Water", content: "For pumps, chillers, and borewells. Non-invasive clamp-on method avoids pipe cutting.", image: "/instrument/5.jpeg" },
            { id: "brine", label: "Brine Chiller", content: "Measurement down to -30°C. Vital for pharmaceutical and chemical low-temp processes.", image: "/instrument/5.jpeg" }, // Using generic flexim if specific brine img missing
        ]
    },
    {
        id: "process-heat",
        title: "Process Heat Mass Balance",
        icon: Activity,
        description: "Optimization of process streams and energy flows.",
        image: "/services/9.png", // Thermography relates to heat
        content: [
            "Detailed mapping of Mass and Energy inputs and outputs.",
            "Identification of waste heat recovery potential.",
            "Troubleshooting of process bottlenecks."
        ]
    },
    {
        id: "cooling-tower",
        title: "Cooling Tower Study",
        icon: Wind,
        description: "Performance assessment of cooling systems.",
        image: "/services/10.png", // Anemometer relates to air flow in CT
        content: [
            "Calculation of Range, Approach, and Effectiveness.",
            "L/G Ratio analysis.",
            "Optimization of fan blade angles and blow down rates."
        ]
    },
    {
        id: "chiller",
        title: "Chiller Performance",
        icon: Thermometer,
        description: "Evaluation of specific power consumption (kW/TR).",
        image: "/services/11.png",
        content: [
            "Estimation of actual tonnage delivered vs design.",
            "Calculation of COP and EER.",
            "Recommendations for setpoint optimization and maintenance."
        ]
    },
    {
        id: "lighting",
        title: "Lighting System",
        icon: Zap,
        description: "Efficiency improvement of industrial lighting.",
        image: "/services/12.png",
        content: [
            "Lux level measurement in various work zones.",
            "Optimization of lighting layout.",
            "Replacement strategy with energy-efficient LED fixtures."
        ]
    },
    {
        id: "thermography",
        title: "Thermography Study",
        icon: Thermometer,
        description: "Non-contact hotspot detection.",
        image: "/services/13.png",
        content: [
            "Inspection of Electrical Panels for loose connections.",
            "Insulation survey of Boilers, Steam lines, and Chillers.",
            "Prevention of fire hazards and breakdown maintenance."
        ]
    },
    {
        id: "steam-trap",
        title: "Steam Trap Audit",
        icon: Droplets,
        description: "Identification of leaking or plugged traps.",
        image: "/services/14.png", // Thermography is used for traps
        content: [
            "Ultrasonic and Thermal inspection of steam traps.",
            "Quantification of steam loss.",
            "Recommendation for trap replacement or repair."
        ]
    },
    {
        id: "pumping",
        title: "Pumping System Study",
        icon: Activity,
        description: "Hydraulic and electrical efficiency analysis.",
        image: "/services/15.png", // Power measurement is key
        content: [
            "Simultaneous measurement of Flow, Head, and Power.",
            "Operating point analysis on Pump Curve.",
            "VFD feasibility study and impeller trimming."
        ]
    },
    {
        id: "fan",
        title: "Fan Study",
        icon: Wind,
        description: "Air handling system optimization.",
        image: "/services/16.png",
        content: [
            "Performance assessment of ID/FD/PA fans and Blowers.",
            "Efficiency comparison against design.",
            "Damper vs VFD control cost-benefit analysis."
        ]
    },
    {
        id: "carbon",
        title: "Carbon Verification",
        icon: Globe,
        description: "Validation of carbon credits (UCR).",
        image: "/services/17.png", // Placeholder or use generic green image
        content: [
            "Verification for Renewable Energy projects (Solar, Wind).",
            "Energy Efficiency project validation.",
            "Waste Heat Recovery and Green Hydrogen projects."
        ]
    },
    {
        id: "arc-flash",
        title: "Electrical Arc Flash Study",
        icon: AlertTriangle,
        description: "Safety assessment and boundary determination.",
        image: "/services/18.png", // Safety/Electrical related
        content: [
            "Calculation of Incident Energy and Flash Boundary.",
            "Determination of required PPE (Hazard Risk Category).",
            "Compliance with safety standards to prevent accidents."
        ]
    },
    {
        id: "motor",
        title: "Motor Efficiency Study",
        icon: Settings,
        description: "Analysis of motor loading and losses.",
        image: "/services/19.png",
        content: [
            "Evaluation of loading pattern.",
            "Loss separation analysis (Copper, Iron, Friction).",
            "Cost-benefit analysis of IE3/IE4 motor replacement."
        ]
    },
    {
        id: "meter-calibration",
        title: "Energy Meter Calibration",
        icon: PieChart,
        description: "Onsite calibration with Class 0.2S analyzer.",
        image: "/services/20.png", // Calibration uses reference meter
        content: [
            "Verification of Voltage, Current, kW, and Energy readings.",
            "Accuracy check against calibrated reference standard.",
            "Issuance of calibration certificate."
        ]
    },
];
