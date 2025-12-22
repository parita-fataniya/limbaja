import { FileText, Zap, Activity, Wind, AlertTriangle, Settings, Thermometer, Droplets, Globe, PieChart, Search, BarChart2, ShieldCheck, Cpu, Anchor, Layers, Clock, LucideIcon } from "lucide-react";

export interface SubTab {
    id: string;
    label: string;
    content: string;
    image: string;
}

export interface Section {
    type: "text" | "list" | "image" | "table" | "nested-content" | "key-value";
    title?: string;
    content?: string[];
    items?: string[] | { key: string; value: string }[];
    image?: string;
    alt?: string;
    headers?: string[];
    rows?: string[][];
    sections?: { subtitle: string; items: string[]; image?: string }[];
}

export interface Service {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    image: string;
    sections?: Section[];
    content?: string[];
    hasSubTabs?: boolean;
    subTabs?: SubTab[];
}

export const services: Service[] = [
    {
        id: "detailed-energy-audit",
        title: "Detailed Energy Audit",
        icon: FileText,
        description: "Energy Audit is defined as “the verification, monitoring and analysis of use of energy including submission of technical report containing recommendations for improving energy efficiency with cost benefit analysis and an action plan to reduce energy consumption”.\n\nIt builds on the principle \"you can't manage what you don't measure\". It essentially combines the principles of energy use and statistics.",
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
                type: "list",
                title: "Parameters Monitored",
                items: [
                    "Water", "Electricity", "Coal", "Air Compressor", "Fan & Blower", "Cooling Tower", "Pumping system", "Chiller Auxiliary", "Boiler Auxiliary"
                ]
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
        image: "/services/2.png",
        sections: [
            {
                type: "image",
                title: "Power Quality Analyzer",
                image: "/instrument/1alm31.jpg",
                alt: "Power Analyzer for Motor Efficiency"
            },
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
                title: "Benchmarking",
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
        description: "Harmonic analysis is a technique used to study and analyze the harmonic components in a periodic waveform or signal. The main use of harmonic analysis in electrical engineering is to examine the existence and properties of harmonics in electrical power systems.\n\nHarmonic voltage or current waveform frequencies are integer multiples of the fundamental frequency. However, due to non-linear loads, such as power electronics, variable speed drives, and certain types of lighting, harmonic currents and voltages can be introduced into the system.",
        image: "/services/3.png",
        sections: [
            {
                type: "image",
                title: "Harmonic analysis",
                image: "/services/detail3sub1.jpeg",
                alt: "Harmonic analysis"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Measurement of Harmonic at main plant LT or HT or Individual LT line.",
                    "Measurement of Total Harmonic Distortion of Individual Phase – Voltage & Current.",
                    "Measurement and analysis of Harmonics (up to 50th) as per standards (IEEE 519/IEC 61000 -3-2/3/4).",
                    "Method uses for Harmonic Study is 3 Phase 3 Wire Method.",
                    "Identification, Suggestion and Design Harmonic Filter of Decrease the harmonic of plant level."
                ]
            },
            {
                type: "list",
                title: "Problems Caused by Harmonics",
                items: [
                    "Blinking of Incandescent Lights - Transformer Saturation",
                    "Capacitor Failure - Harmonic Resonance",
                    "Circuit Breakers Tripping - Inductive Heating and Overload",
                    "Electronic Equipment Shutting down - Voltage Distortion",
                    "Flickering of Fluorescent Lights - Transformer Saturation",
                    "Fuses Blowing for No Apparent Reason - Inductive Heating and Overload",
                    "Motor Failures (overheating) - Voltage Drop",
                    "Neutral Conductor and Terminal Failures - Additive Triplen Currents",
                    "Electromagnetic Load Failures - Inductive Heating",
                    "Overheating of Metal Enclosures - Inductive Heating",
                    "Power Interference on Voice Communication - Harmonic Noise",
                    "Transformer Failures - Inductive Heating"
                ]
            },
            {
                type: "nested-content",
                title: "Suggestions",
                sections: [
                    {
                        subtitle: "Option 1: What are the advantages of using Harmonic Filter (Detuned) Reactor?",
                        items: [
                            "Prevents harmonic current and voltage amplitude from increasing in systems with non-linear loads.",
                            "Limits the harmonic current flowing on the capacitor. This prevents heat and high current stresses and allows the capacitors to have a longer operating life.",
                            "Prevents to overcurrent and heating problems on transformers, bus bars, cables, switchgear, protection equipment, etc."
                        ]
                    },
                    {
                        subtitle: "Option 2: Install the Active filter",
                        items: [
                            "Install the Active filter In the plant for reduce the harmonic."
                        ],
                        image: "/services/detail3sub2.jpeg"
                    }
                ]
            },
            {
                type: "table",
                title: "Total Harmonic Distortion at Transformer",
                headers: ["SN", "Location", "V1 (%)", "V2 (%)", "V3 (%)", "I1 (%)", "I2 (%)", "I3 (%)"],
                rows: [
                    ["1", "Main Incomer Average", "4.47", "4.61", "4.61", "11.83", "13.44", "13.36"],
                    ["2", "Main Incomer Minimum", "3.90", "4.10", "4.10", "9.70", "10.60", "10.90"],
                    ["3", "Main Incomer Maximum", "5.20", "5.40", "5.40", "20.70", "23.00", "23.60"]
                ]
            },
            {
                type: "table",
                title: "Individual Harmonic Distortion in Voltage",
                headers: ["SN", "Location", "3rd (%)", "5th (%)", "7th (%)", "9th (%)", "11th (%)", "13th (%)"],
                rows: [
                    ["1", "Main Incomer Average", "0.31", "4.06", "1.54", "0.14", "0.68", "0.92"],
                    ["2", "Main Incomer Minimum", "0.1", "3.5", "1", "0", "0", "0.3"],
                    ["3", "Main Incomer Maximum", "0.5", "4.8", "2.4", "0.4", "1.2", "1.4"]
                ]
            },
            {
                type: "table",
                title: "Individual Harmonic Distortion in Current",
                headers: ["SN", "Location", "3rd (%)", "5th (%)", "7th (%)", "9th (%)", "11th (%)", "13th (%)"],
                rows: [
                    ["1", "Main Incomer Average", "1.65", "10.12", "4.94", "0.75", "3.59", "3.52"],
                    ["2", "Main Incomer Minimum", "0.6", "7.7", "3.5", "0.2", "2.1", "1.6"],
                    ["3", "Main Incomer Maximum", "3.9", "19.6", "11.2", "2.2", "6.4", "5.6"]
                ]
            },
            {
                type: "image",
                image: "/services/detail3sub3.jpeg",
                alt: "Harmonic Analysis Detail 3"
            },
            {
                type: "image",
                image: "/services/detail3sub4.jpeg",
                alt: "Harmonic Analysis Detail 4"
            }
        ],
        content: []
    },
    {
        id: "compressor-audit",
        title: "Compressor Air Flow Audit",
        icon: Wind,
        description: "A compressed air audit effectively identifies inefficiencies, reduces energy costs, and improves system performance. Many industrial air compressors operate inefficiently due to leaks, artificial demand, and incorrect air pressure requirements, unnecessarily increasing cost per kWh.",
        image: "/services/4.png",
        sections: [
            {
                type: "image",
                title: "Inserted Type Air Flow Meter",
                image: "/instrument/3Inserted.jpg",
                alt: "Inserted Compressed Air Flow Meter"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Measurement of Compressed Air Flow at Generation and Consumption or Distribution line with Power Measurement. (½ inch Tapping require and must be providing by your team)",
                    "Evaluation of specific energy consumption of the compressors, kW consumed per CFM of air generated",
                    "Pressure profile of the compressed air network with respect to generating pressure, pressure required at different process components, pressure drop in pipe lines etc.",
                    "Analysis of compressed air usage pressure with respect requirement at the user ends."
                ]
            },
            {
                type: "list",
                title: "Detailed Measurement & Technical Analysis",
                items: [
                    "Flow demand classification and optimization",
                    "Compressed air system distribution",
                    "Possibility verification",
                    "Cost savings analyses",
                    "Recommendations and conclusions",
                    "Continued plan to reduce energy costs"
                ]
            },
            {
                type: "table",
                title: "Compressor Performance Measurement",
                headers: ["SN", "Compressor", "Pressure (Bar)", "Actual CFM", "KW/CFM", "Rated CFM", "Volumetric eff."],
                rows: [
                    ["1", "Compressor 4", "6.9", "109.9", "0.298", "174.0", "63.15"],
                    ["2", "Compressor 5", "6.5", "166.3", "0.214", "174.0", "95.58"],
                    ["3", "Compressor 6", "6.4", "138.8", "0.221", "174.0", "79.77"],
                    ["4", "Compressor 3", "6.3", "59.9", "0.389", "115.0", "52.06"]
                ]
            },
            {
                type: "list",
                title: "Observations",
                items: [
                    "From the above table, Compressor 5 run efficiently and the KW/CFM ratio is satisfactorily.",
                    "During field study we observe that Only compressor 4, Compressor 6 and compressor 3 efficiency is Not good.",
                    "Compressor No. 6 Suction Actuator valve is not working properly"
                ]
            }
        ],
        content: []
    },
    {
        id: "leakage-audit",
        title: "Ultrasonic Air Leakage Audit",
        icon: Search,
        description: "We provide the Compressed Air Leakage Audit service and Compressed Flow Audit Service using advanced ultrasonic detectors. Annually significant financial loss occurs due to air leakages.",
        image: "/services/5.png",
        sections: [
            {
                type: "image",
                title: "Ultrasonic Leak Detector",
                image: "/instrument/4Ultrasonic.png",
                alt: "Ultrasonic Leak Detection Instrument"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Online air leakage points identification in the circuit /plant section under assessment using advanced leak detector with location and air leak point camera capturing",
                    "Work on principle of ultrasonic",
                    "Measures the compressed air/gas leakage based on the decibel",
                    "Converts it to the quantitate cfm and has provision of tagging",
                    "Generation of report with leaks location identified",
                    "Energy savings in the compressed air network and through continuous leakage monitoring and tagging report"
                ]
            },
            {
                type: "table",
                title: "Calculation & Loss Estimation",
                headers: ["SN", "Parameter", "Unit", "Value"],
                rows: [
                    ["1", "Air leakage from valve", "CFM", "12"],
                    ["2", "Wastage of Power Due to Air leakage", "kW", "2.16"],
                    ["3", "Daily Power Wastage", "kWh", "51.84"],
                    ["4", "Annual Power Waste", "kWh", "18,921.6"],
                    ["5", "Excess Power Consumption Cost", "Rs", "1,60,834"]
                ]
            },
            {
                type: "text",
                content: [
                    "Problem Solution:",
                    "• Measurement of Compressed Air Leakage in CFM with Photo identification",
                    "• Measurement of Compressed Air Flow",
                    "• Measurement of Internal Leakage",
                    "• Base Line Compressed Air Study",
                    "• Achieve the Air leakage below 5 to 6 %"
                ]
            }
        ],
        content: []
    },
    {
        id: "power-plant-audit",
        title: "Power Plant Audit",
        icon: Settings,
        description: "Performance testing of Captive, Cogen, Waste Heat Recovery, and Gas Power Plants in accordance with respective ASME PTC Codes.",
        image: "/services/6.png",
        sections: [
            {
                type: "image",
                title: "Flue Gas Analyzer",
                image: "/instrument/9Flue.jpg",
                alt: "Flue Gas Analyzer for Boiler Efficiency"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Steam Generator Boiler Efficiency evaluation by indirect Method by (ASME PTC 4)",
                    "Effectiveness of air pre-heater and air ingress identification (ASME PTC 4.3)",
                    "Turbine (ASME PTC 6 -2004)",
                    "HP-LP Feed Water Heater (ASME PTC 12.1)",
                    "Condenser (ASME PTC 12.2)",
                    "Cooling Tower (ASME PTC 23)"
                ]
            },
            {
                type: "nested-content",
                title: "Detailed Methodology",
                sections: [
                    {
                        subtitle: "1. Steam Generator Boiler Efficiency (ASME PTC 4 -2008)",
                        items: [
                            "Heat Loss Due to dry flue gas, moisture in fuel/air, hydrogen in fuel.",
                            "Heat loss due to un-burnt carbon, radiation, and unaccounted losses.",
                            "Coal Analysis report."
                        ]
                    },
                    {
                        subtitle: "2. Effectiveness of Air Pre heater (PTC 4.3)",
                        items: [
                            "Gas Side Efficiency (GSE), Air Side Efficiency (ASE), Overall efficiency.",
                            "APH Air Leakage Calculation."
                        ]
                    },
                    {
                        subtitle: "3. Turbine (ASME PTC 6 -2004)",
                        items: ["Turbine Cylinder Efficiency", "Pressure Survey", "Performance of turbine gland sealing system"]
                    },
                    {
                        subtitle: "5. Condenser (ASME PTC 12.2)",
                        items: ["Condenser performance with reference to Cooling Water flow", "Cooling water pressure loss", "Condenser back pressure, CW inlet/outlet temps"]
                    }
                ]
            },
            {
                type: "text",
                title: "Case Study: LP Heater Steam Line",
                content: ["Energy Conservation Measure: Use LP Heater Steam Line for Heating the Boiler Feed Water and Increase the Turbine Power."]
            },
            {
                type: "table",
                title: "Case Study Data",
                headers: ["SN", "Parameter", "Unit", "Value"],
                rows: [
                    ["1", "Power Generation Without LP Heater", "MWD", "347.86"],
                    ["2", "Power Generation With LP Heater", "MWD", "351.05"],
                    ["3", "Power Saving Per day", "MWD", "3.20"],
                    ["7", "Annual Saving in Monetary Terms", "Rs", "41,72,422"],
                    ["9", "Simple Payback Period", "Month", "1.44"]
                ]
            }
        ],
        content: []
    },
    {
        id: "boiler-furnace",
        title: "Boiler & Furnace Study",
        icon: Thermometer,
        description: "Studies are undertaken to determine efficiencies of generation, distribution & Utilisation of thermal energies. Boiler efficiency tests are carried out to determine steam generation to fuel ratio.",
        image: "/services/7.png",
        sections: [
            {
                type: "image",
                title: "Flue Gas Analyzer",
                image: "/instrument/9Flue.jpg",
                alt: "Flue Gas Analyzer"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Flue gas analysis to find out excess air, oxygen profile to analyses air ingress & stack losses",
                    "Measurement of the surface temperatures in the various sections to calculate radiation & convection losses.",
                    "Complete heat and mass balance of the boiler.",
                    "Analysis of air ingress in the flue gas path.",
                    "Evaluation of boiler blow down losses.",
                    "Performance analysis of super heater, Air preheater, and economizer.",
                    "Draft system evaluation (FD, ID & PA fan efficiency)."
                ]
            }
        ],
        content: []
    },
    {
        id: "flow-measurement",
        title: "Flow Measurement",
        icon: Droplets,
        description: "Accurate flow measurements are critical to the calculation of Utility or process control applications.\n\nFlow Measurement is also useful for monitoring & troubleshooting internal processes at various points.\n\nmeasures the flow of virtually any fluid, be it liquid, gas or steam, regardless of the flow direction (bi-directional) and over an extremely wide measuring range. Due to its practical advantages, external flow measurement with clamp-on ultrasonic transducers has become a standard measuring technique in a broad range of industries and applications.\n\nThis flowmeter can be installed in just minutes without needing to shut down, thus avoiding costly downtime. This ultrasonic technology works with gases at high or low pressure in pipes made of metal and most other materials.",
        image: "/services/8.png",
        sections: [
            {
                type: "text",
                title: "Principle",
                content: [
                    "In general, ultrasonic flow meters work by transmitting ultrasonic waves and tracking how long it takes that sound to return to the unit. Clamp-on ultrasonic systems determine the volumetric flow rate according to the transit-time difference method. Since the ultrasonic signal that is irradiated into the pipe is carried by the fluid flowing inside, a time delay occurs between the acoustic transit time both with and against the flow of direction. This time delay can be measured very accurately. The transmitter calculates the volumetric flow rate based on the parameters input for the pipe geometry and the physical properties of the fluid stored in the internal database."
                ]
            },
            {
                type: "nested-content",
                title: "Type of Flow Measuring Service Provide",
                sections: [
                    {
                        subtitle: "Steam Flow Measurement",
                        items: ["Temperature Range: Flow measurement of saturated steam up to max. 180 °C", "Pipe Size: 30mm to 360 mm"]
                    },
                    {
                        subtitle: "Thermic Fluid Heater Flow Measurement",
                        items: ["Temperature Range: up to 240 °C", "Pipe Size: 15mm to 1000 mm"]
                    },
                    {
                        subtitle: "Boiler Feed Water Flow Measurement",
                        items: ["Temperature Range: up to 240 °C", "Pipe Size: 15mm to 1000 mm"]
                    },
                    {
                        subtitle: "Process Condensate Water Flow Measurement",
                        items: ["Temperature Range: up to 240 °C", "Pipe Size: 15mm to 1000 mm"]
                    },
                    {
                        subtitle: "Brine chiller Flow Measurement",
                        items: ["Temperature Range: up to -30 °C", "Pipe Size: 15mm to 6500 mm"]
                    },
                    {
                        subtitle: "Fire Fighting Line Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm"]
                    },
                    {
                        subtitle: "ETP Line Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    },
                    {
                        subtitle: "Water Pumping Station Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    },
                    {
                        subtitle: "Borewell Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    },
                    {
                        subtitle: "Chemical Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    },
                    {
                        subtitle: "Process Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    },
                    {
                        subtitle: "Cooling Tower Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    },
                    {
                        subtitle: "Condenser Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    },
                    {
                        subtitle: "Chiller Flow Measurement",
                        items: ["Temperature Range: up to 130 °C", "Pipe Size: 15mm to 6500 mm."]
                    }
                ]
            },
            {
                type: "list",
                title: "Features",
                items: [
                    "Explosion protection: ATEX/IECEx zone 2",
                    "Configurable as multifunctional measuring system: Flow and thermal energy measurement of Steam",
                    "Precise bidirectional and highly dynamic flow measurement with the non-invasive clamp-on technology",
                    "Automatic loading of calibration data and transducer detection for a fast and easy set-up (less than 5 min), providing precise and long-term stable results",
                    "High precision at fast and slow flow rates, high temperature and zero point stability serial interface"
                ]
            },
            {
                type: "list",
                title: "Applications",
                items: [
                    "Upstream (on- and offshore)",
                    "Midstream and downstream (pipelines and refineries)",
                    "Chemical industry",
                    "Energy sector (e.g. HVAC, geothermal, power plants)",
                    "Textiles"
                ]
            }
        ],
        content: []
    },
    {
        id: "process-heat",
        title: "Process Heat Mass Balance",
        icon: Activity,
        description: "Heat and mass balance is a critical aspect of process engineering. These calculations ensure that the energy and material inputs and outputs in a system are accurately accounted for, helping to optimise efficiency.",
        image: "/services/9.png",
        sections: [
            {
                type: "key-value",
                title: "Key Components",
                items: [
                    { key: "Process Streams", value: "Includes flows of materials (liquids, gases, solids) characterised by temp, pressure, density, etc." },
                    { key: "Energy Balance", value: "Determine heat transfer rates, specific heat capacities, and temp changes." },
                    { key: "Mass Balance", value: "Ensure mass entering a process equals mass exiting." }
                ]
            },
            {
                type: "text",
                title: "Benefits",
                content: [
                    "In existing industrial processes, these calculations help identify inefficiencies, energy losses, and areas for improvement. For new processes, they guide equipment design and material selection."
                ]
            }
        ],
        content: []
    },
    {
        id: "cooling-tower",
        title: "Cooling Tower Study",
        icon: Wind,
        description: "Cooling towers represent largest reuse of water in industrial applications. Optimizing operation and effective maintenance can offer significant savings (20-25%).",
        image: "/services/10.png",
        sections: [
            {
                type: "image",
                title: "Anemometer",
                image: "/instrument/12%20Lutron%20Anemometer.jpg",
                alt: "Anemometer for Air Flow Measurement"
            },
            {
                type: "image",
                title: "Hygrometer",
                image: "/instrument/19%20Hygrometer.JPG",
                alt: "Hygrometer for DBT/WBT Measurement"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Measurement of power parameters, water flow rate, air flow rate, DBT, WBT.",
                    "Heat Load Calculation.",
                    "Estimation of cooling tower performance (range, approach and effectiveness).",
                    "Calculations of Evaporation loss, Blowdown loss and Cycles of Concentration.",
                    "L/G Ratio analysis."
                ]
            },
            {
                type: "table",
                title: "Case Study: Stop Hotwell Circulation Pump",
                headers: ["SN", "Description", "Value"],
                rows: [
                    ["1", "Total Power Consumption", "15.709 kW"],
                    ["2", "Annual Power Saving Possible", "1,13,105 kWh"],
                    ["3", "Annual Saving in Monetary Terms", "Rs 9,38,776"],
                    ["4", "Investment", "Rs 1,00,000"],
                    ["5", "Payback Period", "1.28 Months"]
                ]
            },
            {
                type: "list",
                title: "Energy Saving Opportunities",
                items: [
                    "Optimise fan blade angle.",
                    "Replace splash bars with PVC cellular film fill.",
                    "Monitor L/G ratio and CW flow rates.",
                    "Control cooling tower fans based on leaving water temperatures."
                ]
            }
        ],
        content: []
    },
    {
        id: "chiller",
        title: "Chiller Performance Measurement",
        icon: Thermometer,
        description: "The performance assessment of the chiller plant involves calculation of cooling duty delivered by the system and measurement of power consumed. Specific Power Consumption (kW/TR) and EER are key metrics.",
        image: "/services/11.png",
        sections: [
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Review of present HVAC system.",
                    "Performance assessment & Estimation of actual tonnage.",
                    "Evaluation of specific energy consumption (kW/TR).",
                    "Measurement of Chiller Power Consumption Pattern."
                ]
            },
            {
                type: "table",
                title: "Case Study: Chiller Overhaul",
                headers: ["SN", "Parameter", "Unit", "Value"],
                rows: [
                    ["1", "Existing Specific energy consumption", "kW/TR", "0.81"],
                    ["2", "Suggest Specific energy consumption", "kW/TR", "0.70"],
                    ["3", "Annual Power Saving", "kWh", "91,693"],
                    ["4", "Annual Monetary saving", "Rs", "8,77,067"],
                    ["5", "Payback period", "Month", "8.21"]
                ]
            }
        ],
        content: []
    },
    {
        id: "lighting",
        title: "Lighting System",
        icon: Zap,
        description: "Lighting power consumption varies between 2 to 10% of total electrical load. Innovation in lighting has given rise to tremendous energy saving opportunities.",
        image: "/services/12.png",
        sections: [
            {
                type: "image",
                title: "Lux Meter",
                image: "/instrument/17%20HTC%20Lux%20meter.jpg",
                alt: "Lux Meter"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Examination of the lighting system in all areas, measurement of illumination levels.",
                    "Possibilities to reduce energy use by incorporating energy efficient lighting system.",
                    "Study of operating electrical parameters like voltage in the lighting circuit."
                ]
            }
        ],
        content: []
    },
    {
        id: "thermography",
        title: "Thermography Study",
        icon: Thermometer,
        description: "Thermography is used for Predictive maintenance. Many problems begin with an increase in temperature, and the IR camera allows for early detection of potential problems like loose connections or insulation failure.",
        image: "/services/13.png",
        sections: [
            {
                type: "image",
                title: "Thermography Camera",
                image: "/instrument/10Thermography.JPG",
                alt: "Infrared Thermography Camera"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Predicative Electrical Maintenance of PCC & MCC.",
                    "Measurement of Electrical Panel Temperature.",
                    "Identification of Hotspots and corrective action suggestions.",
                    "Boiler/Steam Line/Furnace Insulation Thermography."
                ]
            }
        ],
        content: []
    },
    {
        id: "steam-trap",
        title: "Steam Trap Audit",
        icon: Droplets,
        description: "A steam trap is a mechanical valve that separates condensate from steam. Many traps underperform by plugging or sticking. Optimized steam traps can reduce energy costs by 10% to 15%.",
        image: "/services/14.png",
        sections: [
            {
                type: "image",
                title: "Ultrasonic Leak Detector",
                image: "/instrument/4Ultrasonic.png",
                alt: "Ultrasonic Detector for Steam Traps"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Use thermography/ultrasonic to find plugged or leaking steam traps.",
                    "Measure and compare pipe temperatures upstream and downstream.",
                    "Detailed report about efficiency and recommendations."
                ]
            }
        ],
        content: []
    },
    {
        id: "pumping",
        title: "Pumping System Study",
        icon: Activity,
        description: "All pumps have a characteristic curve describing flow rate at net head. Pump hydraulic power and efficiency are calculated to find optimization opportunities.",
        image: "/services/15.png",
        sections: [
            {
                type: "image",
                title: "Ultrasonic Flow Meter",
                image: "/instrument/14%20Water%20Flow%20Meter%201.jpg",
                alt: "Ultrasonic Flow Meter for Pump Efficiency"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Checking of Pump efficiency.",
                    "Checking of Motor efficiency.",
                    "System resistance curve vs Pump Performance curve.",
                    "Checking of suction and discharge head.",
                    "Flow measurement.",
                    "Calculation of specific energy consumption."
                ]
            },
            {
                type: "table",
                title: "Case Study: Pump Replacement",
                headers: ["SN", "Description", "Pump 235 A (Existing)", "Proposed"],
                rows: [
                    ["1", "Efficiency", "37.26 %", "82 %"],
                    ["2", "Power @ one pump", "42.20 kW", "30.26 kW (Saving)"],
                    ["3", "Annual Power Saving", "-", "2,39,723 kWh"],
                    ["4", "Saving in monetary terms", "-", "Rs 14,38,341"],
                    ["5", "Simple payback period", "-", "2.42 Months"]
                ]
            }
        ],
        content: []
    },
    {
        id: "fan",
        title: "Fan Study",
        icon: Wind,
        description: "Fans are tested for field performance by measurement of flow, head, temperature, and electrical motor kW input. Air velocity is measured using an anemometer.",
        image: "/services/16.png",
        sections: [
            {
                type: "image",
                title: "Anemometer",
                image: "/instrument/12%20Lutron%20Anemometer.jpg",
                alt: "Anemometer for Fan Air Flow"
            },
            {
                type: "image",
                title: "S Type Pitot Tube",
                image: "/instrument/14%20S%20Type%20Pitot%20Tube.JPG",
                alt: "Pitot Tube for Static Pressure"
            },
            {
                type: "list",
                title: "Scope of Work",
                items: [
                    "Fans are tested for field performance by measurement of flow, head, temperature on air side and electrical motor kW input.",
                    "Air velocity is measured by using an anemometer at different points of the suction or discharge duct and average air velocity is calculated.",
                    "Static and dynamic pressure of the fan is measured by a pitot tube and manometer."
                ]
            },
            {
                type: "table",
                title: "Case Study: VFD vs Damper",
                headers: ["SN", "Parameter", "Unit", "Value"],
                rows: [
                    ["1", "Power Consumption", "kW", "96.5"],
                    ["2", "% of saving Possible", "%", "30.0"],
                    ["3", "Annual Power Saving", "kWh", "2,08,393"],
                    ["4", "Annual Monetary saving", "Rs", "16,87,983"],
                    ["5", "Payback Period", "Month", "Immediate"]
                ]
            }
        ],
        content: []
    },
    {
        id: "carbon",
        title: "Carbon Verification Service",
        icon: Globe,
        description: "We Provide the Carbon Offset Validation Service to the UCR Project. We have validated numerous projects ranging from Wind, Solar, Biomass to Hydro.",
        image: "/services/17.png",
        content: [
            "Verified Projects include:",
            "• UCR 177 - Vitthal Refined Sugar Ltd : Biomass Project",
            "• UCR 306 4.5 MW Bundled Solar Ground Mounted Power Project",
            "• UCR 265 33 MW Biomass based Grid-connected Project",
            "• UCR 235 6 MW Bundled Small Scale Hydro Power Project",
            "• UCR 338 14 MW SHP SÃO FRANCISCO : Hydro Project",
            "• ...and many more across India and globally."
        ]
    },
    {
        id: "arc-flash",
        title: "Electrical Arc Flash Study",
        icon: AlertTriangle,
        description: "Comprehensive safety assessment including ETAP Modelling and Short Circuit Studies.",
        image: "/services/18.png",
        content: [
            "• ETAP Modelling",
            "• Short Circuit Study",
            "• Relay Coordination Study",
            "• Arc Flash Study",
            "• Arc Flash Labels Generation",
            "• Executive Summary Preparation"
        ]
    },
    {
        id: "motor",
        title: "Electrical Motor Efficiency Study",
        icon: Settings,
        description: "Analysis of motor loading and losses (Copper, Iron, Friction, Stray). Efficiency calculation allows for cost-benefit analysis of replacement/rewinding.",
        image: "/services/19.png",
        sections: [
            {
                type: "image",
                title: "Power Quality Analyzer",
                image: "/instrument/1alm31.jpg",
                alt: "Power Analyzer for Motor Efficiency"
            },
            {
                type: "table",
                title: "Case Study: 180kW Motor",
                headers: ["Parameter", "Unit", "Value"],
                rows: [
                    ["Output", "kW", "180"],
                    ["Efficiency", "%", "90 (Nameplate) / 75.6 (Calcuated)"],
                    ["Total Loss", "kW", "58.21"],
                    ["Input Power", "kW", "238.2"]
                ]
            }
        ],
        content: []
    },
    {
        id: "meter-calibration",
        title: "Energy Meter Calibration Service",
        icon: PieChart,
        description: "We provide onsite Energy Meter Calibration Service at the plant for Voltage, Current, Power, Power Factor, and Energy Consumption.",
        image: "/services/20.png",
        sections: [
            {
                type: "image",
                title: "NanoVIP Power Analyzer",
                image: "/instrument/2nanovip.JPG",
                alt: "NanoVIP Analyzer for Calibration"
            },
            {
                type: "list",
                items: [
                    "Verification of Voltage, Current, kW, and Energy readings.",
                    "Accuracy check against calibrated reference standard.",
                    "Issuance of calibration certificate."
                ]
            }
        ],
        content: []
    }
];
