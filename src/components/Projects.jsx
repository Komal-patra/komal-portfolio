import React from "react";
import SensorFault from '../assets/SensorFault.png';
import Gemstone from '../assets/Gemstone.png';
import chatbot from '../assets/chatbot.png'; 
import signlanguage from '../assets/signlanguage.png';
import renewable from '../assets/renewable.jpg';
import winequality from '../assets/winequality.jpg';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
                <div className="flex flex-wrap gap-2 pl-2">
                    {technologies.map((tag, index) => (
                        <p key={index} className="text-[14px] text-blue-500">#{tag}</p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Medical chatbot using LLaMA-2',
        description: 'TA Retrieval-Augmented Generation (RAG) based Medical Chatbot. With the base model as Llama2 from Meta, the Retrieval system uses a medical document as corpus to generate context-rich output.',
        image: chatbot, // Updated to use the correct image
        git: 'https://github.com/Komal-patra/Medical_chatbot_using_LLaMA2_end_to_end',
        technologies: ['LLM', 'Pinecone Vector Database', 'Langchain', 'Prompt Engineering']
    },
    {
        title: 'Gemstone Price Prediction',
        description: 'End-To-End MLOPS implementation for Gemstone price Prediction.',
        image: Gemstone,
        git: 'https://github.com/Komal-patra/DiamondPricePredictionUsingMLOps',
        technologies: ['Machine Learning', 'MLflow', 'AWS', 'Data Version Control(DVC)', 'Airflow','Docker']
    },
    {
        title: 'Sensor Fault prediction',
        description: 'The end- to- end machine learning project to detect the sensor fault Detection to reduce the cost due to unnecessary repairs. So it is required to minimize the false predictions.',
        image: SensorFault,
        git: 'https://github.com/Komal-patra/Sensor_Fault_Detection_ML',
        technologies: ['ML', 'Docker', 'MongoDB', 'FastAPI', 'AWS']
    },
    {
        title: 'Sign Language Detection',
        description: 'Sign Language detection using CNN model with Yolo-v5 architecture (Object detection)',
        image: signlanguage,
        git: 'https://github.com/Komal-patra/Sign-Language-Recognition',
        technologies: ['DL', 'CNN', 'Object Detection', 'Yolo-v5']
    },
    {
        title: 'Strategic Analysis of renewable energy integration and Greenhouse gas emission',
        description: 'Analysis of Electricity and Gas Market',
        image: renewable,
        git: 'https://github.com/Komal-patra/Energy-Analysis',
        technologies: ['Python', 'Dagster', 'MongoDB', 'Seaborn','PowerBI']
    },
    {
        title: 'Wine Quality Prediction',
        description: 'This is the end to end Machine learning project based on Wine Quality Prediction',
        image: winequality,
        git: 'https://github.com/Komal-patra/Energy-Analysis',
        technologies: ['Python', 'MongoDB', 'Flask']
    }
];

export default Projects;
