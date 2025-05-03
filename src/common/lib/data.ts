import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import kneeImg from '@/../public/images/kneepain.jpg';
import fluidImg from '@/../public/images/tube.jpg';
import waferImg from '@/../public/images/wafer.png';
import carImg from '@/../public/images/Layout.jpg';
import car1Img from '@/../public/images/circuit.png';
import chipImg from '@/../public/images/chip.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const educationData = [
  {
    university:'University of Cincinnati',
    degree: 'Master of Science in Electrical Engineering',            
    GPA: 'GPA: 3.96 / 4.0',
    location: 'Cincinnati, Ohio',
    courses: [
      'Microfabrication Lab',
      'Fundamentals of MEMS',
      'Advanced MEMS',
      'Biosensors & Bioelectronics',
      'Introduction to VLSI Design',
      'Microfabrication of Semiconductor Devices'],
    icon: './svgs/uc.svg',
    date: 'August 2022 - May 2025',
  },
  {
    university:'Savitribai Phule Pune University',
    degree: 'Bachelor of Engineering in Electronics and Telecommunication',
    GPA: 'GPA: 3.86 / 4.0',
    location: 'Cincinnati, Ohio',
    courses: [
      'Digital Electronics',
      'Analog Circuits',
      'Integrated Circuits',
      'VLSI Design',
      'Microcontrollers',
      'Digital Signal Processing',
      'PLC & Automation',],
    icon: './svgs/sppu.png',
    date: 'August 2018 - June 2022',
  },

] as const;
export const experiencesData = [
  {
    title: 'Graduate Teaching Assistant – Microfabrication Lab',
    company:'University of Cincinnati',
    location: 'Cincinnati, Ohio',
    description:
    'Instructed students on MEMS sensor fabrication using photolithography, etching, PVD, and bonding in a cleanroom environment. Also, ptovided training on equipment use and troubleshooting, while ensuring OSHA safety compliance.',
    icon: './svgs/uc.svg',
    date: 'January 2023 - April 2025',
  },
  {
    title: 'Manufacturing Engineer Intern',
    company:'Schnedier Electric',
    location: 'Cincinnati, Ohio',
    description:
    'Drove process improvements via cycle time reduction by 50% through SOPs, root cause analysis, and statistical process control. Implemented lean and AI-driven strategies to improve efficiency and cut lead times. Led 5S and Kaizen initiatives, boosting productivity by 20% with zero safety incidents.',
    icon: './svgs/se.png',
    date: 'August 2024 - December 2024',
  },
  {
    title: 'Graduate Trainee Intern',
    company:'Rishabh Instruments',
    location: 'India',
    description:
      'Assisted in PCB design using Eagle, assembly and testing of components and collaborated with NPI teams to develop and evaluate industrial control products.',
    icon: './svgs/ri.jpg',
    date: 'August 2021 - September 2021',
  },
  
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Long Term Knee Joint Monitoring',
    description: 'A wireless, biocompatible implant designed for real-time monitoring of osteoarthritis using precision microfabrication and advanced packaging techniques.',
    tags: ['Microfabrication/MEMS', 'SolidWorks', 'Molding', 'Sensor Design', 'Polymer Packaging'],
    imageUrl: kneeImg,
    link: '', // Optional: add portfolio or publication link
    detailedDescription: [
      `This project involves the design and fabrication of an advanced implantable biosensor aimed at improving the diagnosis and management of osteoarthritis through real-time monitoring of joint fluid. The sensor operates passively and wirelessly, requiring no battery or external power source once implanted. This posed unique engineering challenges, especially around miniaturization, reliability, and biocompatibility.`,
      
      `To construct the sensor, I used micro Electrical Discharge Machining (micro EDM) to precisely shape high-resolution features necessary for accurate in vivo fluid analysis. Micro EDM was selected for its ability to machine hard metals with exceptional precision at the microscale, which was critical for interfacing with the biochemical environment of the joint.`,
      
      `The device’s packaging was developed in SolidWorks and designed to meet rigorous biomedical standards. A soft, moldable biocompatible polymer was chosen to encapsulate the sensor, providing insulation and structural protection while maintaining tissue compatibility. To ensure the sensor remained in place post-implantation, the enclosure was outfitted with self-expanding Nitinol anchors that deploy upon insertion to mechanically secure the device in situ.`,
      
      `In addition to hardware design, I developed a comprehensive process workflow that integrated sensor fabrication, packaging, and testing. The process ensured electrical functionality, mechanical durability, and biological compatibility. Together, these elements formed a robust implantable system with potential for clinical translation in monitoring and managing joint degeneration in osteoarthritis patients.`,
    ],
    extraImg: [],
  },
  {
    title: 'Microfluidic Viscometer for Biomedical Fluid Analysis',
    description: `A compact, cost-effective microfluidic viscometer for small sample volumes, designed to enable precise viscosity measurements in biomedical applications.`,
    tags: ['Product Design', 'COMSOL', 'Microfluidics', 'Fluid Dynamics', 'System Integration'],
    imageUrl: fluidImg,
    link: '', // Optional: add portfolio or publication link
    detailedDescription: [
      `The project focused on developing a microfluidic viscometer that operates on small fluid samples (~3 mL), ideal for biomedical research where sample volume is limited. The device uses microfluidic principles to measure viscosity with high accuracy and minimal sample consumption.`,
    
    `Through COMSOL simulations, I optimized the flow channel design and the interaction between fluid and device geometry. The simulations were crucial for adjusting factors like channel dimensions and flow rates to ensure repeatability and precision in measurements.`,
    
    `The system incorporated a syringe pump for controlled fluid flow, enabling reliable and consistent readings across multiple test samples. This integration not only ensures accurate results but also simplifies the device operation for researchers in resource-constrained environments.`,
    
    `This innovative design offers a valuable, cost-effective solution for viscosity measurements in biomedical fluids, making it accessible for smaller labs or clinical settings where conventional viscometers are not practical due to the required sample volume.`,
    ],
    extraImg: [fluidImg],
  },
  {
    title: 'Clean Room Fabrication of Silicon Pressure Sensors',
    description: `Fabrication of MEMS-based silicon pressure sensors using microfabrication techniques in a cleanroom environment, achieving high accuracy and repeatability through precise testing.`,
    tags: ['MEMS', 'Microfabrication', 'Cleanroom', 'Silicon Sensors', 'Pressure Sensing'],
    imageUrl: waferImg,
    link: '', // Optional: add portfolio or publication link
    detailedDescription: [
      `This project involved the fabrication of MEMS-based pressure sensors on 2-inch n-type silicon wafers in a cleanroom environment. Using established microfabrication process flows, I achieved highly accurate pressure sensing by focusing on precise resistance and voltage testing.`,
      
      `The fabrication process included photolithography, etching, and deposition techniques to pattern the sensor components onto the silicon wafer. This was followed by the integration of electrical contacts and microstructures designed to detect pressure variations with high sensitivity.`,
      
      `Through extensive testing, the sensors demonstrated 90% accuracy, with thorough resistance and voltage measurements taken at multiple stages of the fabrication process. These tests were critical for ensuring sensor performance and identifying areas for improvement.`,
      
      `I meticulously documented the fabrication steps and testing procedures to ensure repeatability of the process and to support iterative improvements in the sensor design. This data is invaluable for refining the sensor’s performance and ensuring reliability in future iterations.`,
    ],
    extraImg: [waferImg],
  },

  {
    title: 'Smart Electric Vehicle Charging Station',
  description: `Designed and developed an automated EV charging station with integrated Human-Machine Interface (HMI) and payment system, simulating scalable smart manufacturing processes.`,
  tags: ['PLC', 'EV Charging', 'HMI', 'Automation', 'Smart Manufacturing'],
  imageUrl: carImg,car1Img,
  link: '', // Optional: add portfolio or publication link
  detailedDescription: [
    `This project involved the design and development of an automated electric vehicle (EV) charging station, featuring an integrated Human-Machine Interface (HMI) and payment system. The system was designed to simulate a scalable smart manufacturing environment, optimizing user interaction and operational efficiency.`,
    
    `The design included a responsive, user-friendly HMI that allowed drivers to easily monitor charging status, select payment options, and control charging functions. The system was programmed using a PLC-based control system, ensuring reliable automation and real-time data processing for optimal charging performance.`,
    
    `The charging station utilized sensor integration for monitoring key parameters such as battery charge level, charging current, and voltage. This enabled real-time feedback to both the user and the central system, ensuring safe and efficient charging sessions.`,
    
    `Additionally, I integrated a payment gateway within the system, enabling secure, automated transactions for users. This setup not only optimized the charging process but also supported smart grid connectivity, allowing for potential scalability in future installations and improvements in energy distribution efficiency.`,
  ],
  extraImg: [carImg, car1Img],
  },
  {
    title: 'Chip Design and Verification',
  description: `Designed and verified a digital chip with integrated functionalities for efficient data processing and system control.`,
  tags: ['Chip Design', 'Verification', 'Digital Systems', 'VHDL', 'FPGA'],
  imageUrl: chipImg,
  link: '', // Optional: add portfolio or publication link
  detailedDescription: [
    `This project involved designing and verifying a digital chip intended for efficient data processing and control in embedded systems. The design process included creating the architecture and defining the functional specifications of the chip.`,
    
    `I utilized VHDL (VHSIC Hardware Description Language) to implement the chip’s functionality, focusing on high efficiency and low power consumption. The chip was designed to integrate seamlessly into a larger embedded system, with features for real-time data processing, signal routing, and error detection.`,
    
    `Verification was performed using simulation tools to test the chip's behavior under different scenarios, ensuring its reliability and correctness before physical implementation. Extensive test benches were created to simulate edge cases, check timing constraints, and validate the chip's operation across all potential conditions.`,
    
    `The successful design and verification of the chip were critical in ensuring its readiness for deployment in larger systems. This process also helped refine my understanding of digital circuit design and FPGA-based implementation in practical applications.`,
  ],
  extraImg: [chipImg],
  },

] as const;

export const skillsData = [
  {
    title:'Technical skills',
    tags: [
      'Semiconductor Fabrication Techniques', 
      'Process Development', 
      'Cleanroom Protocols',
      'MEMS',
      'Product Design & Development', 
      'Manufacturing',
      'Packaging & Assembly', 
      'Sensor Design & Integration'],
  },
  {
    title:'Fabrication',
    tags: [
      'Micro-Electro Discharge Machining', 
      'Additive Manufacturing', 
      'Polymer Molding & Casting', 
      'Electropolishing', 
      'Dip Coating',
      'Photolithography', 
      'Etching', 
      'Anodic Bonding', 
      'E-beam Evaporation',
      'Thin Film Deposition' ],
  },
  {
    title:'Characterization Tools and Lab Equipments',
    tags: [
      'Scanning Electron Microscopy (SEM)', 
      'Optical Microscopy', 
      'X-ray Diagnostics', 
      'Surface Profilometry',
      'Oscilloscope', 
      'Digital Multimeter', 
      'Function Generator'],
  },
  {
    title:'Softwares',
    tags: [
      'SolidWorks',
      'AutoCAD', 
      'COMSOL Multiphysics', 
      'MATLAB',
      'JMP',
      'NI Multisim',
      'Eagle', 
      'Magic', 
      'ModelSim',
      'Xilinx',
      'Proteus',
      'MS Office Suite'],
  },
  {
    title:'Programming Languages',
    tags: [
      'C', 
      'C++', 
      'VHDL', 
      'Assembly Language', 
      'G-Code'],
  },
  {
    title:'Manufacturing/Process Engineering',
    tags: [
      'Lean Six Sigma Green Belt', 
      'Root Cause Analysis (RCA)', 
      'Faliure Mode and Effect Analysis (FMEA)', 
      '5S', 
      'Design of Experiments',
      'Value Stream Mapping',
      'Kaizen'],
    },

    {
      title:'Certifications',
      ags: [
        'Lean Six Sigma - Green Belt', 
        'Lean Six Sigma - Yellow Belt',
        'Introduction to 5S',
        'OASiS Rapid Certification in Semiconductors Program'],

    },
  ] as const;

 