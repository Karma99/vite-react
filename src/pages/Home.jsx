import React from "react";
import ToDoList from '../components/ToDoList';
import Faq from '../components/Faq';


const Home = (props) => {

    return (
        <div className="home-wrapper">

            <ToDoList toDoList={props.homeJson.toDoList} />

            <Faq faqList={props.homeJson.faqList} />
   
        </div>
    );
};

export default Home;